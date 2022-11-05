import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import Image from '|/components/Image'
import styles from './AccountItem.module.scss'

export default function AccountItem({ account }) {
    return (
        <Link to={`/@${account.nickname}`} className={styles['wrapper']} style={{ cursor: 'pointer' }}>
            <Image className={styles['avatar']} src={account.avatar} alt={account.full_name} />
            <div className={styles['info']}>
                <p className={styles['name']}><span>{account.full_name}</span>
                    {account.tick && <FontAwesomeIcon className={styles['check']} icon={faCheckCircle} />}
                </p>
                <span className={styles['username']}>{account.nickname}</span>
            </div>
        </Link>
    )
}
