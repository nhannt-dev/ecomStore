import React from 'react'
import { WrapperInputStyle } from './style'

const InputForm = (props) => {
    const { placeholder, ...rests } = props
    // const handleOnchangeInput = (e) => {
    //     props.onChange(e.target.value)
    // }
    return (
        <WrapperInputStyle placeholder={placeholder || 'Nhập text'} {...rests} />
    )
}

export default InputForm