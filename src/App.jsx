import { Typography, Grid, Box } from '@mui/material'
import './App.css'
import { Block } from './components/block'
import { BlockComboText } from './components/blockComboText'
import { IconPicker } from './components/iconPicker'
import me from '../public/me.jpeg'
//NOTE: Make the SEO perfect for this project

function App() {

  const spacing = 2
  const mailto = 'mailto:gabrielalejandro.br99@gmail.com&body=Portfolio link'

  return (
    <Grid
      container
      spacing={spacing}
      direction={'row'}
      width={'60rem'}
      height={'40rem'}>
      <Grid item container xs={8} spacing={spacing} direction='column'>
        <Grid item container xs={9} direction='row' spacing={spacing}>
          <Grid item xs={6}>
            <Block h={100} type='image' delay={1}>
              <img
                src={me}
                width='100%'
                height='100%'
                style={{
                  objectFit: 'cover',
                  transform: 'translate(-10px, 5px)',
                  scale: '1.1',
                }}
              />
            </Block>
          </Grid>

          <Grid item container xs={6} direction={'column'} spacing={spacing}>
            <Grid item xs={2.75}>
              <Block center='full' type='clickable' delay={2}>
                <Typography
                  variant='h4'
                  color='black'
                  fontWeight={'bold'}
                  fontStyle={'italic'}>
                  @gabriel
                </Typography>
              </Block>
            </Grid>

            <Grid item xs={3.5}>
              <Block delay={3}>
                <BlockComboText
                  body='Hi! my name is Gabriel Im a Software Developer from Colima, México.'
                />
              </Block>
            </Grid>

            <Grid item container xs={4} spacing={spacing}>
              <Grid item xs={6}>
                <Block align='center' delay={4}>
                  <BlockComboText
                    heading='3+'
                    body='Years of experience'
                  />
                </Block>
              </Grid>
              <Grid item xs={6}>
                <Block delay={5}>
                  <BlockComboText
                    heading='3'
                    body='Live projects'
                  />
                </Block>
              </Grid>
            </Grid>
            <Grid item xs={1.75}>
              <Block
                delay={5}
                type='button'
                borderOverride={50}
                align='center'
                icon='rightUp'
                iconColor='white'
                iconSize={30}
                onClick={() => window.location.href = mailto}
              >
                Get in touch
              </Block>
            </Grid>
          </Grid>

        </Grid>
        <Grid item container xs={3} direction='row' spacing={spacing}>
          <Grid item xs={4}>
            <Block type={'orange'} delay={3}>
              <BlockComboText
                type='iconRow'
                icon='react'
                iconSize={70}
                body='React Native'
              />
            </Block>
          </Grid>
          <Grid item xs={4}>
            <Block type={'orange'} delay={4}>
              <BlockComboText
                type='iconRow'
                icon='next'
                iconSize={70}
                body='Next.js'
              />
            </Block>
          </Grid>
          <Grid item xs={4}>
            <Block type={'orange'} delay={5}>
              <BlockComboText
                type='iconRow'
                icon='python'
                iconSize={70}
                body='Python/ Flask'
              />
            </Block>
          </Grid>
        </Grid>
      </Grid>
      <Grid item container xs={4} direction={'column'} spacing={spacing}>
        <Grid item xs={3}>
          <Block delay={7}>
            <BlockComboText
              body='These are some of my hobbies, I also enjoy learning stuff on my free time tech-related or not'
            />
          </Block>
        </Grid>
        <Grid item container xs={3} spacing={spacing}>
          <Grid item xs={6}>
            <Block type={'orange'} delay={7}>
              <BlockComboText
                type='icon'
                icon='game'
                body='Video-games'
              />
            </Block>
          </Grid>
          <Grid item xs={6}>
            <Block type={'orange'} delay={8}>
              <BlockComboText
                type='icon'
                icon='piano'
                body='Music production'
              />
            </Block>
          </Grid>
        </Grid>

        <Grid item container xs={3} spacing={spacing}>
          <Grid item xs={6}>
            <Block type={'orange'} delay={9}>
              <BlockComboText
                type='icon'
                icon='art'
                body='UI Design'
              />
            </Block>
          </Grid>
          <Grid item xs={6}>
            <Block type={'orange'} delay={10}>
              <BlockComboText
                type='icon'
                icon='design'
                body='Product Design'
              />
            </Block>
          </Grid>
        </Grid>

        <Grid item container xs={3} spacing={spacing}>
          <Grid item xs={6}>
            <Block type={'orange'} delay={6}>
              <BlockComboText
                type='icon'
                icon='camera'
                body='Photo-graphy'
              />
            </Block>
          </Grid>
          <Grid item xs={6}>
            <Block type={'orange'} disabled={true} delay={7}>
              <BlockComboText
                type='icon'
                icon='right'
                iconColor='white'
                iconSize={40}
                color='white'
                body='More about me'
              />
            </Block>
            {/* <Block type={'button'}>More about me</Block> */}
          </Grid>
        </Grid>
      </Grid>
    </Grid >
  )
}

export default App
