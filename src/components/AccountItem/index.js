import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styles from './AccountItem.module.scss'

export default function AccountItem() {
    return (
        <div className={styles['wrapper']}>
            <img className={styles['avatar']} src='https://bloganchoi.com/wp-content/uploads/2022/04/jimin-ost2.jpg' />
            <div className={styles['info']}>
                <p className={styles['name']}><span>Xuân Ý</span><FontAwesomeIcon className={styles['check']} icon={faCheckCircle} /></p>
                <span className={styles['username']}>ydam.nbk</span>
            </div>
        </div>
    )
}
