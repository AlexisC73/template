import {
  SignupAuthUseCase,
  SignupAuthParams
} from '@/domain/auth/usecases/signup'
import { Auth } from '@/domain/auth/entities'
import { InMemoryAuthRepository } from '@/infrastructure/auth/inMemoryAuthRepository'

export const createAuthFixture = () => {
  const authRepository = new InMemoryAuthRepository()
  const signupAuthUseCase = new SignupAuthUseCase(authRepository)

  let thrownError: Error | undefined

  return {
    givenAuthExists (givenAuth: Auth[]) {
      authRepository.auths = givenAuth
    },
    async whenAuthSignup (authParams: SignupAuthParams) {
      try {
        await signupAuthUseCase.execute(authParams)
      } catch (err: any) {
        thrownError = err
      }
    },
    thenAuthShouldExist (expectedAuth: {
      id: string
      email: string
      password: string
    }) {
      const addedAuth = authRepository.findByEmail(expectedAuth.email)
      expect(addedAuth).toEqual({
        id: expectedAuth.id,
        email: expectedAuth.email,
        password: expectedAuth.password
      })
    },
    thenErrorShouldBeThrown (expectedError: new () => Error) {
      console.log(expectedError)
      expect(thrownError).toBeInstanceOf(expectedError)
    },
    authRepository: () => authRepository
  }
}

export type AuthFixture = ReturnType<typeof createAuthFixture>
