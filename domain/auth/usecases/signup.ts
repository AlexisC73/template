import { AuthRepository } from '@/application/auth/repository/authRepository'
import { SignupAuthPayload } from '../entities/payload/SignupAuthPayload'
import { InvalidSignupPayloadError } from '../errors'

export class SignupAuthUseCase {
  constructor (private readonly authRepository: AuthRepository) {}

  async execute ({ payload }: SignupAuthParams) {
    if (!payload.isValid()) {
      throw new InvalidSignupPayloadError()
    }

    return this.authRepository.create(
      payload.id.value,
      payload.email.value,
      payload.password.value
    )
  }
}

export type SignupAuthParams = {
  payload: SignupAuthPayload
}
