import React from 'react'
import { useNavigate } from 'react-router-dom'

const TypeProduct = ({ name }) => {
    const navigate = useNavigate()
  return (
    <div>{name}</div>
  )
}
// Kết thúc phần 5 https://youtu.be/DS8pO6hPFY8?list=PL_QEvEi9neNSOGrmYOZSYFk9DpYr-Zd9p
export default TypeProduct