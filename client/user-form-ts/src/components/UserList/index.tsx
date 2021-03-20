import { IconButton } from '@material-ui/core';
import { User } from '../../domains/user';

type Props = {
  handlerEdit: (user: User) => void;
  handlerDelete: (id: string) => void;
  users: User[];
};

const UserList: React.FC<Props> = ({ handlerEdit, handlerDelete, users }) => {

  const renderTableRows = (user: User) => {
    const { username, name } = user;

    return (
      <tr key={username}>
        <th>
          <IconButton size="small" onClick={() => handlerEdit(user)}>
            <span className="material-icons">mode_edit</span>
          </IconButton>
          <IconButton size="small" onClick={() => handlerDelete(user.id)}>
            <span className="material-icons">delete</span>
          </IconButton>               
        </th>
        <td>{username}</td>
        <td>{name}</td>
      </tr>
    );
  };

  return (
    <section className="dashboard-list">
      <table className="table table-secondary table-hover table-striped">
        <thead className="thead-dark">
          <tr>
            <th></th>
            <th>Username</th>
            <th>Nome</th>
          </tr>
        </thead>
        <tbody>
          { users.map((user) => renderTableRows(user)) }
        </tbody>
      </table>
    </section>
  );
};

export default UserList;

