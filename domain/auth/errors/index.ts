export class InvalidPayloadError extends Error {
  constructor (message?: string) {
    super(message || 'Invalid payload.')
    this.name = 'InvalidPayload'
  }
}

export class AuthError extends Error {
  constructor (message?: string) {
    super(message || 'Auth error.')
    this.name = 'AuthError'
  }
}
