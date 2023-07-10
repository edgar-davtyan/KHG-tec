import { View, StyleSheet, Text } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

export default function TaskView({
  title,
  description,
  backgroundColor,
  onPressDeleteIcon,
}: {
  title: string;
  description: string;
  backgroundColor: string;
  onPressDeleteIcon: () => void;
}) {
  return (
    <View
      style={{
        paddingVertical: 8,
        paddingHorizontal: 8,
        backgroundColor: backgroundColor,
      }}
    >
      <View style={[styles.iconsRow]}>
        <Entypo name="edit" size={21} color="#fff" />
        <AntDesign
          size={21}
          name="delete"
          color="#FB6262"
          onPress={onPressDeleteIcon}
        />
      </View>
      <Text style={[styles.title]}>{title}</Text>
      <Text style={[styles.description]}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  iconsRow: {
    columnGap: 15,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  title: {
    color: "#fff",
    fontSize: 40,
    fontWeight: "400",
  },
  description: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "300",
  },
});
