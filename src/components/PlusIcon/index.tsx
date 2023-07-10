import { useContext } from "react";
import { StyleSheet, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { ModalContext } from "../../context/intex";

export default function PlusIcon() {
  const { isModalShow, setIsModalShow } = useContext(ModalContext);

  const handleOpanModal = () => {
    setIsModalShow(true);
  };

  return (
    <Pressable style={[styles.plusContent]} onPress={handleOpanModal}>
      <AntDesign name="plus" size={50} color="#7000FF" />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  plusContent: {
    position: "absolute",
    width: 70,
    height: 70,
    top: -30,
    zIndex: 10,
    borderRadius: 50,
    borderWidth: 10,
    borderColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#111111",
  },
});
