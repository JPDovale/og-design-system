import { ReactNode } from 'react'
import { Slot } from '@radix-ui/react-slot/dist'
import clsx  from 'clsx'

export interface TextProps {
    size?: 'sm' | 'md' | 'lg',
    letterSpacing?: 'xs' | 'sm' | 'md' | 'lg' | 'xl',
    children: ReactNode,
    asChild?: boolean,
    className?: string
}

export default function Text({ size = 'md', children, asChild, className , letterSpacing}: TextProps){
    const Comp = asChild? Slot : 'span'

    return (
        <Comp 
            className={clsx(
                'text-neutra-500 font-body cursor-default',
                {
                    'text-xs': size === 'sm',
                    'text-sm': size === 'md',
                    'text-md': size === 'lg',
                },
                {
                    'tracking-xs': letterSpacing === 'xs',
                    'tracking-sm': letterSpacing === 'sm',
                    'tracking-md': letterSpacing === 'md',
                    'tracking-lg': letterSpacing === 'lg',
                    'tracking-xl': letterSpacing === 'xl',
                },
                className
            )}
        >
            {children}
        </Comp>
    )
}