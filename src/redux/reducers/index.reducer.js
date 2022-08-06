import { combineReducers } from 'redux';

import { authReducer } from './auth.reducer';
import { pollReducer } from './poll.reducer';
import { requestReducer } from './request.reducer';

export const rootReducer = combineReducers({ auth: authReducer, request: requestReducer, poll: pollReducer });
