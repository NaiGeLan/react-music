import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
// import { fromJS } from 'immutable';
import { getBannerRequest, getRecommendListRequest } from '../../api/request'
const initialState = {
  loading: true,
  bannerList: [],
  recommendList: [],
}

export const getBanner = createAsyncThunk('getBannerRequest', async () => {
  const res = await getBannerRequest()
  return res.banners
})

export const getRecommend = createAsyncThunk('getRecommendListRequest', async () => {
  const res = await getRecommendListRequest()
  return res.result
})

export const recommendSlice = createSlice({
  name: 'getBannerAndRecommend',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getBanner.pending, (state) => {
      state.loading = true
    })
    builder.addCase(getBanner.fulfilled, (state, action) => {
      state.loading = false
      state.bannerList = action.payload
    })
    builder.addCase(getBanner.rejected, (state, action) => {
      state.loading = false
    })
    builder.addCase(getRecommend.pending, (state) => {
      state.loading = true
    })
    builder.addCase(getRecommend.fulfilled, (state, action) => {
      state.loading = false   
      state.recommendList = action.payload
    })
    builder.addCase(getRecommend.rejected, (state, action) => {
      state.loading = false
    })
  },
})

export const { getBannerAndRecommend } = recommendSlice.actions

export default recommendSlice.reducer
