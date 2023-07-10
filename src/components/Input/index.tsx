import { View, TextInput, StyleSheet } from "react-native";

export default function Input({
  placeholder,
  onChangeText,
}: {
  placeholder: string;
  onChangeText: (text: string) => void;
}) {
  return (
    <View>
      <TextInput
        style={[styles.inpBox]}
        placeholder={placeholder}
        placeholderTextColor="#eee"
        onChangeText={onChangeText}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inpBox: {
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 8,
    color: "#fff",
    borderColor: "#fff",
    backgroundColor: "inherit",
  },
});
