import { Stack, Typography } from '@mui/material'
import { IconPicker } from './iconPicker'

// interface propTypes {
//   heading: string;
//   body: string;
// }

export const BlockComboText = ({
  heading,
  body,
  type = 'default',
  icon,
  iconColor = 'black',
  color = 'black'
}) => {
  return (
    <Stack
      direction={type === 'iconRow' ? 'row' : 'column'}
      spacing={type === 'iconRow' ? 1 : 0}
      padding='1rem'
      alignItems='left'
    >
      {
        type === 'icon' || type === 'iconRow' ? (
          <IconPicker icon={icon} color={iconColor} />
        ) :
          (
            heading && <Typography
              variant='h4'
              fontWeight='bold'
              align='left'
              color='black'>
              {heading}
            </Typography>

          )
      }
      {
        body && <Typography
          sx={{ height: '100%' }}
          variant={type === 'title' ? 'h4' : 'p'}
          lineHeight='17px'
          fontWeight={type === 'title' ? 'bold' : 'regular'}
          align={type === 'title' ? 'center' : 'left'}
          color={color}>
          {body}
        </Typography>
      }
    </Stack >
  )
}
