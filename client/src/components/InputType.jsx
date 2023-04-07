import { Input } from 'antd'
import React from 'react'

const InputType = ({ size, bordered, placeholder, allowClear, style, ...rest }) => {
    return (
        <Input size={size} bordered={bordered} placeholder={placeholder} allowClear={allowClear} style={style} {...rest} />
    )
}

export default InputType