import { Stack } from '@mui/material'
import './App.css'
import { Block } from './components/block'

//NOTE: Make the SEO perfect for this project

function App() {

  return (
    <Stack direction={'row'}>
      <Stack direction='row'>
        <Block height={100} title='hero image'>
        </Block>
        <Stack>
          <Block height={25} title='name'></Block>
          <Block height={25} title='small bio'></Block>
          <Stack>
            {/* experince   */}

          </Stack>
        </Stack>
      </Stack>
      <Stack>
      </Stack>
    </Stack>
  )
}

export default App
