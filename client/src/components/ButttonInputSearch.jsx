import React from 'react'
import { Button } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import InputType from './InputType'
import ButtonClick from './ButtonClick'

const ButttonInputSearch = (props) => {
    const { size, placeholder, textButton, bordered, backgroundColorInput = '#fff', backgroundColorButton = 'rgb(13, 92, 182)', colorButton, allowClear } = props
    return (
        <div style={{ display: 'flex' }}>
            <InputType size={size} bordered={bordered ? true : false} placeholder={placeholder} allowClear={allowClear || false} style={{ backgroundColor: `${colorButton || '#fff'}` }} />
            <ButtonClick size={size} styleBtn={{ backgroundColor: backgroundColorButton, border: `${bordered ? bordered : 'none'}` }} icon={<SearchOutlined style={{ color: `${colorButton || '#fff'}` }} />} textButton={textButton} styleTextBtn={{ color: `${colorButton || '#fff'}` }} />
        </div>
    )
}

export default ButttonInputSearch