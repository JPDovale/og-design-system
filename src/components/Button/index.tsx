import { ReactNode } from 'react'
import { Slot } from '@radix-ui/react-slot/dist'
import clsx  from 'clsx'

export interface ButtonProps {
    children: ReactNode,
    asChild?: boolean 
}

export default function Button({ children, asChild, }: ButtonProps){
    const Comp = asChild? Slot : 'button'

    return (
        <Comp 
            className={clsx(
                'px-4 py-3 w-full \
                \
                text-neutra-500 text-md font-body2 \
                \
                bg-purple-100  rounded-lg  shadow-shadowUP transition-all duration-500  outline-none  \
                \
                hover:bg-blue-100 active:shadow-shadowDown active:bg-blue-100 focus:shadow-shadowLightBlue '
            )}
        >
            {children}
        </Comp>
    )
}