import { UserContextState } from '../../domains/user';
import { ActionType } from '../action-types';
import { UserActionType } from '../action-types/user';

const initialState: UserContextState = { data: [] };

const userReducer = (
    state: UserContextState = initialState, 
    action: ActionType
  ): UserContextState => {
  
  switch (action.type) {        
    case UserActionType.FETCH_ALL_USERS:
      return {
        data: [ ...action.payload ]
      };
    default:
      return state;
  };
};

export default userReducer;