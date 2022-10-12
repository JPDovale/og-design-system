import { InputHTMLAttributes, ReactNode } from 'react'
import { Slot } from '@radix-ui/react-slot/dist'
import clsx  from 'clsx'


export interface TextInputRootProps {
    children: ReactNode
}

function TextInputRoot({children}: TextInputRootProps) {
    return(
        <div 
            className={clsx(
                'flex items-center gap-3 \
                \
                px-4 py-3 w-full h-14 \
                \
                bg-neutra-default rounded-lg shadow-shadowUP transition-all duration-500  cursor-pointer  \
                \
                focus-within:shadow-shadowLightBlue'
            )}
        >
            {children}
        </div>
    )
}

TextInputRoot.displayName = 'TextInput.Root'

export interface TextInputIconProps{
    children: ReactNode
}

function TextInputIcon({children}: TextInputIconProps){
    return(
        <Slot 
            className=' w-5 h-5 text-neutra-300'
        >
            {children}
        </Slot>
    )
}

TextInputIcon.displayName = 'TextInput.Icon'

export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> {}


function TextInputInput(props: TextInputInputProps){
    return (
        <input 
            className=
                'flex-1 \
                \
                text-sm text-neutra-500 font-body2 \
                \
                bg-transparent outline-none cursor-pointer \
                \
                placeholder:text-neutra-300'
            {...props}
        />  
    )
}

TextInputInput.displayName = 'TextInput.Input'

export const TextInput = {
    Root: TextInputRoot,
    Input: TextInputInput,
    Icon: TextInputIcon
}

