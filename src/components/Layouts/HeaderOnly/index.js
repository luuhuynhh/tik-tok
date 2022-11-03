import React from 'react'
import Header from '|/components/Layouts/DefaultLayout/Header'

export default function HeaderOnly({ children }) {
    return (
        <div>
            <Header />
            <div className='container'>
                <div className='content'>
                    {children}
                </div>
            </div>
        </div>
    )
}
