import {
  SignupAuthUseCase,
  SignupAuthParams
} from '@/domain/auth/usecases/signup'
import { Auth } from '@/domain/auth/entities'
import { InMemoryAuthRepository } from '@/infrastructure/auth/inMemoryAuthRepository'
import {
  SigninAuthUseCase,
  SigninAuthParams
} from '@/domain/auth/usecases/signin'
import { AuthInfo } from '@/application/auth/repository/authRepository'

export const createAuthFixture = () => {
  const authRepository = new InMemoryAuthRepository()
  const signupAuthUseCase = new SignupAuthUseCase(authRepository)
  const signinAuthUseCase = new SigninAuthUseCase(authRepository)

  let authInfo: AuthInfo

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
    async whenAuthSignin (authParams: SigninAuthParams) {
      try {
        authInfo = await signinAuthUseCase.execute(authParams)
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
      expect(thrownError).toBeInstanceOf(expectedError)
    },
    thenShouldBeAuthenticated (expectedAuthInfo: AuthInfo) {
      expect(authInfo).toEqual(expectedAuthInfo)
    }
  }
}

export type AuthFixture = ReturnType<typeof createAuthFixture>
