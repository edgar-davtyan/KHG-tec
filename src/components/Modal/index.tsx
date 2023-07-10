import { View, StyleSheet, Pressable } from "react-native";
import { ReactNode, useContext } from "react";
import { Modal } from "react-native";
import { ModalContext } from "../../context/intex";
import { AntDesign } from "@expo/vector-icons";

export default function ModalContent({
  children,
  backgroundColor,
}: {
  children: ReactNode;
  backgroundColor: string;
}) {
  const { isModalShow, setIsModalShow } = useContext(ModalContext);

  const handleCloseModal = () => {
    setIsModalShow(false);
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isModalShow}
      style={[styles.container]}
    >
      <View style={[styles.container]}>
        <Pressable style={[styles.closeBtn]} onPress={handleCloseModal}>
          <AntDesign name="close" size={38} color="#fff" />
        </Pressable>
        {children}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    width: "100%",
  },
  closeBtn: {
    position: "absolute",
    zIndex: 1,
    right: 10,
    paddingHorizontal: 10,
    alignItems: "flex-end",
  },
});
