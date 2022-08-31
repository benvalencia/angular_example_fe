import { createFeatureSelector, createReducer, createSelector } from '@ngrx/store';
import * as authenticationActions from '../actions/authentication.actions';
import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {AuthenticationActionType} from '../actions/authentication.actions';
import {AuthenticationEntity} from '../core/entities/authentication.entity';
export const authenticationFeatureKey = 'authentication';

export interface IAuthenticationState extends EntityState<AuthenticationEntity> {
  token: string;
  loading: boolean;
  loaded: boolean;
  error: string;
}

export const authenticationAdapter: EntityAdapter<AuthenticationEntity>
  = createEntityAdapter<AuthenticationEntity>();

export const AuthenticationInit: IAuthenticationState = {
  ids: [],
  token: '',
  entities: {},
  loading: false,
  loaded: false,
  error: ''
};

export const initialState = authenticationAdapter.getInitialState(AuthenticationInit);

export function authenticationReducer(
  state = initialState,
  action: authenticationActions.Actions
): IAuthenticationState {
  switch (action.type) {
    case AuthenticationActionType.SIGN_IN: {
      return {
        ...state,
        loading: true
      };
    }
    case AuthenticationActionType.SIGN_IN_SUCCESS: {
      return authenticationAdapter.addOne(
        action.payload,
        {
          ...state,
          loading: false,
          loaded: true
        }
      );
    }
    case AuthenticationActionType.SIGN_IN_FAIL: {
      return {
        ...state,
        entities: {},
        loading: false,
        loaded: false,
        error: action.payload
      };
    }
    default: {
      return state;
    }
  }
}

const getAuthenticationFeatureState
  = createFeatureSelector<IAuthenticationState>('Authentication');

export const getAuthentication = createSelector(
  getAuthenticationFeatureState,
  authenticationAdapter.getSelectors().selectAll
);
export const getAuthenticationLoading = createSelector(
  getAuthenticationFeatureState,
  ( state: IAuthenticationState ) => state.loading
);
export const getAuthenticationLoaded = createSelector(
  getAuthenticationFeatureState,
  ( state: IAuthenticationState ) => state.loaded
);
export const getAuthenticationToken = createSelector(
  getAuthenticationFeatureState,
  ( state: IAuthenticationState ) => state.token
);
export const getError = createSelector(
  getAuthenticationFeatureState,
  ( state: IAuthenticationState ) => state.error
);

export const reducer = createReducer(
  initialState
);

