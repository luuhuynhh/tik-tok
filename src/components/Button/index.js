import React from 'react'
import styles from './Button.module.scss'
import { Link } from 'react-router-dom';

export default function Button({
    to, href, onClick,
    children,
    primary, outline, text,
    rounded,
    small, medium = true, large,
    className,
    ...style }) {

    let Com = 'button';
    let props = {};
    let classes = [];
    if (to) {
        props.to = to;
        Com = Link;
    }
    else if (href) {
        props.href = href;
        Com = 'a';
    }

    if (text) {
        classes.push('text')
    } else if (outline) {
        classes.push('outline');
    } else if (primary) {
        classes.push('primary');
    }

    if (small) {
        classes.push('small');
    } else if (large) {
        classes.push('large');
    } else if (medium) {
        classes.push('medium');
    }

    if (rounded) {
        classes.push('rounded')
    }

    const classesString = classes.reduce((classesStr, classItem) => {
        return classesStr += ` ${styles[classItem]}`;
    }, '');

    console.log(classesString);
    return (
        <Com className={`${styles['wrapper']} ${classesString} ${className}`} style={{ ...style.style }} {...props} onClick={onClick}>
            {children}
        </Com>
    )
}
