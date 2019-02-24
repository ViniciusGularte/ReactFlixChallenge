'use strict'

import createReducer from '../create-reducer'
import {ADD_VIDEO} from './actions'

const initialState = {}

const videos = createReducer(initialState,{
  [ADD_VIDEO]:(state,action) => ()
})
export default videos
