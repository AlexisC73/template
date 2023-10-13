import {
  AuthInfo,
  AuthRepository
} from '@/application/auth/repository/authRepository'
import { Auth } from '@/domain/auth/entities'
import { AuthError } from '@/domain/auth/errors'

export class InMemoryAuthRepository implements AuthRepository {
  auths: Auth[] = []

  create (id: string, email: string, password: string): Promise<void> {
    this._save({ id, email, password })
    return Promise.resolve()
  }

  signin (email: string, password: string): Promise<AuthInfo> {
    const auth = this.findByEmail(email)
    if (!auth) {
      throw new AuthError("Auth doesn't exist.")
    }
    if (auth.password !== password) {
      throw new AuthError("Auth password doesn't match.")
    }
    return Promise.resolve({ id: auth.id })
  }

  findByEmail (email: string) {
    return this.auths.find(auth => auth.email === email)
  }

  private _save (auth: { id: string; email: string; password: string }) {
    const foundAuth = this.findByEmail(auth.email) || this._findById(auth.id)
    if (foundAuth) {
      throw new Error()
    }
    this.auths.push(auth)
  }

  private _findById (id: string) {
    return this.auths.find(auth => auth.id === id)
  }
}
