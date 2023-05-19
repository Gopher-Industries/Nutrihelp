import { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  Modal,
  Pressable,
  Image,
  ImageBackground,
} from "react-native";

const DATA = [
  {
    key: 0,
    value: 1153 + " KJ",
    image: require("../Local_Store/strawberrysmoothie1of12-1.png"),
    description: "Strawberry & Bannana Smoothie",
  },
  {
    key: 1,
    value: "890 KJ",
    image: require("../Local_Store/istock1785707773396871790-1.png"),
    description: "Omlete",
  },
  {
    key: 2,
    value: "1536 KJ",
    image: require("../Local_Store/roastedpumpkinsoup83913535864-1.png"),
    description: "Pumkin Soup",
  },
  {
    key: 3,
    value: "738 KJ",
    image: require("../Local_Store/simplesourdoughbreadrecipehomesteadfeature4001151677-1.png"),
    description: "Sour Dough Bread",
  },
  {
    key: 4,
    value: "840 KJ",
    image: require("../Local_Store/oats.png"),
    description: "Oats",
  },
  {
    key: 5,
    value: "450 KJ",
    image: require("../Local_Store/fruit.png"),
    description: "Fruit",
  },
];

//=========================================================================================
// 12/12/2020
//        Todo: when adding items 'two children with same key' error, add condition
//=========================================================================================

export default function OptionMenu({
  data,
  updateData,
  counter,
  updateCounter,
  modalVisible,
  setModalVisible,
}) {
  return (
    <Modal
      animationType="none"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Recommended Recipes</Text>
          <FlatList
            data={DATA}
            horizontal={true}
            nestedScrollEnabled={true}
            height="8%"
            //backgroundColor="pink"
            ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
            renderItem={({ item, index }) => {
              return (
                <View
                  style={{
                    width: 180,
                    height: 215,
                    borderWidth: 1,
                    borderRadius: 15,
                    borderColor: "#79747e",
                  }}
                >
                  <ImageBackground
                    source={item.image}
                    key={index}
                    borderRadius={15}
                    style={styles.flatListBackgroundImageStyle}
                  >
                    <TouchableOpacity
                      onPress={() => {
                        data.unshift(DATA[index]);
                        updateData([...data]);
                        updateCounter(counter + 1);
                      }}
                    >
                      <View style={styles.addItemButton}>
                        <Text
                          textAlign="center"
                          style={styles.addItemButtonSign}
                        >
                          +
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </ImageBackground>
                  <Text numberOfLines={1} style={styles.flatListButtonText}>
                    {item.description}
                  </Text>
                  <Text numberOfLines={1} style={styles.flatListButtonValue}>
                    {item.value}
                  </Text>
                </View>
              );
            }}
          />
          <Text style={{ fontSize: 25, textAlign: "center", marginBottom: 25 }}>
            Your current Recipes
          </Text>
          <FlatList
            data={data}
            horizontal={true}
            nestedScrollEnabled={true}
            height="8%"
            //backgroundColor="blue"
            ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
            renderItem={({ item, index }) => {
              if (index < data.length - 1) {
                return (
                  <View
                    style={{
                      width: 180,
                      height: 215,
                      borderWidth: 1,
                      borderRadius: 15,
                      borderColor: "#79747e",
                    }}
                  >
                    <ImageBackground
                      source={item.image}
                      key={index}
                      borderRadius={15}
                      style={styles.flatListBackgroundImageStyle}
                    >
                      <TouchableOpacity
                        onPress={() => {
                          data.splice(index, 1);
                          updateData([...data]);
                        }}
                      >
                        <View style={styles.removeItemButton}>
                          <Text
                            textAlign="center"
                            style={styles.removeButtonSign}
                          >
                            &#x2212;
                          </Text>
                        </View>
                      </TouchableOpacity>
                    </ImageBackground>
                    <Text numberOfLines={1} style={styles.flatListButtonText}>
                      {item.description}
                    </Text>
                    <Text numberOfLines={1} style={styles.flatListButtonValue}>
                      {item.value}
                    </Text>
                  </View>
                );
              }
            }}
          />
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => {
              setModalVisible(false);
            }}
          >
            <Text style={styles.textStyle}>Done</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    height: 700,
    width: 350,
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    marginBottom: 15,
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#00d084", //"#2196F3",
  },
  textStyle: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    fontSize: 25,
    marginBottom: 15,
    textAlign: "center",
  },
  flatListButtonText: {
    fontSize: 20,
  },
  flatListButtonValue: {
    color: "#707070",
    fontSize: 20,
  },
  flatListBackgroundImageStyle: {
    width: 178,
    height: 160,
    borderRadius: 15,
  },
  addItemButton: {
    height: 36,
    width: 36,
    top: "15%",
    left: "75%",
    borderRadius: 18,
    backgroundColor: "#2196F3",
  },
  addItemButtonSign: {
    height: 55,
    color: "white",
    fontSize: 45,
    alignSelf: "center",
    bottom: "42%",
  },
  removeItemButton: {
    height: 38,
    width: 38,
    top: "15%",
    left: "75%",
    borderRadius: 19,
    borderColor: "white",
    borderWidth: 1,
    backgroundColor: "red",
  },
  removeButtonSign: {
    height: 55,
    color: "white",
    fontSize: 35,
    fontWeight: "bold",
    alignSelf: "center",
    bottom: "19%",
  },
});
