import React from 'react'
import styles from "./Header.module.scss";
// import classNames from "classnames"

export default function Header() {
    return (
        <header className={styles['wrapper']}>
            <div className={styles['inner']}>Inner</div>
        </header>
    )
}
