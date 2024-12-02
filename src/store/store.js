import {configureStore} from '@reduxjs/toolkit'
import todoHandler  from '../slice/todoSlice'

export const store=configureStore({
  reducer:{
todo:todoHandler
  }
})

export default store