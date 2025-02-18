import { StyleSheet, Text, TextInput, TextInputProps, View } from "react-native";

interface Props extends TextInputProps  {
    label: string;
    value: string;
    setValue(value: string): void;
}

export function TextField({label, setValue, value, ...props}: Props) {
    return (
        <View style={styles.container}>
            <Text>{label}</Text>
            <TextInput style={styles.input} value={value} onChangeText={setValue} {...props} />
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    gap: 6,
  },
  input: {
    height: 56,
    borderWidth: 1,
    borderColor: '#b8b8b8',
    borderRadius: 8,
    marginTop: 6,
    paddingHorizontal: 12,
  }
})