import React from 'react'
import Button from '|/components/Button'

export default function MenuItem({ data, onClick }) {
    return (
        <Button
            style={{
                marginLeft: '0',
                textAlign: 'left',
                cursor: 'pointer',
                fontWeight: 600,
                fontSize: '1rem',
                width: '100%',
                display: 'block'
            }}
            onClick={onClick}
            to={data.to}
            text>
            {data.title}
        </Button>
    )
}
