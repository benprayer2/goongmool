import * as me from './contrib/meAction';

import * as login from './loginAction';
import * as topic from './topicAction';
import * as create from './createAction';
import * as search from './searchAction';
import * as explore from './exploreAction';
import * as profile from './profileAction';
import * as notification from './notificationAction';

/* ========================================================
 * Contrib Actions
 * ======================================================== */

export const meAction = me;

/* ========================================================
 * Container Actions
 * ======================================================== */

export const loginAction = login;
export const topicAction = topic;
export const createAction = create;
export const searchAction = search;
export const exploreAction = explore;
export const profileAction = profile;
export const notificationAction = notification;
