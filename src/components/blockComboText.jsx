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
  iconSize = 40,
  color = 'black',
  variant = 'iconButton'
}) => {

  const comboAlignment = (type) => {
    switch (type) {
      case 'title':
        return 'center'
      case 'iconRow':
        return 'left'
      default:
        return 'left'
    }
  }

  return (
    <Stack
      direction={type === 'iconRow' ? 'row' : 'column'}
      spacing={type === 'iconRow' ? 1 : 0}
      padding='1rem'
      paddingLeft='1.25rem'
      paddingRight='2rem'
      alignItems={type == 'iconRow' ? 'center' : 'left'}
    >
      {
        type === 'icon' || type === 'iconRow' ? (
          <IconPicker icon={icon} color={iconColor} size={iconSize} />
        ) :
          (
            heading && <Typography
              variant='h4'
              fontSize='50px'
              lineHeight='45px'
              fontWeight='bold'
              align='left'
              color='black'>
              {heading}
            </Typography>

          )
      }
      {
        body && <Typography
          sx={{ height: '100%'}}
          variant={type === 'title' ? 'h4' : 'p'}
          fontSize={'22px'}
          lineHeight='23px'
          fontWeight={type === 'title' ? 'bold' : 'regular'}
          align={comboAlignment(type)}
          height={'100%'}
          color={color}>
          {body}
        </Typography>
      }
    </Stack >
  )
}
