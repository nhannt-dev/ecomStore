import React from 'react'
import { Col, Badge } from 'antd'
import { UserOutlined, CaretDownOutlined, ShoppingCartOutlined } from '@ant-design/icons'
import { WrapperHeader, WrapperTextHeader, WrapperContentPopup, WrapperHeaderAccount, WrapperTextHeaderSmall } from './style'
import ButttonInputSearch from '../ButttonInputSearch'

const Header = () => {
  return (
    <div style={{ width: '100%', background: 'rgb(26, 148, 255)', display: 'flex', justifyContent: 'center' }}>
      <WrapperHeader>
        <Col span={5}>
          <WrapperTextHeader to='/'>Ecomm</WrapperTextHeader>
        </Col>
        <Col span={13}>
          <ButttonInputSearch size='large' placeholder='Tìm sản phẩm mà bạn mong muốn...' allowClear textButton={'Tìm kiếm'} />
        </Col>
        <Col span={6} style={{ display: 'flex', gap: '56px', alignItems: 'center' }}>
          <WrapperHeaderAccount>
            <UserOutlined style={{ fontSize: '30px' }} />
            <div>
              <WrapperTextHeaderSmall>Đăng nhập/Đăng ký</WrapperTextHeaderSmall>
              <div>
                <WrapperTextHeaderSmall>Tài khoản</WrapperTextHeaderSmall>
                <CaretDownOutlined />
              </div>
            </div>
          </WrapperHeaderAccount>
          <div>
            <Badge count={5} size='small'>
              <ShoppingCartOutlined style={{ fontSize: '30px', color: '#fff' }} />
            </Badge>
            <WrapperTextHeaderSmall>Giỏ hàng</WrapperTextHeaderSmall>
          </div>
        </Col>
      </WrapperHeader>
    </div>
  )
}

export default Header