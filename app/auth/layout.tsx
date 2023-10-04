import type { Metadata } from 'next'

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
      <body>{children}</body>
    </html>
  )
}
