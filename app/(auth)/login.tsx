import { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useAuth } from "../../contexts/AuthContext";
import { TextField } from "@/components/TextField";
import Button from "@/components/Button";

export default function LoginScreen() {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={{ padding: 16, justifyContent: 'center', flex: 1, }}>
      <Image source={require('@/assets/images/logo.png')} style={styles.logo} />
      <View style={styles.form}>
      <Text style={styles.title}>Bem-vindo ao PedPlus! Faça login para continuar</Text>
        <TextField
          label="Email:"
          value={email}
          setValue={setEmail}
          placeholder="Insira seu email"
        />

        <TextField
          label="Senha:"
          value={password}
          setValue={setPassword}
          placeholder="Insira sua senha"
          secureTextEntry
        />

        <View style={{alignItems: 'flex-end'}}>
          <TouchableOpacity><Text style={{fontWeight: 500}}>Esqueceu sua senha?</Text></TouchableOpacity>
        </View>

        <Button title="Entrar" onPress={() => login(email, password)} />

        <View style={{alignItems: 'center', marginTop: 16}}>
          <TouchableOpacity style={{flexDirection: 'row', gap: 8}}><Text>Não tem conta?</Text><Text style={{fontWeight: 500}}>Criar conta</Text></TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    alignSelf: 'center',
    width: 120,
    height: 120,
    objectFit: 'contain' 
  },
  title: {
    fontSize: 20,
    fontWeight: 500,
    textAlign: "center",
  },
  form: {
    marginTop: 16,
    gap: 16,
  },
  input: {
    height: 56,
    borderWidth: 1,
    borderColor: '#b8b8b8',
    borderRadius: 8,
    marginTop: 6
  }
})