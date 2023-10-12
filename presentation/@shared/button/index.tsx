export type ButtonProps = {
  label: string
  type?: 'button' | 'submit' | 'reset'
}

export const Button = ({ label, type = 'button' }: ButtonProps) => {
  return (
    <button type={type} className='w-full bg-[#085EC4] text-white py-2 rounded'>
      {label}
    </button>
  )
}
