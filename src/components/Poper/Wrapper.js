import React from 'react'
import styles from "./Poper.module.scss";

export default function Wrapper({ children, width }) {
    return (
        <div className={styles['wrap']} style={{ width: `${width}px` }}>{children}</div>
    )
}
