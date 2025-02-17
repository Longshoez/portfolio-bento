import React from 'react'

import { Typography, Grid } from '@mui/material'
import { Block } from '../components/block'
import { BlockComboText } from '../components/blockComboText'
import { ViewContainer } from '../components/viewcontainer'
// import { IconPicker } from '../components/iconPicker'
import me from '../../public/me.jpeg'

export const Projects = ({ spacing, next, prev }) => {
  const mailto = 'mailto:gabrielalejandro.br99@gmail.com&body=Portfolio link'

  return (
    <ViewContainer spacing={spacing}>
      <Grid item container xs={6} direction={'column'} spacing={spacing}>
        <Grid item xs={6}>
          <Block type={'orange'} delay={7}>
            <BlockComboText
              type='icon'
              icon='game'
              body='Video-games'
            />
          </Block>
        </Grid>
      </Grid>
    </ViewContainer>

  )
}

