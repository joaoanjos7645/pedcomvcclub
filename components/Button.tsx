import { useState } from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

interface Props {
    title: string;
    onPress(): void;
}

export default function Button({title, onPress}: Props) {
  const [pressed, setPressed] = useState(false);

  return (
    <TouchableOpacity
      style={[styles.button]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#155263",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    height: 56,
  },
  text: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
});
