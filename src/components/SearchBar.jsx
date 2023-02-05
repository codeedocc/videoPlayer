import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Paper, IconButton } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

const SearchBar = () => {
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState('')

  const handleSumbit = (e) => {
    e.preventDefault()

    if (searchTerm) {
      navigate(`/videoPlayer/search/${searchTerm}`)

      setSearchTerm('')
    }
  }

  return (
    <Paper
      component="form"
      onSubmit={handleSumbit}
      sx={{
        borderRadius: 20,
        border: '1px solid #e3e3e3',
        pl: 2,
        boxShadow: 'none',
        mr: { sm: 5 },
      }}
    >
      <input
        type="text"
        className="search-bar"
        placeholder="Найти..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <IconButton type="submit" sx={{ p: '10px', color: 'red' }}>
        <SearchIcon />
      </IconButton>
    </Paper>
  )
}

export default SearchBar
