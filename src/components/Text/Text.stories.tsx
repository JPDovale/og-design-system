import { Meta, StoryObj} from '@storybook/react'
import Text, { TextProps } from ".";

export default {
    title: 'Components/Text',
    component: Text,
    args: { 
        children: 'Insira um texto!',
        size: 'md'
    },
    argTypes: {
        size: {
            options: ['sm', 'md', 'lg'],
            control: {
                type: 'inline-radio'
            }
        },
        letterSpacing: {
            options: ['xs', 'sm', 'md', 'lg', 'xl'],
            control: {
                type: 'inline-radio'
            }
        }
    }
} as Meta<TextProps>

export const Default: StoryObj<TextProps> = {}

export const Small: StoryObj<TextProps> = {
    args: {
        size: 'sm'
    }
}

export const Large: StoryObj<TextProps> = {
    args: {
        size: 'lg'
    }
}

export const CustomComponent: StoryObj<TextProps> = {
    args: {
        asChild: true,
        children: (
            <h1> Texto </h1>
        )
    },
    argTypes: {
        children: {
            table: {
                disable: true
            },
        },
        asChild: {
            table: {
                disable: true
            },
        }
    }
}