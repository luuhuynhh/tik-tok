import React from 'react'
import Button from '|/components/Button'

export default function MenuItem({ data }) {
    return (
        <Button
            style={{
                marginLeft: '0',
                textAlign: 'left',
                cursor: 'pointer',
                fontWeight: 600,
                fontSize: '1rem',
                width: '100%'
            }}
            to={data.to}
            text>
            {data.title}
        </Button>
    )
}
