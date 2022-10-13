import { Envelope, LockKey } from 'phosphor-react'
import Button from './components/Button'
import Checkbox from './components/Checkbox'
import Heading from './components/Heading'
import Text from './components/Text'
import { TextInput } from './components/TextInput'
import { Logo } from './Logo'
import './styles/global/index.css'

export default function App() {
  return (
    <div className="w-screen flex-col h-screen bg-gradient-to-br from-purple-100 to-neutra-100 flex items-center justify-center text-neutra-500">
      <header className='flex  flex-col items-center'>
        <Logo/>

        <Heading size='lg' letterSpacing='sm' className='mt-4'> 
          Ognare
        </Heading>

        <Text size='md' className='text-neutra-300 mt-1' letterSpacing='md'>
          Faça seu login abaixo
        </Text>  
      </header> 

      <form className='flex flex-col gap-4 items-stretch w-[90%] max-w-md mt-12'>
        <label htmlFor="email" className='flex flex-col gap-3'>
          <Text letterSpacing='xs'>E-mail</Text>
          
          <TextInput.Root>
            
            <TextInput.Icon>
              <Envelope/>
            </TextInput.Icon>

            <TextInput.Input placeholder='Digite seu melhor e-mail!' id='email' type={'email'}/>
            
          </TextInput.Root>
        </label>

        <label htmlFor="password" className='flex flex-col gap-3'>
          <Text letterSpacing='xs'>Senha</Text>
          
          <TextInput.Root>
            
            <TextInput.Icon>
              <LockKey />
            </TextInput.Icon>

            <TextInput.Input placeholder='*************' id='password' type={'email'}/>
            
          </TextInput.Root>
        </label>

        <label htmlFor='remember' className='flex items-center gap-2'>
          <Checkbox id='remember'/>
          <Text size='sm' className='text-neutra-300'>Lembar de mim por 30 dias!</Text>
        </label>

        <Button type='submit' className='mt-4'>Login</Button>

        <footer className='flex flex-col items-center gap-4 mt-2'>
          <Text asChild size='sm'>
            <a href="#" className='text-neutra-300 underline text-bolder hover:text-neutra-500 cursor-pointer'>Esqueceu a sua senha?</a>
          </Text>
          <Text asChild size='sm'>
            <a href="#" className='text-neutra-300 underline text-bolder hover:text-neutra-500 cursor-pointer'>Criar uma conta</a>
          </Text>
        </footer>
      </form>
    </div>
  )
}
