import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import {Check} from 'phosphor-react'

export interface CheckboxProps extends CheckboxPrimitive.CheckboxProps {}

export default function Checkbox(props: CheckboxProps){
    return (
        <CheckboxPrimitive.Root className='w-6 h-6 p-[2px] bg-neutra-default rounded shadow-shadowUP focus:shadow-shadowLightBlue' {...props}>
            <CheckboxPrimitive.Indicator asChild>
                <Check className='w-5 h-5 text-purple-500' />
            </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Root>
    )
}