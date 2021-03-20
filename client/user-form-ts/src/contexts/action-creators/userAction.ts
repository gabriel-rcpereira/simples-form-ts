import { Dispatch } from 'react';

import { FetchAllUserAction, UserActionType } from '../action-types/user';
import { fetchAll } from '../../services/userService';

export const fetchAllUsers = () => {
  return async (dispatch: Dispatch<FetchAllUserAction>) => {
    const users = await fetchAll();
    
    dispatch({
      type: UserActionType.FETCH_ALL_USERS,
      payload: users
    });

  };
};
