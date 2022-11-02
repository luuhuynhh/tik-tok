import React from 'react'
import SiteBar from '|/components/DefaultLayout/SiteBar'
import Header from '|/components/DefaultLayout/Header'

export default function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className='container'>
                <SiteBar />
                <div className='content'>
                    {children}
                </div>
            </div>
        </div>
    )
}
