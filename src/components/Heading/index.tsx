import { ReactNode } from 'react'
import { Slot } from '@radix-ui/react-slot/dist'
import clsx  from 'clsx'

export interface HeadingProps {
    size?: 'sm' | 'md' | 'lg',
    letterSpacing?: 'xs' | 'sm' | 'md' | 'lg' | 'xl',
    children: ReactNode,
    asChild?: boolean,
    className?: string
}

export default function Heading({ size = 'md', children, asChild, letterSpacing, className }: HeadingProps){
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