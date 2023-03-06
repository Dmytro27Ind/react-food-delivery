import React from 'react'
import FoodSlider from './components/FoodSlider/FoodSlider'
import HeaderPaper from './components/HeaderPaper/HeaderPaper'
import SubtitleSection from './components/SubtitleSection'

export default function HomePage() {
    return (
    <React.Fragment>
      <HeaderPaper />
      <SubtitleSection />
      <FoodSlider />
    </React.Fragment>
  )
}
