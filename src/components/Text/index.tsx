import { ReactNode } from 'react'
import { Slot } from '@radix-ui/react-slot/dist'
import clsx  from 'clsx'

export interface TextProps {
    size?: 'sm' | 'md' | 'lg',
    children: ReactNode,
    asChild?: boolean 
}

export default function Text({ size = 'md', children, asChild }: TextProps){
    const Comp = asChild? Slot : 'span'

    return (
        <Comp 
            className={clsx(
                'text-neutra-500 font-body cursor-default',
                {
                    'text-xs': size === 'sm',
                    'text-sm': size === 'md',
                    'text-md': size === 'lg',
                }
            )}
        >
            {children}
        </Comp>
    )
}