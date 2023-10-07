import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Auth',
  description: 'Page for authentication'
}

export default function AuthLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='fr'>
      <body className=''>
        <main className='flex sm:absolute inset-0 sm:min-h-[700px]'>
          <div className='bg-white w-full flex flex-col justify-center'>
            <Link
              href='/'
              className='sm:absolute py-6 sm:py-0 top-6 w-full lg:w-1/2 text-center font-bold text-[20px]'
            >
              TheSellerPlace
            </Link>
            {children}
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
      </body>
    </html>
  )
}
