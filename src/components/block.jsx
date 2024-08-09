import { Button, Box, useTheme } from '@mui/material'
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
  delay = 0,
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
    // border: type === 'button' ? '1px solid white' : 'none',
    border: type === 'button' ? '1px solid white' : 'none',
    cursor: (type === 'button' || type == 'clickable') ? 'pointer' : 'default',
    borderRadius: `${borderOverride}px`,
    backgroundColor: `${blockType(type)}`,
    alignContent: `${align}`,
    //3d buttons - based on ig's Note bubbles
    boxShadow: '-2px -2px 1px rgba(250, 250, 250, 0.80), inset 10px 15px 25px rgba(250, 250, 250, 0.45), inset -2px -5px 10px rgba(0, 0, 0, 0.25)',
    //skeumorphic colors, only works in light theme, until i can find a way to use the light-theme variable i wont be able to propertly switch this into its right colors
    //-1.5px -1.5px 1px rgba(250, 250, 250, 0.40)
    //inset 10px 15px 25px rgba(250, 250, 250, 0.45)
    //inset -2px -5px 10px rgba(0, 0, 0, 0.25)
    //8px 8px 10px rgb(0,0,0,0.1)
    //-7px -7px 10px rgb(255,255,255,0.45)'
    opacity: disabled ? 0.15 : 1,
  }

  const buttonStyles = {
    color: 'white',
    fontSize: '15px',
    lineHeight: '23px',
    opacity: disabled ? 0.15 : 1,
    transition: '.5s ease-in-out',
    '&:hover': {
      // boxShadow: '-1.5px -1.5px 1px rgba(250, 250, 250, 0.40), inset 5px 10px 25px rgba(250, 250, 250, 0.45), inset -2px -5px 10px rgba(0, 0, 0, 0.25)',
      border: '1px solid rgb(255, 255, 255, 0.6)',
    }
    // fontWeight: { type === 'title' ? 'bold' : 'regular',
  }

  const animationBlock = {
    zIndex: '1000',
    transition: '.5s ease-in-out',
    '&: hover': { transform: 'scale(1.05)' }
  }

  return (
    type == 'button' ?
      <Grow in={true} style={{ transitionDelay: `${delay * 100}ms` }}>
        <Button
          sx={{ ...styling, ...buttonStyles, ...animationBlock }}
          onClick={onClick}
          endIcon={icon ? <IconPicker icon={icon} color={iconColor} size={iconSize} /> : <></>}
        >
          {children}
        </Button >

      </Grow >
      :
      <Grow in={true} style={{ transitionDelay: `${delay * 100}ms` }}>
        <Box sx={{ ...styling, ...animationBlock }}>
          {children}
        </Box >
      </Grow>
  )
}
