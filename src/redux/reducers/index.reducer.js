import { combineReducers } from 'redux';

import { authReducer } from './auth.reducer';
import { requestReducer } from './request.reducer';

export const rootReducer = combineReducers({ auth: authReducer, request: requestReducer });
