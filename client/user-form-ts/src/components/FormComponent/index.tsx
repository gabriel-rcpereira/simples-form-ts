import React, { useState, useEffect } from 'react';

import { Button, TextField } from '@material-ui/core';
import { User } from '../../domains/user';

type FormProps ={
  handlerSave: (user: User) => void;
  userToEdit: User | undefined;
}

const FormComponent: React.FC<FormProps> = ({ handlerSave, userToEdit }) => { 
      
    const [ id, setId ] = useState('');
    const [ username, setUsername ] = useState('');
    const [ name, setName ] = useState('');

    useEffect(() => {
      if (!userToEdit) {
        return;
      }

      setId(userToEdit.id);
      setUsername(userToEdit.username);
      setName(userToEdit.name);
    }, [ userToEdit ]);

    const handleUsernameOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setUsername(event.target.value.toUpperCase());
    };

    const handleNameOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setName(event.target.value);
    };

    const handleSaveOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      handlerSave({ id, username, name });

      setId('');
      setUsername('');
      setName('');
    };

    const isEditionMode = (): boolean => {        
        return !!(userToEdit) && (!!(userToEdit.username) || !!(userToEdit.name));
    };

    const isSaveDisabled = (): boolean => {
      return !(username) || !(name);
    };

    return (
        <form style={{ width: 740, margin: 'auto', paddingTop: 50, paddingBottom: 50 }} onSubmit={handleSaveOnSubmit} >
        <div className="d-flex justify-content-between">
          <TextField 
            disabled={userToEdit && isEditionMode()} 
            required 
            label="Username" 
            style={{ width: 345 }} 
            value={username} 
            onChange={handleUsernameOnChange} 
          />
          <TextField 
            required 
            label="Nome" 
            style={{ width: 345 }} 
            value={name} 
            onChange={handleNameOnChange} 
          />
        </div>
        <div style={{ paddingTop: 30 }} className="d-flex justify-content-end">
            <Button 
              disabled={isSaveDisabled()} 
              color="secondary" 
              variant="contained">
                Salvar
            </Button>
        </div>
      </form>
    );
}

export default FormComponent;

