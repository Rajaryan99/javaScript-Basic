function getCoffee(kind: string | number) {
    if (typeof kind === 'string') {
        return `Making ${kind} coffee`
    }

    return `Coffee type: ${kind}`
}

function orderChai(size: 'small' | 'medium' | 'large' | number) {
    if (size === 'small') {
        return `small cutting chai...`
    }
    if (size === 'medium' || size === 'large') {
        return `make Extera chai`
    }

    return `chai order #${size}`
}