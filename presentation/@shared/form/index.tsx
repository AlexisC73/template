export type CustomInputProps = {
  label: string
  name: string
  type?: string
}

export const CustomInput = ({
  label,
  name,
  type = 'text'
}: CustomInputProps) => {
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

export type CustomButtonProps = {
  label: string
  type?: 'button' | 'submit' | 'reset'
}

export const CustomButton = ({ label, type = 'button' }: CustomButtonProps) => {
  return (
    <button type={type} className='w-full bg-[#085EC4] text-white py-2 rounded'>
      {label}
    </button>
  )
}
