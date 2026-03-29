import { Container } from '@mui/material'
import { FC, PropsWithChildren } from 'react'

export const DetailLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Container maxWidth="xl" sx={{ display: 'flex', flexDirection: 'column', flex: 1, py: 2 }}>
        {children}
    </Container>
  )
}
