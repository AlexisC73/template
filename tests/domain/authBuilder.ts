export const authBuilder = ({
  id = '123456',
  email = 'test@email.fr',
  password = '123456'
}: {
  id?: string
  email?: string
  password?: string
} = {}) => {
  const props = { id, email, password }
  return {
    build: () => props
  }
}
