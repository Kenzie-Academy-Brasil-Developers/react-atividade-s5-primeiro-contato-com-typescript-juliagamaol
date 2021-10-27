import React, { ReactNode } from 'react'
import { Container } from './styles'

interface ButtonProps{
    children: ReactNode
    onClick: () => void
}

export default function Button({children, ...rest}:ButtonProps) {
    return (
        <Container {...rest}>
            {children}
        </Container>
    )
}
