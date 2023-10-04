import Link from 'next/link'

export default function Home () {
  return (
    <main className='flex absolute inset-0'>
      <div className='bg-white w-full flex flex-col justify-center'>
        <div className='absolute top-6 w-full lg:w-1/2 text-center font-bold text-[20px]'>
          TheSellerPlace
        </div>

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
              <CustomInput
                label='Mot de passe'
                name='password'
                type='password'
              />
            </div>
            <Link href='/auth/forgot'>Mot de passe oublié ?</Link>
            <br />
            <div className='mt-6'>
              <CustomButton label='Se connecter' type='submit' />
            </div>
          </form>

          <p className='mt-12'>
            Vous n'avez pas encore de compte ?{' '}
            <Link href={'auth/signup'} className='text-[#085EC4] underline'>
              Créez en un ici
            </Link>
          </p>
        </section>
      </div>
      <div className='bg-slate-600 w-full hidden lg:block'>
        <img
          alt='test'
          className='object-cover w-full h-full'
          src={
            'https://images.unsplash.com/photo-1580537659466-0a9bfa916a54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80'
          }
        />
      </div>
    </main>
  )
}

type CustomInputProps = {
  label: string
  name: string
  type?: string
}

const CustomInput = ({ label, name, type = 'text' }: CustomInputProps) => {
  return (
    <div className='flex flex-col gap-1'>
      <label htmlFor={name} className='text-black text-[14px]'>
        {label}
      </label>
      <input
        type={type}
        className='bg-[#FAFAFA] border border-[#E1E1E1] p-2 rounded'
      />
    </div>
  )
}

type CustomButtonProps = {
  label: string
  type?: 'button' | 'submit' | 'reset'
}

const CustomButton = ({ label, type = 'button' }: CustomButtonProps) => {
  return (
    <button type={type} className='w-full bg-[#085EC4] text-white py-2 rounded'>
      {label}
    </button>
  )
}
