import { AuthRepository } from '@/application/auth/repository/authRepository'
import { Auth } from '@/domain/auth/entities'

export class InMemoryAuthRepository implements AuthRepository {
  auths: Auth[] = []

  create (id: string, email: string, password: string): Promise<void> {
    this._save({ id, email, password })
    return Promise.resolve()
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
