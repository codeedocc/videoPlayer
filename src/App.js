import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material'

import {
  Navbar,
  ChannelDetail,
  Feed,
  SearchFeed,
  VideoDetail,
} from './components'

const App = () => (
  <BrowserRouter>
    <Box sx={{ backgroundColor: '#000' }}>
      <Navbar />
      <Routes>
        <Route path="/videoPlayer" exact element={<Feed />} />
        <Route path="/videoPlayer/video/:id" element={<VideoDetail />} />
        <Route path="/videoPlayer/channel/:id" element={<ChannelDetail />} />
        <Route
          path="/videoPlayer/search/:searchTerm"
          element={<SearchFeed />}
        />
      </Routes>
    </Box>
  </BrowserRouter>
)

export default App
