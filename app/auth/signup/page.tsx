import { Button } from '@/presentation/@shared/button'
import { Input } from '@/presentation/@shared/input'
import Link from 'next/link'

export default function SignUp () {
  return (
    <section id='signin-form' className='flex flex-col items-center'>
      <div id='header' className='flex flex-col items-center gap-3'>
        <h1 className='text-[20px] font-bold text-[#085EC4]'>Bonjour !</h1>
        <p className='text-[14px]'>
          Inscrivez-vous à l’aide du formulaire ci-dessous
        </p>
      </div>
      <form className='px-8 w-full sm:w-[600px] lg:w-[500px] mt-8'>
        <div id='form-element' className='flex flex-col gap-6'>
          <Input label='Addresse email' name='email' />
          <Input label='Mot de passe' name='password' type='password' />
          <Input
            label='Confirmation du mot de passe'
            name='verificationPassword'
            type='password'
          />
        </div>
        <div className='mt-6'>
          <Button label="M'inscrire" type='submit' />
        </div>
      </form>

      <p className='mt-12'>
        Vous avez déjà un compte ?{' '}
        <Link href={'./signin'} className='text-[#085EC4] underline'>
          Me connecter
        </Link>
      </p>
    </section>
  )
}
