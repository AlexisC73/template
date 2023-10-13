import { AuthRepository } from '@/application/auth/repository/authRepository'
import { InvalidPayloadError } from '../errors'
import { SigninAuthPayload } from '../entities/payload/SigninAuthPayload'

export class SigninAuthUseCase {
  constructor (private readonly authRepository: AuthRepository) {}

  async execute ({ payload }: SigninAuthParams) {
    if (!payload.isValid()) {
      throw new InvalidPayloadError("Signin payload isn't valid.")
    }

    return this.authRepository.signin(
      payload.email.value,
      payload.password.value
    )
  }
}

export type SigninAuthParams = {
  payload: SigninAuthPayload
}
