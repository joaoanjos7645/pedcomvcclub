import { StyleSheet, View } from 'react-native';
import Button from '@/components/Button';
import { useAuth } from '@/contexts/AuthContext';

export default function HomeScreen() {
  const {logout} = useAuth();
  return (
    <View style={styles.container}>
      <Button title='Sair' onPress={logout} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16
  }
});
