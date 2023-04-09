import React from 'react'
import { TypeProduct, Slider, CardItem, ButtonClick } from '../../components'
import { WrapperButtonMore, WrapperProducts, WrapperTypeProduct } from './style'
import { slider1, slider2, slider3 } from '../../assets'

const category = ['TV', 'Tủ lạnh', 'Lò vi sóng', 'Điện thoại', 'Laptop']

const Home = () => {
  return (
    <>
      <div style={{ padding: '0 120px', margin: '0 auto' }}>
        <WrapperTypeProduct>
          {category.map(el => (
            <TypeProduct name={el} key={el} />
          ))}
        </WrapperTypeProduct>
      </div>
      <div className='body' style={{ width: '100%', backgroundColor: '#efefef' }}>
        <div id='container' style={{ backgroundColor: '#efefef', padding: '0 120px', height: 'auto', width: '1920px', margin: '0 auto' }}>
          <Slider images={[slider1, slider2, slider3]} />
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
          </WrapperProducts>
          <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
            <WrapperButtonMore textButton={'Xem thêm'} type='outline' styleBtn={{ border: '1px solid rgb(11, 116, 229)', color: 'rgb(11, 116, 229)', width: '240px', height: '38px', borderRadius: '4px' }} styleTextBtn={{ fontWeight: 500 }} />
          </div>
        </div>
      </div>
    </>
  )
}
export default Home