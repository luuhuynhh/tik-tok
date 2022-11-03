import React from 'react'
import SiteBar from '|/components/Layouts/DefaultLayout/SiteBar'
import Header from '|/components/Layouts/DefaultLayout/Header'
import styles from "./DefaulLayout.module.scss"

export default function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className={styles['container']}>
                <SiteBar />
                <div className={styles['content']}>
                    {children}
                </div>
            </div>
        </div>
    )
}
