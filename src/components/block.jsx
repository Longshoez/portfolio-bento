import { Button } from '@mui/material'


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
  }

  return (
    type == 'button' ?
      <Button sx={styling} onClick={onClick}>{children}</Button>
      :
      <div style={styling}>
        {children}
      </div >
  )
}
