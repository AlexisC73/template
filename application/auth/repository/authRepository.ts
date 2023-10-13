export interface AuthRepository {
  create(id: string, email: string, password: string): Promise<void>
  signin(email: string, password: string): Promise<AuthInfo>
}

export interface AuthInfo {
  id: string
}
