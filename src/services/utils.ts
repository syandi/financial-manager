export const createToken = (payload: string): string => {
  return btoa(payload)
}

export const checkToken = () => {
  const token = localStorage.getItem('authToken')

  return token ? atob(token) : null
}