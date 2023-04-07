import React from 'react'
import { Col, Input } from 'antd'
import { UserOutlined, CaretDownOutlined, ShoppingCartOutlined } from '@ant-design/icons'
import { WrapperHeader, WrapperTextHeader, WrapperContentPopup, WrapperHeaderAccount, WrapperTextHeaderSmall } from './style'
import ButttonInputSearch from '../ButttonInputSearch'

const { Search } = Input

const Header = () => {
  return (
    <div>
      <WrapperHeader>
        <Col span={6}>
          <WrapperTextHeader to='/'>Ecomm</WrapperTextHeader>
        </Col>
        <Col span={12}>
          <ButttonInputSearch size='large' placeholder='Tìm sản phẩm mà bạn mong muốn...' allowClear textButton={'Tìm kiếm'} />
        </Col>
        <Col span={6} style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
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
            <ShoppingCartOutlined style={{ fontSize: '30px', color: '#fff' }} />
            <WrapperTextHeaderSmall>Giỏ hàng</WrapperTextHeaderSmall>
          </div>
        </Col>
      </WrapperHeader>
    </div>
  )
}

export default Header