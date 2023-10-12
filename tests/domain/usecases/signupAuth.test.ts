import { authBuilder } from '../authBuilder'
import { AuthFixture, createAuthFixture } from '../authFixture'

describe('Signup Auth UseCase', () => {
  let authFixture: AuthFixture

  beforeEach(() => {
    authFixture = createAuthFixture()
  })
  test('should add a auth', async () => {
    authFixture.givenAuthExists([])

    await authFixture.whenAuthSignup({
      payload: {
        id: '123',
        email: 'john@doe.fr',
        password: '123456'
      }
    })

    authFixture.thenAuthShouldExist({
      id: '123',
      email: 'john@doe.fr',
      password: '123456'
    })
  })

  test("should throw an error if the auth's email already exists", async () => {
    authFixture.givenAuthExists([
      authBuilder({
        id: 'john-id',
        email: 'john@doe.fr'
      }).build()
    ])

    await authFixture.whenAuthSignup({
      payload: {
        id: 'other-id',
        email: 'john@doe.fr',
        password: '123456'
      }
    })

    authFixture.thenErrorShouldBeThrown()
  })
})
