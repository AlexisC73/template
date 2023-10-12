import { AuthRepository } from '@/application/auth/repository/authRepository'

export class SignupAuthUseCase {
  constructor (private readonly authRepository: AuthRepository) {}

  async execute (authPayload: { id: string; email: string; password: string }) {
    return this.authRepository.create(
      authPayload.id,
      authPayload.email,
      authPayload.password
    )
  }
}
