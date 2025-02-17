import { Grid, Box, Switch, Paper, Slide } from '@mui/material'
import FormControlLabel from '@mui/material/FormControlLabel';

export const ViewContainer = ({ children, spacing }) => {

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Grid
        container
        spacing={spacing}
        direction={'row'}
        width={'60rem'}
        height={'40rem'}
      >
        {children}
      </Grid >
    </div>
  )
}
