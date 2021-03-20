export enum UserActionType {
  FETCH_ALL_USERS = 'fecth_all_users'
};

export interface FetchAllUserAction {
  type: UserActionType.FETCH_ALL_USERS;
  payload: any[];
};