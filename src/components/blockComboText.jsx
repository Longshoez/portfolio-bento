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
}) => {
  return (
    <Stack
      direction='column'
      padding='1rem'
      alignItems='left'
    >
      {
        type === 'icon' ? (
          <IconPicker icon={icon} />
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
          color='black'>
          {body}
        </Typography>
      }
    </Stack >
  )
}
