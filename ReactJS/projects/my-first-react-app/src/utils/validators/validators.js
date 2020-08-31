export const requiredField = value => {
    if(value) return undefined
    return 'error message'
}

export const maxLength = maxLength => value => {
    if(value && value.length > maxLength) return `Max length s greater than ${maxLength} symbols`
    return undefined
}