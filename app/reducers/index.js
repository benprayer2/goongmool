import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import me from './contrib/meReducer';

import login from './loginReducer';
import topic from './topicReducer';
import create from './createReducer';
import search from './searchReducer';
import explore from './exploreReducer';
import profile from './profileReducer';
import notification from './notificationReducer';

export default combineReducers({
  me, login, topic, create, search, explore, profile, notification, routing,
});
