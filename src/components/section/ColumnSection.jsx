import React from 'react'
import SectionHeader from '../header/SectionHeader'

function ColumnSection({heading, para, bg, children}) {
  return (
    <section className={`py-16 md:py-24 ${bg ? 'bg-base-150' : ''} `}>
        <div className="container">
            <SectionHeader
                heading={heading}
                para = {para}
                className = "text-center"
            />
            {children}
        </div>
    </section>
  )
}

export default ColumnSection
