import { CustomButton, CustomInput } from '@/presentation/@shared/form'
import Link from 'next/link'

export default function Forgot () {
  return (
    <section id='forgot-password' className='flex flex-col items-center'>
      <div id='header' className='flex flex-col items-center gap-3'>
        <h1 className='text-[20px] font-bold text-[#085EC4]'>
          Mot de passe oublié ?
        </h1>
        <p className='text-[14px]'>
          Remplissez le formulaire ci dessous pour réinitialiser votre mot de
          passe
        </p>
      </div>

      <form className='px-8 w-full sm:w-[600px] lg:w-[500px] mt-8'>
        <div id='form-element' className='flex flex-col gap-6'>
          <CustomInput label='Addresse email' name='email' />
        </div>
        <br />
        <div>
          <CustomButton label='Récuperer mon mot de passe' type='submit' />
        </div>
      </form>
      <p className='mt-12'>
        J&apos;ai retrouvé mon mot de passe !{' '}
        <Link href={'./signin'} className='text-[#085EC4] underline'>
          Me connecter
        </Link>
      </p>
    </section>
  )
}
