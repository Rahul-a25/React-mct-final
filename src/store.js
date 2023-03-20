import {createStore} from 'redux'
import {rootreducer }from './component/redux/rootreducers/combine'
export const store=createStore(rootreducer);