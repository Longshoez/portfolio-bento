import { Paper, Box } from "@mui/material"

interface propTypes {
  h: number;
  w: number;
  type: string;
  children: any;
}

export const Block = ({
  h = 100,
  w = 100,
  type = 'deafult',
  children,
}: propTypes) => {

  const blockType = (type: any) => {
    switch (type) {
      case 'default':
        return '#DEDEDE'
      case 'orange':
        return '#F5761A';
      case 'button':
        return '#000';
      default:
        return '#DEDEDE'
    }
  }

  return (
    <div style={{
      width: `${w}%`,
      height: `${h}%`,
      border: type === 'button' ? '1px solid white' : 'none',
      cursor: 'pointer',
      borderRadius: '20px',
      backgroundColor: `${blockType(type)}`
    }}>
      {children}
    </div >
  )
}

{/*   sx={{ */ }
{/*     display: 'flex', */ }
{/*     flexWrap: 'wrap', */ }
{/*     '& > :not(style)': { */ }
{/*       width: w, */ }
{/*       height: h, */ }
{/*     }, */ }
{/*   }} */ }
{/* > */ }
{/*   <Paper /> */ }
{/* </Box> */ }

