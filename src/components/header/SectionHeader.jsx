import React from 'react'

function SectionHeader({heading, para, className=''}) {
  return (
    <header className={`mb-8 ${className}`}>
      <h2 className="font-semibold mb-6">{heading}</h2>
      <p className= "max-w-[550px] mx-auto">{para}</p>
    </header>
  )
}

export default SectionHeader
