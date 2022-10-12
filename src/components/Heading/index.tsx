import { ReactNode } from 'react'
import { Slot } from '@radix-ui/react-slot/dist'
import clsx  from 'clsx'

export interface HeadingProps {
    size?: 'sm' | 'md' | 'lg',
    letterSpacing?: 'xs' | 'sm',
    children: ReactNode,
    asChild?: boolean 
}

export default function Heading({ size = 'md', children, asChild, letterSpacing }: HeadingProps){
    const Comp = asChild? Slot : 'h2'

    return (
        <Comp 
            className={clsx(
                'text-neutra-500 font-title uppercase tracking-sm cursor-default',
                {
                    'text-lg': size === 'sm',
                    'text-xl': size === 'md',
                    'text-2xl': size === 'lg',
                },
                {
                    'tracking-xs': letterSpacing === 'xs',
                    'tracking-sm': letterSpacing === 'sm',
                }
            )}
        >
            {children}
        </Comp>
    )
}