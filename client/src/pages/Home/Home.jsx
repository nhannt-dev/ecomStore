import React from 'react'
import { TypeProduct, Slider, CardItem, NavBar } from '../../components'
import { WrapperButtonMore, WrapperProducts, WrapperTypeProduct } from './style'
import slider1 from '../../assets/slider1.webp'
import slider2 from '../../assets/slider2.webp'
import slider3 from '../../assets/slider3.webp'

const category = ['TV', 'Tu lanh', 'Lo vi song', 'Dien thoai', 'Laptop']

const Home = () => {
  return (
    <>
      <div style={{ padding: '0 120px' }}>
        <WrapperTypeProduct>
          {category.map(el => (
            <TypeProduct name={el} key={el} />
          ))}
        </WrapperTypeProduct>
      </div>
      <div id='container' style={{ backgroundColor: '#efefef', padding: '0 120px', height: '1000px' }}>
        <Slider images={[slider1, slider2, slider3]} />
        <div style={{ marginTop: '20px', display: 'flex', alignItems: 'center', gap: '20px' }}>
          <CardItem />
        </div>
            <NavBar />
      </div>
    </>
  )
}
export default Home