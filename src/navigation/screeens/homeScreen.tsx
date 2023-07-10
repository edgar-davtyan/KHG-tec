import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  Image,
  Pressable,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import Input from "../../components/Input";
import TextArea from "../../components/TextArea";
import ModalContent from "../../components/Modal";
import TaskView from "../../components/TaskView";

export default function HomeScreen() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedColor, setSelectedColor] = useState<string>();
  const [taskViewData, setTaskViewData] = useState<
    Array<{
      title: string;
      description: string;
      backgroundColor: string;
    }>
  >([]);

  const onChangeText = (text: string) => setTitle(text);
  const onChangeTextArea = (text: string) => setDescription(text);

  const handleCreateTaskView = () => {
    const taskView = {
      title: title,
      description: description,
      backgroundColor: selectedColor,
    };

    setTaskViewData((prevState: any) => {
      return [...prevState, taskView];
    });
  };

  const onPressDeleteIcon = (dataindex: number) => {
    const newTaskData = taskViewData.filter(
      (_, index: number) => index !== dataindex
    );
    setTaskViewData(newTaskData);
  };

  return (
    <SafeAreaView style={[styles.flex]}>
      <ModalContent backgroundColor="red">
        <View
          style={[
            styles.modalContent,
            { backgroundColor: selectedColor ? selectedColor : "#000" },
          ]}
        >
          <Input placeholder="Title" onChangeText={onChangeText} />
          <TextArea
            placeholder="Discription (200word)"
            onChangeTextArea={onChangeTextArea}
          />
          <View style={[styles.bottomContent]}>
            <Text style={[styles.taskText]}>Task color</Text>
            <View style={[styles.colorTextRow]}>
              <View style={[styles.colorsRow]}>
                {["#7000FF", "#07C5FF", "#00CAA6"].map((color, index) => {
                  return (
                    <Pressable
                      onPress={() => setSelectedColor(color)}
                      key={index}
                      style={[
                        styles.pressableColor,
                        { backgroundColor: color },
                      ]}
                    />
                  );
                })}
              </View>
              <Pressable onPress={handleCreateTaskView}>
                <Text style={[styles.createText]}>Create</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </ModalContent>
      <View style={[styles.avatarContent]}>
        <View style={[styles.avatarImageBox]}>
          <Image
            style={[styles.avatar]}
            source={{
              uri: "https://stax.com.au/cdn/shop/files/New-Web-Banners-05_3bd41b3f-d04c-42a6-8f92-947bf915803d.jpg?v=1688535118&width=1920",
            }}
          />
        </View>
        <Text style={[styles.avatarName]}>Name Surname</Text>
      </View>
      <View>
        {taskViewData.length > 0 ? (
          taskViewData.map(({ title, description, backgroundColor }, index) => (
            <TaskView
              key={index}
              title={title}
              description={description}
              backgroundColor={backgroundColor}
              onPressDeleteIcon={() => onPressDeleteIcon(index)}
            />
          ))
        ) : (
          <Text>valod</Text>
        )}
      </View>
      <StatusBar style="light" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    backgroundColor: "#000",
  },
  avatarContent: {
    minHeight: 147,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1E1E1E",
  },
  avatarImageBox: {
    overflow: "hidden",
    borderRadius: 50,
    width: 84,
    height: 84,
  },
  avatar: {
    flex: 1,
  },
  avatarName: {
    fontSize: 25,
    color: "#fff",
    fontWeight: "600",
    letterSpacing: 0.3,
    marginLeft: 20,
  },
  modalContent: {
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 2,
  },
  colorsRow: {
    marginTop: 10,
    columnGap: 4,
    flexDirection: "row",
  },
  pressableColor: {
    width: 26,
    height: 22,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#fff",
  },
  bottomContent: {
    marginTop: 10,
  },
  colorTextRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  taskText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "400",
  },
  createText: {
    fontSize: 25,
    color: "#F5F5F5",
    borderBottomWidth: 1,
    borderBottomColor: "#fff",
  },
});
