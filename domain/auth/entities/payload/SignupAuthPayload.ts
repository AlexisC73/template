import { Email } from '@/domain/@shared/valueObjects/email'
import { ID } from '@/domain/@shared/valueObjects/id'
import { Password } from '@/domain/@shared/valueObjects/password'

export class SignupAuthPayload {
  constructor (
    public readonly id: ID,
    public readonly email: Email,
    public readonly password: Password
  ) {}

  isValid (): boolean {
    return this.id.isValid() && this.email.isValid() && this.password.isValid()
  }
}
