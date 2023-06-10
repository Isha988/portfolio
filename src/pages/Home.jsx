import React from 'react'
import PageHeader from '../components/header/PageHeader'
import ColumnSection from '../components/section/ColumnSection'
import RowSection from '../components/section/RowSection'
import SectionHeader from '../components/header/SectionHeader'

function Home() {
  return (
    <>
      <PageHeader 
      heading = {{normal:"Hey! I'm ", colored : "Isha Kapoor"}} 
      para="Obviously I'm a Web Designer. Web Developer with over 7 years of experience. Experienced with all stages of the development."/>

      <ColumnSection
        bg
        heading = "What do i offer?"
        para = "Obviously I'm a Web Designer. Web Developer with over 7 years of experience. Experienced with all stages of the development."
      />
      <RowSection
        heading = "What do i offer?"
        para = "Obviously I'm a Web Designer. Web Developer with over 7 years of experience. Experienced with all stages of the development."
      >
          <p>para 1</p>
          <p>para 2</p>
      </RowSection>

    </>
  )
}

export default Home
