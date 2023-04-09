import React, { useState } from 'react'
import { WrapperContainerLeft, WrapperContainerRight, WrapperTextLight } from './style'
import { InputForm, ButtonClick } from '../../components'
import { logoLogin } from '../../assets'
import { Image } from 'antd'
import { EyeFilled, EyeInvisibleFilled } from '@ant-design/icons'

const SignIn = () => {
  const [isShowPassword, setIsShowPassword] = useState(false)
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0, 0, 0, .53)', height: '100vh' }}>
      <div style={{ width: '800px', display: 'flex', height: '445px', borderRadius: '6px', background: '#fff' }}>
        <WrapperContainerLeft>
          <h1>Xin chào</h1>
          <p>Đăng nhập hoặc Tạo tài khoản</p>
          <InputForm style={{ marginBottom: '10px' }} placeholder='abc@gmail.com' />
          <div style={{ position: 'relative' }}>
            <span style={{ zIndex: 10, position: 'absolute', top: '4px', right: '8px' }}>
              {isShowPassword ? <EyeFilled /> : <EyeInvisibleFilled />}
            </span>
          </div>
          <InputForm style={{ marginBottom: '10px' }} placeholder='Mật khẩu' type={isShowPassword ? 'text' : 'password'} />
          <ButtonClick size={40} textButton={'Đăng nhập'} styleBtn={{ background: 'rgb(255, 57, 69)', margin: '26px 0 10px', height: '48px', border: 'none', width: '100%', borderRadius: '4px' }} styleTextBtn={{ color: '#fff', fontSize: '15px', fontWeight: '700' }} />
          <p>
            <WrapperTextLight>Quên mật khẩu</WrapperTextLight>
          </p>
          <p>Chưa có tài khoản?
            <WrapperTextLight> Tạo tài khoản mới</WrapperTextLight>
          </p>
        </WrapperContainerLeft>
        <WrapperContainerRight>
          <Image src={logoLogin} preview={false} height='203px' width='203px' />
          <h4>Mua sắm tại Nhannt Ecomm</h4>
        </WrapperContainerRight>
      </div>
    </div>
  )
}

export default SignIn