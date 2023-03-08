import React from 'react'
import FoodSlider from './components/FoodSlider/FoodSlider'
import FooterSection from '@/shared/components/FooterSection'
import HeaderPaper from './components/HeaderPaper/HeaderPaper'
import HowOrderSection from './components/HowOrderSection'
import SubtitleSection from './components/SubtitleSection'

export default function HomePage() {
    return (
    <React.Fragment>
      <HeaderPaper />
      <SubtitleSection />
      <FoodSlider />
      <HowOrderSection />
      <FooterSection />
    </React.Fragment>
  )
}
