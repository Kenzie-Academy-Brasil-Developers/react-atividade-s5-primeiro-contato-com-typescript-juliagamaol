import React from 'react'
import { Container } from './styles'

interface CardProps{
    name:string 
    age:number
    hobby:string 
}

export default function Card({name,age,hobby}:CardProps) {
    return (
        <Container>
            <div>
                <h3>Nome - {name}</h3>
                <p>Idade - {age} anos</p>
                <p>Seu hobby - {hobby}</p>
            </div>
        </Container>
    )
}


