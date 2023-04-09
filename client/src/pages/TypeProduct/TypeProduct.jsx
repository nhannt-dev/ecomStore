import React from 'react'
import { NavBar, CardItem } from '../../components'
import { Row, Pagination, Col } from 'antd'
import { WrapperNavbar, WrapperProducts } from './style'

const TypeProduct = () => {
    const onchange = () => { }
    return (
        <div style={{ width: '100%', padding: '0 120px', background: '#efefef' }}>
            <Row style={{ flexWrap: 'nowrap', paddingTop: '10px' }}>
                <WrapperNavbar span={4}>
                    <NavBar />
                </WrapperNavbar>
                <Col span={20}>
                    <WrapperProducts>
                        <CardItem />
                        <CardItem />
                        <CardItem />
                        <CardItem />
                        <CardItem />
                        <CardItem />
                        <CardItem />
                        <CardItem />
                        <CardItem />
                        <CardItem />
                        <CardItem />
                        <CardItem />
                        <CardItem />
                        <CardItem />
                        <CardItem />
                    </WrapperProducts>
                    <Pagination defaultCurrent={2} total={100} onChange={onchange} style={{ textAlign: 'center', marginTop: '10px' }} />
                </Col>
            </Row>
        </div>
    )
}

export default TypeProduct