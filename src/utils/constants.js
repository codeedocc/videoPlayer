import MusicNoteIcon from '@mui/icons-material/MusicNote'
import HomeIcon from '@mui/icons-material/Home'
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo'
import SportsEsportsIcon from '@mui/icons-material/SportsEsports'
import LiveTvIcon from '@mui/icons-material/LiveTv'
import SchoolIcon from '@mui/icons-material/School'
import CheckroomIcon from '@mui/icons-material/Checkroom'
import GraphicEqIcon from '@mui/icons-material/GraphicEq'
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy'
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter'
import youLook from './assets/youLook.png'
import youLookChannel from './assets/channel-logo.png'

export const logo = youLook
export const logoChannel = youLookChannel

export const categories = [
  { name: 'Главная', icon: <HomeIcon /> },
  { name: 'Музыка', icon: <MusicNoteIcon /> },
  { name: 'Кино', icon: <OndemandVideoIcon /> },
  { name: 'Игры', icon: <SportsEsportsIcon /> },
  { name: 'Комедия', icon: <TheaterComedyIcon /> },
  { name: 'Подкасты', icon: <GraphicEqIcon /> },
  { name: 'Live', icon: <LiveTvIcon /> },
  { name: 'Спорт', icon: <FitnessCenterIcon /> },
  { name: 'Мода', icon: <CheckroomIcon /> },
  { name: 'Образование', icon: <SchoolIcon /> },
]

export const demoThumbnailUrl = 'https://i.ibb.co/G2L2Gwp/API-Course.png'
export const demoChannelUrl = '/channel/UCmXmlB4-HJytD7wek0Uo97A'
export const demoVideoUrl = '/video/GDa8kZLNhJ4'
export const demoChannelTitle = 'JavaScript Mastery'
export const demoVideoTitle =
  'Build and Deploy 5 JavaScript & React API Projects in 10 Hours - Full Course | RapidAPI'
export const demoProfilePicture =
  'http://dergipark.org.tr/assets/app/images/buddy_sample.png'
