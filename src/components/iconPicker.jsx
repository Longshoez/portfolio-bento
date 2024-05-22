import VideogameAssetOutlinedIcon from '@mui/icons-material/VideogameAssetOutlined';
import PianoOutlinedIcon from '@mui/icons-material/PianoOutlined';
import PaletteOutlinedIcon from '@mui/icons-material/PaletteOutlined';
import PhotoCameraOutlinedIcon from '@mui/icons-material/PhotoCameraOutlined';
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';
import CallMadeOutlinedIcon from '@mui/icons-material/CallMadeOutlined';
import DesignServicesOutlinedIcon from '@mui/icons-material/DesignServicesOutlined';

export const IconPicker = ({ icon }) => {

  switch (icon) {
    case 'game':
      return <VideogameAssetOutlinedIcon></VideogameAssetOutlinedIcon>
    case 'piano':
      return <PianoOutlinedIcon></PianoOutlinedIcon>
    case 'art':
      return <PaletteOutlinedIcon></PaletteOutlinedIcon>
    case 'camera':
      return <PhotoCameraOutlinedIcon></PhotoCameraOutlinedIcon>
    case 'right':
      return <ArrowRightAltOutlinedIcon></ArrowRightAltOutlinedIcon>
    case 'rightUp':
      return <CallMadeOutlinedIcon ></CallMadeOutlinedIcon>
    case 'design':
      return <DesignServicesOutlinedIcon></DesignServicesOutlinedIcon>
    default:
      return <VideogameAssetOutlinedIcon></VideogameAssetOutlinedIcon>

  }
}
