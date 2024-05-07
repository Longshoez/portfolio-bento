import { Paper, Box } from "@mui/material"

export const Block = ({ height = 100 }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 100,
          height: height,
        },
      }}
    >
      <Paper />
    </Box>
  )
}

