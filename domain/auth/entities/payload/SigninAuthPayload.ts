import { Email } from '@/domain/@shared/valueObjects/email'
import { Password } from '@/domain/@shared/valueObjects/password'

export class SigninAuthPayload {
  constructor (
    public readonly email: Email,
    public readonly password: Password
  ) {}

  isValid (): boolean {
    return this.email.isValid() && this.password.isValid()
  }
}
