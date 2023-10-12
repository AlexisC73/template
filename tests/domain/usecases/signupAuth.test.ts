import { AuthFixture, createAuthFixture } from '../authFixture'

describe('Signup Auth UseCase', () => {
  let authFixture: AuthFixture

  beforeEach(() => {
    authFixture = createAuthFixture()
  })
  test('should add a auth', async () => {
    authFixture.givenAuthExists([])

    await authFixture.whenAuthSignup({
      id: '123',
      email: 'john@doe.fr',
      password: '123456'
    })

    authFixture.thenAuthShouldExist({
      id: '123',
      email: 'john@doe.fr',
      password: '123456'
    })
  })
})
