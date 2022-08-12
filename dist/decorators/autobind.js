export function autoBind(_target, _methodName, descriptor) {
    const newDescriptor = {
        configurable: true,
        get() {
            return descriptor.value.bind(this);
        }
    };
    return newDescriptor;
}
//# sourceMappingURL=autobind.js.map