// Para el usuario por Id
export interface user {
  id: number,
  username: string,
  email: string,
  password?: string,
  rol: string,
  photo: string,
}

// Para autenticar el usuario
export interface auth {
  email: string,
  password: string
  message?:'string'
  token: string
}
