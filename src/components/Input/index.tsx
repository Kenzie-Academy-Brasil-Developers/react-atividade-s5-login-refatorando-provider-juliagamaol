import React, { HTMLAttributes } from 'react'
import { FieldValues, UseFormRegister } from 'react-hook-form'
import { InputContainer } from './styles'

interface InputProps extends HTMLAttributes<HTMLInputElement>{
    name:string 
    placeholder: string 
    label: string 
    type?:string
    register: UseFormRegister<FieldValues>
}

export default function Input({name,placeholder,label,type,register}:InputProps) {
    return (
        <InputContainer>
            <label>{label}</label>
            <input 
            placeholder={placeholder}
            {...register(name)} type={type}/>
        </InputContainer>
    )
}
