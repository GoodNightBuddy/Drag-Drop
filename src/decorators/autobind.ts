//autobind decorator
export function autoBind(_target: any, _methodName: string, descriptor: PropertyDescriptor): PropertyDescriptor {
  const newDescriptor: PropertyDescriptor = {
    configurable: true,
    get() {
      return descriptor.value.bind(this)
    }
  }
  return newDescriptor
}
