import React from 'react'
import { Box, IconButton, Link } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Socials({color, ...props}) {
  return (
    <Box {...props} sx={props.sx}>
      {[
        <GitHubIcon fontSize="large"/>,
        <LinkedInIcon fontSize="large"/>,
        <InstagramIcon fontSize="large"/>,
        <FacebookRoundedIcon fontSize="large"/>,
        <YouTubeIcon fontSize="large"/>
      ].map((icon, ind) =>
        <IconButton color='inherit' key={ind}>
          <Link href="https://github.com/Dmytro27Ind" color={color} sx={{display: 'flex'}} target="_blank" rel="noopener noreferrer">
            {icon}
          </Link>
        </IconButton>
      )}
    </Box>
  )
}
