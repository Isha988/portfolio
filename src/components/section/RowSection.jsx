import React from 'react'
import SectionHeader from '../header/SectionHeader'

function RowSection({heading, para, className='', bg, children}) {
  return (
    <section className={`py-16 md:py-24 ${bg ? 'bg-base-150' : ''} ${className}`}>
        <div className="container">
            <div className="grid gap-8 md:grid-cols-2">
                <div>
                    <SectionHeader
                        heading={heading}
                        para = {para}
                    />
                    {children[0]}
                </div>
                <div>
                    {children[1]}
                </div>
            </div>
        </div>
    </section>
  )
}

export default RowSection
