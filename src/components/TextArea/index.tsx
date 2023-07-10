import { View, TextInput, StyleSheet } from "react-native";

export default function TextArea({
  placeholder,
  onChangeTextArea,
}: {
  placeholder: string;
  onChangeTextArea: (text: string) => void;
}) {
  return (
    <View>
      <TextInput
        style={[styles.textAreaBox]}
        placeholder={placeholder}
        placeholderTextColor="#eee"
        onChangeText={onChangeTextArea}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  textAreaBox: {
    marginTop: 10,
    minHeight: 120,
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 8,
    color: "#fff",
    borderColor: "#fff",
    backgroundColor: "inherit",
    textAlignVertical: "top",
  },
});
