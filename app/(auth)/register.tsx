import { useState } from "react";
import { Text, TextInput, View } from "react-native";
import { useAuth } from "../../contexts/AuthContext";
import Button from "@/components/Button";

export default function LoginScreen() {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={{padding: 16}}>
      <Text>Email:</Text>
      <TextInput value={email} onChangeText={setEmail} />
      
      <Text>Senha:</Text>
      <TextInput value={password} onChangeText={setPassword} secureTextEntry />
      
      <Button title="Login" onPress={() => login(email, password)} />
    </View>
  );
}