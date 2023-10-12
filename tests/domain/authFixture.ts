import { SignupAuthUseCase } from '@/domain/auth/usecases/signup'
import { InMemoryAuthRepository } from '@/infrastructure/auth/InMemoryAuthRepository'

export const createAuthFixture = () => {
  const authRepository = new InMemoryAuthRepository()
  const signupAuthUseCase = new SignupAuthUseCase(authRepository)

  return {
    givenAuthExists (givenAuth: any) {},
    async whenAuthSignup (authPayload: any) {
      await signupAuthUseCase.execute(authPayload)
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
    }
  }
}

export type AuthFixture = ReturnType<typeof createAuthFixture>
