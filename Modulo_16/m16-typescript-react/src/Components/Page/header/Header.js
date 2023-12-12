import HeaderImgInfo from '../headerImgInfo/headerImgInfo'
import HeaderNav from '../headerNav/HeaderNav'
import MainHeader from '../mainHeader/MainHeader'
import './styles.css'
import React from 'react'

export default function Header() {
  return (
    <div className='header'>
        <MainHeader />
        <HeaderNav />
        <HeaderImgInfo />
    </div>
  )
}