import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleWare from 'redux-saga';

import rootReducer from '../redux/reducers';
import rootSaga from '../saga'

const configStore = () => {
    const sagaMiddleware = createSagaMiddleWare()

    return {
        ...createStore(rootReducer, applyMiddleware(sagaMiddleware)),
        runSaga: sagaMiddleware.run(rootSaga)
    }
}

export default configStore