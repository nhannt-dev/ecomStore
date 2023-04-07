import React from 'react'
import { StyleNameProduct, WrapperReportText, WrapperPriceText, WrapperDiscountText, WrapperCardStyle } from './style'
import { StarFilled } from '@ant-design/icons'
import logo from '../../assets/logo.png'

const CardItem = () => {
    return (
        <WrapperCardStyle hoverable headStyle={{ width: '200px', height: '200px' }} bodyStyle={{ padding: '10px' }} style={{ width: 200 }} cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
            <img src={logo} style={{ width: '68px', height: '14px', position: 'absolute', top: -1, left: -1, borderTopLeftRadius: '2px' }} />
            <StyleNameProduct>wwefadfwdf</StyleNameProduct>
            <WrapperReportText>
                <span style={{ marginRight: '4px' }}>
                    <span>5.0</span>
                    <StarFilled style={{ fontSize: '12px', color: 'yellow' }} />
                </span>
                <span> | Đã bán 100+</span>
            </WrapperReportText>
            <WrapperPriceText>
                1.000.000đ
                <WrapperDiscountText> -10%</WrapperDiscountText>
            </WrapperPriceText>
        </WrapperCardStyle>
    )
}

export default CardItem