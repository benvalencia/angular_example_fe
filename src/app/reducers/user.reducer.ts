import { createFeatureSelector, createReducer, createSelector } from '@ngrx/store';
import * as userActions from '../actions/user.actions';
import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {UserActionType} from '../actions/user.actions';
import {UserEntity} from '../core/entities/user.entity';

export const userFeatureKey = 'user';

export interface IUserState extends EntityState<UserEntity> {
  token: string;
  loading: boolean;
  loaded: boolean;
  error: string;
}

export const userAdapter: EntityAdapter<UserEntity>
  = createEntityAdapter<UserEntity>();

export const UserInit: IUserState = {
  ids: [],
  token: '',
  entities: {},
  loading: false,
  loaded: false,
  error: ''
};

export const initialState = userAdapter.getInitialState(UserInit);

export function userReducer(
  state = initialState,
  action: userActions.Actions
): IUserState {
  switch (action.type) {
    // GET USER BY ID
    case UserActionType.GET_USER_BY_ID: {
      return {
        ...state,
        loading: true
      };
    }
    case UserActionType.GET_USER_BY_ID_SUCCESS: {
      return userAdapter.addOne(
        action.payload,
        {
          ...state,
          loading: false,
          loaded: true
        }
      );
    }
    case UserActionType.GET_USER_BY_ID_FAIL: {
      return {
        ...state,
        entities: {},
        loading: false,
        loaded: false,
        error: action.payload
      };
    }
    // GET USER BY TOKEN
    case UserActionType.GET_USER_BY_TOKEN: {
      return {
        ...state,
        loading: true
      };
    }
    case UserActionType.GET_USER_BY_TOKEN_SUCCESS: {
      return userAdapter.addOne(
        action.payload,
        {
          ...state,
          loading: false,
          loaded: true
        }
      );
    }
    case UserActionType.GET_USER_BY_TOKEN_FAIL: {
      return {
        ...state,
        entities: {},
        loading: false,
        loaded: false,
        error: action.payload
      };
    }
    // UPDATE USER
    case UserActionType.UPDATE_USER: {
      return {
        ...state,
        loading: true
      };
    }
    case UserActionType.UPDATE_USER_SUCCESS: {
      return userAdapter.addOne(
        action.payload,
        {
          ...state,
          loading: false,
          loaded: true
        }
      );
    }
    case UserActionType.UPDATE_USER_FAIL: {
      return {
        ...state,
        entities: {},
        loading: false,
        loaded: false,
        error: action.payload
      };
    }
    // SOFT-DELETE USER
    case UserActionType.SOFT_DELETE_USER: {
      return {
        ...state,
        loading: true
      };
    }
    case UserActionType.SOFT_DELETE_USER_SUCCESS: {
      return userAdapter.addOne(
        action.payload,
        {
          ...state,
          loading: false,
          loaded: true
        }
      );
    }
    case UserActionType.SOFT_DELETE_USER_FAIL: {
      return {
        ...state,
        entities: {},
        loading: false,
        loaded: false,
        error: action.payload
      };
    }
    // DELETE USER
    case UserActionType.DELETE_USER: {
      return {
        ...state,
        loading: true
      };
    }
    case UserActionType.DELETE_USER_SUCCESS: {
      return userAdapter.addOne(
        action.payload,
        {
          ...state,
          loading: false,
          loaded: true
        }
      );
    }
    case UserActionType.DELETE_USER_FAIL: {
      return {
        ...state,
        entities: {},
        loading: false,
        loaded: false,
        error: action.payload
      };
    }
    // DEFAULT
    default: {
      return state;
    }
  }
}

const getUserFeatureState
  = createFeatureSelector<IUserState>('User');

export const getUser = createSelector(
  getUserFeatureState,
  userAdapter.getSelectors().selectAll
);
export const getUserLoading = createSelector(
  getUserFeatureState,
  ( state: IUserState ) => state.loading
);
export const getUserLoaded = createSelector(
  getUserFeatureState,
  ( state: IUserState ) => state.loaded
);
export const getError = createSelector(
  getUserFeatureState,
  ( state: IUserState ) => state.error
);

export const reducer = createReducer(
  initialState
);

