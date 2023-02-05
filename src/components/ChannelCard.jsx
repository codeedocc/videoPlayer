import React from 'react'
import { Box, CardContent, CardMedia, Typography } from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import { Link } from 'react-router-dom'
import { logoChannel } from '../utils/constants'

const ChannelCard = ({ channelDetail, marginTop }) => {
  return (
    <Box
      sx={{
        boxShadow: 'none',
        borderRadius: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: { xs: '356px', md: '320px' },
        height: '326px',
        margin: 'auto',
        marginTop: marginTop,
      }}
    >
      <Link to={`/videoPlayer/channel/${channelDetail?.id?.channelId}`}>
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'center',
            color: '#fff',
          }}
        >
          <CardMedia
            image={logoChannel}
            alt={channelDetail?.snippet?.title}
            sx={{
              borderRadius: '10%',
              height: '180px',
              width: '180px',
              mb: 2,
              border: '1px solid #e3e3e3',
            }}
          />
          <Typography variant="h6">
            {channelDetail?.snippet?.title}{' '}
            <CheckCircleIcon
              sx={{ fontSize: '14px', color: 'gray', ml: '5px' }}
            />
          </Typography>
          {channelDetail?.statistics?.subscriberCount && (
            <Typography
              sx={{ fontSize: '15px', fontWeight: 500, color: 'gray' }}
            >
              {parseInt(
                channelDetail?.statistics?.subscriberCount
              ).toLocaleString('en-US')}
              &nbsp; Subscribers
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  )
}

export default ChannelCard
