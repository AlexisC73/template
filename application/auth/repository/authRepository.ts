export interface AuthRepository {
  create(id: string, email: string, password: string): Promise<void>
}
