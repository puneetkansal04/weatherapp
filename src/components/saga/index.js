import { fork } from 'redux-saga/effects'
import apiFunctions from './apiFunctions'

export default function* ReduxSaga() {
    yield fork(apiFunctions)
}