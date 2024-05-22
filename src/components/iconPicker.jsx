import VideogameAssetOutlinedIcon from '@mui/icons-material/VideogameAssetOutlined';
import PianoOutlinedIcon from '@mui/icons-material/PianoOutlined';
import PaletteOutlinedIcon from '@mui/icons-material/PaletteOutlined';
import PhotoCameraOutlinedIcon from '@mui/icons-material/PhotoCameraOutlined';
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';
import CallMadeOutlinedIcon from '@mui/icons-material/CallMadeOutlined';
import DesignServicesOutlinedIcon from '@mui/icons-material/DesignServicesOutlined';

export const IconPicker = ({ icon, color = '#000' }) => {

  const size = 'large'

  switch (icon) {
    case 'game':
      return <VideogameAssetOutlinedIcon fontSize={size} sx={{ color: color }} ></VideogameAssetOutlinedIcon>
    case 'piano':
      return <PianoOutlinedIcon fontSize={size} sx={{ color: color }} ></PianoOutlinedIcon>
    case 'art':
      return <PaletteOutlinedIcon fontSize={size} sx={{ color: color }} ></PaletteOutlinedIcon>
    case 'camera':
      return <PhotoCameraOutlinedIcon fontSize={size} sx={{ color: color }} ></PhotoCameraOutlinedIcon>
    case 'right':
      return <ArrowRightAltOutlinedIcon fontSize={size} sx={{ color: color }} ></ArrowRightAltOutlinedIcon>
    case 'rightUp':
      return <CallMadeOutlinedIcon fontSize={size} sx={{ color: color }} ></CallMadeOutlinedIcon>
    case 'design':
      return <DesignServicesOutlinedIcon fontSize={size} sx={{ color: color }} ></DesignServicesOutlinedIcon>
    default:
      return <VideogameAssetOutlinedIcon fontSize={size} sx={{ color: color }} ></VideogameAssetOutlinedIcon>

  }
}
