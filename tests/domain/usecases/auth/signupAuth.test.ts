import { SignupAuthPayload } from '@/domain/auth/entities/payload/SignupAuthPayload'
import { authBuilder } from '../../authBuilder'
import { AuthFixture, createAuthFixture } from '../../authFixture'
import { ID } from '@/domain/@shared/valueObjects/id'
import { Email } from '@/domain/@shared/valueObjects/email'
import { Password } from '@/domain/@shared/valueObjects/password'
import { InvalidPayloadError } from '@/domain/auth/errors'

describe('Signup Auth UseCase', () => {
  let authFixture: AuthFixture

  beforeEach(() => {
    authFixture = createAuthFixture()
  })
  test('should add auth', async () => {
    authFixture.givenAuthExists([])

    await authFixture.whenAuthSignup({
      payload: new SignupAuthPayload(
        ID.create('john-id'),
        Email.create('john@doe.fr'),
        Password.create('password')
      )
    })

    authFixture.thenAuthShouldExist({
      id: 'john-id',
      email: 'john@doe.fr',
      password: 'password'
    })
  })

  test('should throw an error if part of the auth payload is invalid', async () => {
    authFixture.givenAuthExists([
      authBuilder({
        id: 'first-id',
        email: 'john@doe.fr'
      }).build()
    ])

    await authFixture.whenAuthSignup({
      payload: new SignupAuthPayload(
        ID.create('john-id'),
        Email.create(''),
        Password.create('password')
      )
    })

    authFixture.thenErrorShouldBeThrown(InvalidPayloadError)
  })
})
