import { InputHTMLAttributes } from "react";
import { Container } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    placeholder:string
    label?:string
}

export default function Input({placeholder,label,...rest}:InputProps) {
    return (
        <Container>
           {label && <label>{label}</label>}
           <input placeholder={placeholder} {...rest}/>
        </Container>
    )
}

/* 




*/