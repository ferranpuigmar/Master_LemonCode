import { Box, Container } from '@mui/material'
import { PropsWithChildren, FC } from 'react'

export const ListLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Container maxWidth="xl">
      <Box component="section" sx={{ pt: 3 }}>
        {children}
      </Box>
    </Container>
  )
}
