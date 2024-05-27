import VideogameAssetOutlinedIcon from '@mui/icons-material/VideogameAssetOutlined';
import PianoOutlinedIcon from '@mui/icons-material/PianoOutlined';
import PaletteOutlinedIcon from '@mui/icons-material/PaletteOutlined';
import PhotoCameraOutlinedIcon from '@mui/icons-material/PhotoCameraOutlined';
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';
import CallMadeOutlinedIcon from '@mui/icons-material/CallMadeOutlined';
import DesignServicesOutlinedIcon from '@mui/icons-material/DesignServicesOutlined';
import reactimg from '../../public/react.svg'
import nextimg from '../../public/next.svg'
import pythonimg from '../../public/python.svg'


export const IconPicker = ({ icon, color = '#000', size: size = '40px' }) => {

  switch (icon) {
    case 'game':
      return <VideogameAssetOutlinedIcon sx={{ color: color, width: `${size}px`, height: `${size}px` }} ></VideogameAssetOutlinedIcon>
    case 'piano':
      return <PianoOutlinedIcon sx={{ color: color, width: `${size}px`, height: `${size}px` }} ></PianoOutlinedIcon>
    case 'art':
      return <PaletteOutlinedIcon sx={{ color: color, width: `${size}px`, height: `${size}px` }}></PaletteOutlinedIcon>
    case 'camera':
      return <PhotoCameraOutlinedIcon sx={{ color: color, width: `${size}px`, height: `${size}px` }}></PhotoCameraOutlinedIcon>
    case 'right':
      return <ArrowRightAltOutlinedIcon sx={{ color: color, width: `${size}px`, height: `${size}px` }}></ArrowRightAltOutlinedIcon>
    case 'rightUp':
      return <CallMadeOutlinedIcon sx={{ color: color, width: `${size}px`, height: `${size}px` }}></CallMadeOutlinedIcon>
    case 'design':
      return <DesignServicesOutlinedIcon sx={{ color: color, width: `${size}px`, height: `${size}px` }}></DesignServicesOutlinedIcon>
    case 'react':
      return <img src={reactimg} width={`${size}px`} height={`${size}px`} />
    case 'next':
      return <img src={nextimg} width={`${size}px`} height={`${size}px`} />
    case 'python':
      return <img src={pythonimg} width={`${size}px`} height={`${size}px`} />

    default:
      return <VideogameAssetOutlinedIcon sx={{ color: color, width: `${size}px`, height: `${size}px` }}></VideogameAssetOutlinedIcon>

  }
}
