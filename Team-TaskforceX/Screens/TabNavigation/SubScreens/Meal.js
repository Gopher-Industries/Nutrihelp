import { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import OptionMenu from "./OptionMenu";

// const DATA = [
//   { key: 0, value: "data 0" },
//   { key: 1, value: "data 1" },
//   { key: 2, value: "data 2" },
//   { key: 3, value: "data 3" },
// ];

export default function Meal({ mealData, updateMealData }) {
  const [data, updateData] = useState(mealData);
  const [modalVisible, setModalVisible] = useState(false);
  const [counter, updateCounter] = useState(2);

  // Used to trigger an update of data passed from
  // calling function on re-render.
  // Triggers can be added to the array
  useEffect(() => {
    updateMealData(data);
  }, [data]);
  //====================================================================
  //                 transfer data to OptionsMenu
  //         Essentially sending a function as a property
  //====================================================================
  const SetModalVisible = (state) => {
    setModalVisible(state);
  };

  const UpdateData = (state) => {
    updateData(state);
  };

  const UpdateCounter = (state) => {
    updateCounter(state);
  };

  return (
    <View style={styles.subContainer}>
      <FlatList
        data={data}
        horizontal={true}
        nestedScrollEnabled={true}
        //backgroundColor={"blue"}
        ItemSeparatorComponent={() => <View style={{ width: 20 }} />}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => {
          if (index == data.length - 1) {
            return (
              <TouchableOpacity
                item={item}
                onPress={() => {
                  index == data.length - 1
                    ? setModalVisible(true)
                    : setModalVisible(false);
                  console.log(index);
                }}
              >
                <View style={styles.flatListButton}>
                  <Text style={{ fontSize: 40 }}>+</Text>
                </View>
              </TouchableOpacity>
            );
          } else {
            return (
              <View style={styles.flatListBorder}>
                <Image
                  source={item.image}
                  key={index}
                  style={{
                    width: 172,
                    height: 120,
                    borderRadius: 15,
                  }}
                />
                <Text numberOfLines={1} style={styles.flatListTextDisplay}>
                  {item.description}
                </Text>
                <Text numberOfLines={1} style={styles.flatListValueDisplay}>
                  {item.value}
                </Text>
              </View>
            );
          }
        }}
        //extraData={refreshList} // a reminder if required later
      />
      <OptionMenu
        data={data}
        updateData={UpdateData}
        couner={counter}
        updateCounter={UpdateCounter}
        modalVisible={modalVisible}
        setModalVisible={SetModalVisible}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  subContainer: {
    flex: 1,
    height: 200,
  },
  flatListBorder: {
    width: 174,
    height: 182, //190,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: "#79747e",
    //backgroundColor: "#fad0c3",
  },
  flatListButton: {
    width: 174,
    height: 182, //190,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: "#79747e",
    alignItems: "center",
    justifyContent: "center",
    //backgroundColor: "#fad0c3",
  },
  flatListTextDisplay: {
    fontSize: 20,
    //fontWeight: "500",
    fontFamily: "OpenSans_600SemiBold",
  },
  flatListValueDisplay: {
    color: "#707070",
    fontSize: 20,
    fontFamily: "OpenSans_600SemiBold",
    fontWeight: "bold",
  },
});
