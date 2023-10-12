import { ValueObject } from './valueObject'

export type IDProps = {
  value: string
}

export class ID implements ValueObject<IDProps> {
  public readonly props: IDProps

  constructor (props: IDProps) {
    this.props = props
  }

  get value (): string {
    return this.props.value
  }

  isValid (): boolean {
    if (!this.props?.value) return false
    return this.props.value.length >= 6
  }

  static create (id: string): ID {
    return new ID({ value: id })
  }

  equals (vo?: ID): boolean {
    if (vo === null || vo === undefined) {
      return false
    }
    if (!vo.props) {
      return false
    }
    return JSON.stringify(this.props) === JSON.stringify(vo.props)
  }
}
