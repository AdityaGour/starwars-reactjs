import {createStore, applyMiddleware, compose} from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import Reducers from '../reducers';

const middleWare = [thunk];
const store = createStore(Reducers, compose(applyMiddleware(...middleWare)));

export default store;