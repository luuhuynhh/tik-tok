import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styles from "./Menu.module.scss"

export default function Header({ title, onBack }) {
    return (
        <header className={styles['header']}>
            <button className={styles['back-btn']} onClick={onBack}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <h4 className={styles['header-title']}>{title}</h4>
        </header>
    )
}
