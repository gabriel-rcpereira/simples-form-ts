import { useRef, useEffect, useState } from 'react';

import { useActions, useTypedSelector } from '../../../hooks';

import './dashboard.scss';

import { createUser, updateUser, deleteByUsername } from '../../../services/userService';

import { User } from '../../../domains/user';

import UserList from '../../UserList';
import FormComponent from '../../FormComponent';

const Dashboard = () => {
  
  const { fetchAllUsers } = useActions();
  const { data: users } = useTypedSelector((state) => state.users);
  
  const referenceToFetchAllUsers = useRef<any>();
  referenceToFetchAllUsers.current = fetchAllUsers;

  const [ userToEdit, setUserToEdit ] = useState<User | undefined>();

  useEffect(() => {
    referenceToFetchAllUsers.current();
  }, []);

  const handleSaveOnClick = async (user: User) => {   
    if (isEditMode()) {
      await updateUser({ id: user.id, name: user.name });
    } else {
      await createUser({ username: user.username, name: user.name });
    }

    fetchAllUsers();
    setUserToEdit(undefined);
  };

  const handleEditOnClick = (user: User) => {
    setUserToEdit(user);
  };

  const handleDeleteOnClick = async (id: string) => {
    await deleteByUsername(id);

    fetchAllUsers();
  };

  const isEditMode = (): boolean => {
    return !!(userToEdit);
  }

  return (
    <>     
      <FormComponent 
        handlerSave={handleSaveOnClick} 
        userToEdit={userToEdit} 
      />
      <UserList 
        handlerEdit={handleEditOnClick} 
        handlerDelete={handleDeleteOnClick} 
        users={users} 
      />
    </>
  );
};

export default Dashboard;