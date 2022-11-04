import Tippy from '@tippyjs/react'
import React from 'react'
import MenuItem from './MenuItem'
import AccountItem from '|/components/AccountItem'
import { Wrapper as PoperWrapper } from "|/components/Poper"
import styles from './Menu.module.scss'

export default function Menu({ children, items }) {
    return (
        <Tippy
            visible
            interactive
            delay={[0, 1000]}
            // visible={searchResult.length > 0}
            placement='bottom-end'
            render={attr =>
            (
                <div className={styles['search-result']} {...attr}>
                    <PoperWrapper width={200}>
                        <div>
                            {
                                items.map((item, index) => {
                                    return (
                                        <MenuItem data={item} key={index} />
                                    )
                                })
                            }
                        </div>
                    </PoperWrapper>
                </div>

            )
            }
        >
            {children}
        </Tippy>
    )
}
