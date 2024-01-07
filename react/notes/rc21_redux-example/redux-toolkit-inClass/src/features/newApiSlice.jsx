import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios"

const initialState = {
  newsData: [],
  error: false,
  loading: false,
}

//4c8668fd0dd8484f806177962a8c7b82
export const getNewsData = createAsyncThunk(
  "getNews",  //? type

  async () => {
  //? api istek fonksiyonu
  const API_KEY = "4c8668fd0dd8484f806177962a8c7b82"
  const url = `https://newsapi.org/v2/top-headlines?country=tr&apiKey=${API_KEY}`
  const data = await axios(url)
  console.log(data.data.articles);
  return data.data.articles
}
)

const newApiSlice = createSlice({
  name: "newsApi",
  initialState,
  reducers: {
    clearNewsData: (state) => {
      state.newsData = []
    },
  }
});

export const {} = newApiSlice.actions

export default newApiSlice.reducer