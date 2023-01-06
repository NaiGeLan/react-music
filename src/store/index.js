import { configureStore } from "@reduxjs/toolkit";
import recommendReducer from './features/getRecommendList'
// configureStore创建一个redux数据
const store = configureStore({
  // 合并多个Slice
  reducer: {
    // counter: counterSlice
    recommend: recommendReducer
  },
});

export default store;
