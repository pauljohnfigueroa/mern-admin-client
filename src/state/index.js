import { createSlice } from '@reduxjs/toolkit'

// Initial mode of the theme
const initialState = {
    mode: 'dark'
}

export const globalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {
        setMode: (state) => {
            // toggle
            state.mode = state.mode === 'light' ? 'dark' : 'light'
        }
    }
})

export const { setMode } = globalSlice.actions

export default globalSlice.reducer

