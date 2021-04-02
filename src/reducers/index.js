// chips: ルートリデューサーを定義。(他のリデューサーを統合する)
import { combineReducers } from 'redux'

import events from '../reducers/events';

export default combineReducers({ events });