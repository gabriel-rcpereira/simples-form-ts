import axios from 'axios';
import { User } from '../domains/user';

export const fetchAll = async (): Promise<User[]> => {
  const result = await axios.get<User[]>('http://localhost:8080/api/v1/users');
  return result.data;
};

export const createUser = async (user: { username: string; name: string }) => {
  await axios.post('http://localhost:8080/api/v1/users', user);
};

export const updateUser = async (userToUpdate: { id: string; name: string }) => {
  await axios.put(`http://localhost:8080/api/v1/users/${userToUpdate.id}`, { name: userToUpdate.name });
};

export const deleteByUsername = async (id: string) => {
  await axios.delete(`http://localhost:8080/api/v1/users/${id}`);
}