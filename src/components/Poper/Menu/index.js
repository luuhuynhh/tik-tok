import Tippy from '@tippyjs/react'
import React, { useState } from 'react'
import MenuItem from './MenuItem'
import AccountItem from '|/components/AccountItem'
import { Wrapper as PoperWrapper } from "|/components/Poper"
import styles from './Menu.module.scss'
import Header from './Header'

export default function Menu({ children, items, onChange }) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];
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
                        {history.length > 1 && <Header title={current.title}
                            onBack={() => { setHistory(pre => pre.slice(0, pre.length - 1)) }} />}
                        <div>
                            {
                                current.data.map((item, index) => {
                                    const isParent = !!item.children;
                                    return (
                                        <MenuItem data={item} key={index} onClick={() => {
                                            if (isParent) { setHistory(pre => [...pre, item.children]) }
                                            else { onChange(item) }
                                        }} />
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
