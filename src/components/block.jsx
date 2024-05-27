import { Button, Box } from '@mui/material'
import { IconPicker } from './iconPicker'
import Grow from '@mui/material/Grow'

// interface propTypes {
//   h: number;
//   w: number;
//   type: string;
//   children: any;
// }

export const Block = ({
  h = 100,
  w = 100,
  type = 'deafult',
  borderOverride = 25,
  children,
  align = 'center',
  icon,
  iconColor,
  iconSize,
  disabled,
  onClick = () => { },
  // glare = false,
}) => {

  const blockType = (type) => {
    switch (type) {
      case 'orange':
        return '#F5761A';
      case 'button':
        return '#000';
      default:
        return '#DEDEDE'
    }
  }

  const styling = {
    position: 'relative',
    width: `${w}%`,
    height: `${h}%`,
    overflow: type === 'image' ? 'hidden' : 'initial',
    border: type === 'button' ? '1px solid white' : 'none',
    cursor: (type === 'button' || type == 'clickable') ? 'pointer' : 'default',
    borderRadius: `${borderOverride}px`,
    backgroundColor: `${blockType(type)}`,
    alignContent: `${align}`,
    opacity: disabled ? 0.15 : 1,
  }

  const buttonStyles = {
    color: 'white',
    fontSize: '15px',
    lineHeight: '23px',
    opacity: disabled ? 0.15 : 1,
    '&:hover': {
      border: '1px solid Gray'
    }
    // fontWeight: { type === 'title' ? 'bold' : 'regular',
  }

  const animationBlock = {
    zIndex: '1000',
    transition: '1s ease-in-out',
    '&: hover': { transform: 'scale(1.05)' }
  }

  return (
    type == 'button' ?
      <Grow in={true}>
        <Button
          sx={{ ...styling, ...buttonStyles, ...animationBlock }}
          onClick={onClick}
          endIcon={icon ? <IconPicker icon={icon} color={iconColor} size={iconSize} /> : <></>}
        >
          {children}
        </Button >

      </Grow>
      :
      <Grow in={true}>
        <Box sx={{ ...styling, ...buttonStyles, ...animationBlock }}>
          {children}
        </Box >
      </Grow>
  )
}
