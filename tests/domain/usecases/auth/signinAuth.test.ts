import { SignupAuthPayload } from '@/domain/auth/entities/payload/SignupAuthPayload'
import { AuthFixture, createAuthFixture } from '../../authFixture'
import { ID } from '@/domain/@shared/valueObjects/id'
import { Email } from '@/domain/@shared/valueObjects/email'
import { Password } from '@/domain/@shared/valueObjects/password'
import { SigninAuthPayload } from '@/domain/auth/entities/payload/SigninAuthPayload'
import { AuthError, InvalidPayloadError } from '@/domain/auth/errors'

describe('Signup Auth UseCase', () => {
  let authFixture: AuthFixture

  beforeEach(() => {
    authFixture = createAuthFixture()
  })
  test('should connect auth if exist', async () => {
    authFixture.givenAuthExists([
      {
        email: 'john@doe.fr',
        id: 'john-id',
        password: 'password'
      }
    ])

    await authFixture.whenAuthSignin({
      payload: new SigninAuthPayload(
        Email.create('john@doe.fr'),
        Password.create('password')
      )
    })

    authFixture.thenShouldBeAuthenticated({
      id: 'john-id'
    })
  })

  test('should return invalid payload error if not valid', async () => {
    authFixture.givenAuthExists([
      {
        email: 'john@doe.fr',
        id: 'john-id',
        password: 'password'
      }
    ])

    await authFixture.whenAuthSignin({
      payload: new SigninAuthPayload(
        Email.create('john.fr'),
        Password.create('password')
      )
    })

    authFixture.thenErrorShouldBeThrown(
      new InvalidPayloadError("Signin payload isn't valid.")
    )
  })

  test('should return auth error if signin fail due to wrong password', async () => {
    authFixture.givenAuthExists([
      {
        email: 'john@doe.fr',
        id: 'john-id',
        password: 'password'
      }
    ])

    await authFixture.whenAuthSignin({
      payload: new SigninAuthPayload(
        Email.create('john@doe.fr'),
        Password.create('wrong-password')
      )
    })

    authFixture.thenErrorShouldBeThrown(
      new AuthError("Auth password doesn't match.")
    )
  })

  test('should return auth error if signin email not exist', async () => {
    authFixture.givenAuthExists([
      {
        email: 'john@doe.fr',
        id: 'john-id',
        password: 'password'
      }
    ])

    await authFixture.whenAuthSignin({
      payload: new SigninAuthPayload(
        Email.create('other-john@doe.fr'),
        Password.create('password')
      )
    })

    authFixture.thenErrorShouldBeThrown(new AuthError("Auth doesn't exist."))
  })
})
