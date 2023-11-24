export const titleCase = (value: string): string => {
  return value.slice(0, 1).toUpperCase().concat(value.slice(1, value.length))
}
