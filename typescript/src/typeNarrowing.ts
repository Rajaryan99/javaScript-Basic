function getCoffee(kind: string | number) {
    if (typeof kind === 'string') {
        return `Making ${kind} coffee`
    }

    return `Coffee type: ${kind}`
}