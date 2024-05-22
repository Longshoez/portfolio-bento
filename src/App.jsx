import { Stack, Typography } from '@mui/material'
import './App.css'
import { Block } from './components/block'
import { BlockComboText } from './components/blockComboText'
import { IconPicker } from './components/iconPicker'

//NOTE: Make the SEO perfect for this project

function App() {

  const spacing = 2

  return (
    <Stack direction={'column'}
      sx={{
        width: '50rem',
        height: '35rem',
      }}>
      <Stack
        direction={'row'}
        spacing={spacing}
        sx={{ height: '75%' }}>
        <Block h={100} w={33} type='image'>
          <img
            src='../public/me.jpeg'
            width='auto'
            height='100%'
            style={{
              objectFit: 'cover',
              transform: 'translate(-10px, 5px)',
              scale: '1.1'
            }}
          />
        </Block>
        <Stack
          direction={'column'}
          spacing={spacing}
          sx={{
            width: '33%',
            height: '100%'
          }}>
          <Block h={20} w={100}>
            <BlockComboText
              type='title'
              override={{ fontStyle: 'itallic' }}
              body='@g43ri3I'
            />
          </Block>
          <Block h={28} w={100}>
            <BlockComboText
              body='Hi! my name is Gabriel Im a Software Developer from Colima, México.'
            />
          </Block>
          <Stack
            direction={'row'}
            height={'30%'}
            spacing={spacing}
          >
            <Block w={50}>
              <BlockComboText
                heading='3+'
                body='Years of experience'
              />
            </Block>
            <Block w={50}>
              <BlockComboText
                heading='2'
                body='Live projects'
              />
            </Block>
          </Stack>
          <Block h={10} w={100} type={'button'}>
            <Typography
              sx={{ height: '100%' }}
              variant={'p'}
              lineHeight='17px'
              fontWeight={'bold'}
              align={'center'}
              color={'white'}>
              Contact Info
            </Typography>
            <IconPicker icon={'rightUp'} color='white' />
          </Block>
        </Stack>
        <Stack
          direction={'column'}
          spacing={spacing}
          sx={{
            width: '33%',
            height: '100%'
          }}>
          <Block h={33} w={100}>
            <BlockComboText
              body='These are some of my hobbies, I also enjoy learning stuff on my free time tech-related or not'
            />
          </Block>
          <Stack
            direction={'row'}
            height={'33%'}
            spacing={spacing}
          >
            <Block w={50} type='orange'>
              <BlockComboText
                type='icon'
                icon='game'
                body='Video-games'
              />
            </Block>
            <Block w={50} type='orange'>
              <BlockComboText
                type='icon'
                icon='piano'
                body='Music production'
              />
            </Block>
          </Stack>
          <Stack
            direction={'row'}
            height={'33%'}
            spacing={spacing}
          >
            <Block w={50} type='orange'>
              <BlockComboText
                type='icon'
                icon='art'
                body='UI Design'
              />
            </Block>
            <Block w={50} type='orange'>
              <BlockComboText
                type='icon'
                icon='design'
                body='Product Design'
              />
            </Block>
          </Stack>
        </Stack>
      </Stack >
      <Stack
        direction={'row'}
        height={'22%'}
        paddingTop={spacing}
        paddingBottom={spacing}
        spacing={spacing}
      >
        <Block w={21} type='orange'>
          <BlockComboText
            type='iconRow'
            icon='camera'
            body='Next.js'
          />
        </Block>
        <Block w={21} type='orange'>
          <BlockComboText
            type='iconRow'
            icon='camera'
            body='Python/Flask'
          />
        </Block>
        <Block w={21} type='orange'>
          <BlockComboText
            type='iconRow'
            icon='camera'
            body='React Native'
          />
        </Block>
        <Stack
          direction={'row'}
          width={'33%'}
          spacing={spacing}
        >
          <Block w={45} type={'orange'}>
            <BlockComboText
              type='icon'
              icon='camera'
              body='Photography'
            />
          </Block>
          <Block w={50} type={'button'}>
            <BlockComboText
              type='icon'
              icon='right'
              iconColor='white'
              color='white'
              body='More about me'
            />
          </Block>
        </Stack>
      </Stack>
    </Stack >
  )
}

export default App
