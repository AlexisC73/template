export type InputProps = {
  label: string
  name: string
  type?: string
}

export const Input = ({ label, name, type = 'text' }: InputProps) => {
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
