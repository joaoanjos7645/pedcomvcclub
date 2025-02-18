import AsyncStorage from "@react-native-async-storage/async-storage";

const users = [
  {
    id: '06901783108',
    name: 'Dr. Luiz Gustavo',
    email: 'medico@gmail.com',
    password: '12345678',
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMDY5MDE3ODMxMDgiLCJleHAiOjE3NDAwOTkyMzZ9.3BLbx0HB8iN9Cx401P8yjU8-CXSJwaZEc_vqDi8j3b4',
  },
  {
    id: 'joao-portal',
    name: 'João Luiz',
    email: 'joao@gmail.com',
    password: '12345678',
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiam9hby1wb3J0YWwiLCJleHAiOjE3NDAwODk1NTd9.Zvl1avkS3f-OTgiuvGiGr8LjYEIjy5rpNRUlK_kwopg',
  },
]


export async function getUser() {
  const user = await AsyncStorage.getItem("user");
  return user ? JSON.parse(user) : null;
}

export async function loginUser(email: string, password: string) {
  const user = users.find(item => item.email == email);

  if (email === user.email && password === user.password) {
    await AsyncStorage.setItem("user", JSON.stringify(user));
    return user;
  }
  throw new Error("Credenciais inválidas");
}

export function logoutUser() {
  AsyncStorage.removeItem("user");
}
