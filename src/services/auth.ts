import { UserModel } from '@/models/User'

export const dbGetUsers = async () => {
  try {
    const query = `SELECT * FROM users`

    const result = await window.api.queryDatabase(query)
    return result as UserModel[]
  } catch (error) {
    console.error('Error fetching data:', error)
    throw error
  }
}

export const dbLogin = async (username: string) => {
  try {
    const query = `SELECT * FROM users WHERE email = "${username}"`

    const result = await window.api.queryDatabase(query)
    return result[0] as UserModel
  } catch (error) {
    console.error('Error fetching data:', error)
    throw error
  }
}
