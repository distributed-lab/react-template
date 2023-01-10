import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { api } from '@/api'
import { Post } from '@/types'

interface PostsState {
  posts: Post[]
}

const initialState: PostsState = {
  posts: [],
}

export const getPosts = createAsyncThunk('posts/list', async (_, thunkAPI) => {
  try {
    const { data } = await api.get<Post[]>('/posts')
    return data
  } catch (error) {
    return thunkAPI.rejectWithValue(error)
  }
})

export const postsSlice = createSlice({
  name: 'posts-slice',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getPosts.fulfilled, (state, action) => {
      state.posts = action.payload || []
    })
    builder.addCase(getPosts.rejected, (state, action) => {
      throw new Error(action.error.message)
    })
  },
})

export default postsSlice.reducer
