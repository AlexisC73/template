import { CustomButton, CustomInput } from '@/presentation/@shared/form'
import Link from 'next/link'

export default function SignIn () {
  return (
    <section id='signin-form' className='flex flex-col items-center'>
      <div id='header' className='flex flex-col items-center gap-3'>
        <h1 className='text-[20px] font-bold text-[#085EC4]'>Bonjour !</h1>
        <p className='text-[14px]'>
          Connectez-vous en remplissant vos informations
        </p>
      </div>
      <form className='px-8 w-full sm:w-[600px] lg:w-[500px] mt-8'>
        <div id='form-element' className='flex flex-col gap-6'>
          <CustomInput label='Addresse email' name='email' />
          <CustomInput label='Mot de passe' name='password' type='password' />
        </div>
        <Link href='/auth/forgot' className='flex justify-end mt-2 underline'>
          Mot de passe oublié ?
        </Link>
        <br />
        <div>
          <CustomButton label='Me connecter' type='submit' />
        </div>
      </form>

      <p className='mt-12'>
        Vous n'avez pas encore de compte ?{' '}
        <Link href={'./signup'} className='text-[#085EC4] underline'>
          Me créer un compte
        </Link>
      </p>
    </section>
  )
}
