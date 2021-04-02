// chips: ルートリデューサーを定義。(他のリデューサーを統合する)
import { combineReducers } from 'redux'

import events from '../reducers/events';
import operationLogs from '../reducers/operationLogs';

export default combineReducers({
    events,
    operationLogs
});