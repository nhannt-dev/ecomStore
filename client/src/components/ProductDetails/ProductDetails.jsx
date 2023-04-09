import { Col, Image, Row } from 'antd'
import React from 'react'
import { test, imagesmall } from '../../assets'
import { WrapperStyleImageSmall, WrapperAddressProduct, WrapperInputNumber, WrapperPriceProduct, WrapperPriceTextProduct, WrapperQuantityProduct, WrapperStyleColImage, WrapperStyleNameProduct, WrapperStyleTextSell } from './style'
import { StarFilled, PlusOutlined, MinusOutlined } from '@ant-design/icons'
import { ButtonClick } from '../../components'

const ProductDetails = () => {
    const onchange = () => {}
    return (
        <Row style={{ padding: '16px', background: '#fff', borderRadius: '4px' }}>
            <Col span={10} style={{ borderRight: '1px solid #e5e5e5', paddingRight: '8px' }}>
                <Image src={test} preview={false} />
                <Row style={{ paddingTop: '10px', justifyContent: 'start', gap: '10px' }}>
                    <WrapperStyleColImage span={4}>
                        <WrapperStyleImageSmall src={imagesmall} preview={false} />
                    </WrapperStyleColImage>
                    <WrapperStyleColImage span={4}>
                        <WrapperStyleImageSmall src={imagesmall} preview={false} />
                    </WrapperStyleColImage>
                    <WrapperStyleColImage span={4}>
                        <WrapperStyleImageSmall src={imagesmall} preview={false} />
                    </WrapperStyleColImage>
                    <WrapperStyleColImage span={4}>
                        <WrapperStyleImageSmall src={imagesmall} preview={false} />
                    </WrapperStyleColImage>
                    <WrapperStyleColImage span={4}>
                        <WrapperStyleImageSmall src={imagesmall} preview={false} />
                    </WrapperStyleColImage>
                    <WrapperStyleColImage span={4}>
                        <WrapperStyleImageSmall src={imagesmall} preview={false} />
                    </WrapperStyleColImage>
                    <WrapperStyleColImage span={4}>
                        <WrapperStyleImageSmall src={imagesmall} preview={false} />
                    </WrapperStyleColImage>
                    <WrapperStyleColImage span={4}>
                        <WrapperStyleImageSmall src={imagesmall} preview={false} />
                    </WrapperStyleColImage>
                    <WrapperStyleColImage span={4}>
                        <WrapperStyleImageSmall src={imagesmall} preview={false} />
                    </WrapperStyleColImage>
                </Row>
            </Col>
            <Col span={14} style={{ paddingLeft: '10px' }}>
                <WrapperStyleNameProduct>dfjkjdfhgdljhnldjghldfblj</WrapperStyleNameProduct>
                <div>
                    <StarFilled style={{ fontSize: '12px', color: 'rgb(253, 216, 54)' }} />
                    <StarFilled style={{ fontSize: '12px', color: 'rgb(253, 216, 54)' }} />
                    <StarFilled style={{ fontSize: '12px', color: 'rgb(253, 216, 54)' }} />
                    <StarFilled style={{ fontSize: '12px', color: 'rgb(253, 216, 54)' }} />
                    <StarFilled style={{ fontSize: '12px', color: 'rgb(253, 216, 54)' }} />
                    <WrapperStyleTextSell> | Đã bán hơn 100+</WrapperStyleTextSell>
                </div>
                <WrapperPriceProduct>
                    <WrapperPriceTextProduct>1.000.000đ</WrapperPriceTextProduct>
                </WrapperPriceProduct>
                <WrapperAddressProduct>
                    <span>Giao đến</span>
                    <span className='address'> Q.1, P.Bến Nghé, Hồ Chí Minh</span>
                    <span className='change-address'> - Đổi địa chỉ</span>
                </WrapperAddressProduct>
                <div style={{ margin: '10px 0 20px', padding: '10px 0', borderTop: '1px solid #e5e5e5' }}>
                    <div style={{ marginBottom: '6px' }}>Số lượng</div>
                    <WrapperQuantityProduct>
                        <div style={{ display: 'flex' }}>
                            <button style={{ background: 'transparent', border: 'none', width: '30px' }}>
                                <MinusOutlined style={{ color: '#000', fontSize: '20px', cursor: 'pointer' }} />
                            </button>
                            <WrapperInputNumber min={1} max={10} defaultValue={1} onChange={onchange} size='small' />
                            <button style={{ background: 'transparent', border: 'none', width: '30px' }}>
                                <PlusOutlined style={{ color: '#000', fontSize: '20px', cursor: 'pointer' }} />
                            </button>
                        </div>
                    </WrapperQuantityProduct>
                </div>
                <div style={{ display: 'flex', alignContent: 'center', gap: '12px' }}>
                    <ButtonClick size={'large'} textButton={'Chọn mua'} styleBtn={{ background: 'rgb(255, 57, 69)', width: '220px', height: '48px', borderRadius: '5px', border: 'none' }} styleTextBtn={{ color: '#fff' }} />
                    <ButtonClick size={'large'} textButton={'Mua trả sau'} styleBtn={{ background: 'transparent', width: '220px', height: '48px', borderRadius: '5px', border: '1px solid rgb(13, 92, 182)' }} styleTextBtn={{ color: 'rgb(13, 92, 182)' }} />
                </div>
            </Col>
        </Row>
    )
}

export default ProductDetails