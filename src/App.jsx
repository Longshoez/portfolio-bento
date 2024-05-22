import { Stack } from '@mui/material'
import './App.css'
import { Block } from './components/block'

//NOTE: Make the SEO perfect for this project

function App() {

  const spacing = 3

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
        <Block h={100} w={33}>
        </Block>
        <Stack
          direction={'column'}
          spacing={spacing}
          sx={{
            width: '33%',
            height: '100%'
          }}>
          <Block h={18} w={100}></Block>
          <Block h={23} w={100}></Block>
          <Stack
            direction={'row'}
            height={'28%'}
            spacing={spacing}
          >
            <Block w={50}></Block>
            <Block w={50}></Block>
          </Stack>
          <Block h={10} w={100}></Block>
        </Stack>
        <Stack
          direction={'column'}
          spacing={spacing}
          sx={{
            width: '33%',
            height: '100%'
          }}>
          <Block h={33} w={100}></Block>
          <Stack
            direction={'row'}
            height={'33%'}
            spacing={spacing}
          >
            <Block w={50}></Block>
            <Block w={50}></Block>
          </Stack>
          <Stack
            direction={'row'}
            height={'33%'}
            spacing={spacing}
          >
            <Block w={50}></Block>
            <Block w={50}></Block>
          </Stack>
        </Stack>
      </Stack>
      <Stack
        direction={'row'}
        height={'22%'}
        paddingTop={spacing}
        paddingBottom={spacing}
        spacing={spacing}
      >
        <Block w={21}></Block>
        <Block w={21}></Block>
        <Block w={21}></Block>
        <Stack
          direction={'row'}
          width={'33%'}
          spacing={spacing}
        >
          <Block w={50} type={'combo'}></Block>
          <Block w={50} type={'button'}></Block>
        </Stack>
      </Stack>
    </Stack >
  )
}

export default App
