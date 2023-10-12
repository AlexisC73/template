import { AuthRepository } from '@/application/auth/repository/authRepository'

export class SignupAuthUseCase {
  constructor (private readonly authRepository: AuthRepository) {}

  async execute ({ payload }: SignupAuthParams) {
    return this.authRepository.create(
      payload.id,
      payload.email,
      payload.password
    )
  }
}

export type SignupAuthParams = {
  payload: {
    id: string
    email: string
    password: string
  }
}
