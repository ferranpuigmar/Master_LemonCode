export const getImageWithBaseUrl = (imagePath: string, apiBase: string): string => {
  return `${apiBase}${imagePath}`
}
