import { Colors } from 'app/ft-lib/shared'
import React from 'react'

type Props = {
    text: string
    onClick?: () => void
    fullWidth?: boolean
    disabled?: boolean
}

export default function CTAButton(props: Props) {
    return (
        <button
            onClick={props.onClick}
            disabled={props.disabled}
            type='submit'
            style={{
                background: Colors.primary,
                borderRadius: '9999px',
                color: Colors.textSecondary,
                width: props.fullWidth ? '100%' : 'auto',
            }}
            className='text-2xl md:text-2xl px-3.5 py-1.5 rounded-lg ft-text-main'>{props.text}</button>
    )
}
