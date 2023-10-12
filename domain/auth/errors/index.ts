export class InvalidSignupPayloadError extends Error {
  constructor () {
    super('Invalid signup payload.')
    this.name = 'InvalidSignupPayload'
  }
}
