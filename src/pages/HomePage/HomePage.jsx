import React from 'react'
import FoodCarousel from './components/FoodCarousel'
import HeaderPaper from './components/HeaderPaper/HeaderPaper'
import SubtitleSection from './components/SubtitleSection'

export default function HomePage() {
    return (
    <React.Fragment>
      <HeaderPaper />
      <SubtitleSection />
      <FoodCarousel />
    </React.Fragment>
  )
}
