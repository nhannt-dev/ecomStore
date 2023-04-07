import { Button } from 'antd'
import React from 'react'

const ButtonClick = ({ size, styleBtn, styleTextBtn, textButton, ...rest }) => {
    return (
        <Button size={size} style={styleBtn} {...rest}>
            <span style={styleTextBtn}>{textButton}</span>
        </Button>
    )
}

export default ButtonClick