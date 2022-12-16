import { StyleSheet, Text, View, Dimensions, Image } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const VerticalBarMain = () => {
  return (
    <View style={styles.verticalBarContainer}>
      <View style={styles.verticalBar}>
        <Text style={{ fontSize: 15, textAlign: "center" }}>Health</Text>
        <View style={styles.verticalPill}>
          <View style={styles.healthPill} />
          <View style={styles.healthCircle}>
            <Image
              source={require("../Local_Store/close.png")}
              style={styles.healthCircleIcon}
            />
          </View>
        </View>
      </View>

      <View style={styles.verticalBar}>
        <Text style={{ fontSize: 15, textAlign: "center" }}>Food</Text>
        <View style={styles.verticalPill}>
          <View style={styles.foodPill} />
          <View style={styles.foodCircle}>
            <Image
              source={require("../Local_Store/check.png")}
              style={styles.foodCircleIcon}
            />
          </View>
        </View>
      </View>

      <View style={styles.verticalBar}>
        <Text style={{ fontSize: 15, textAlign: "center" }}>Vitamin</Text>
        <View style={styles.verticalPill}>
          <View style={styles.vitaminPill} />
          <View style={styles.vitaminCircle}>
            <Image
              source={require("../Local_Store/warning.png")}
              style={styles.vitaminCircleIcon}
            />
          </View>
        </View>
      </View>

      <View style={styles.verticalBar}>
        <Text style={{ fontSize: 15, textAlign: "center" }}>Water</Text>
        <View style={styles.verticalPill}>
          <View style={styles.waterPill} />
          <View style={styles.waterCircle}>
            <Image
              source={require("../Local_Store/add.png")}
              style={styles.waterCircleIcon}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

// const BreakLine = () => {
//   return (
//     <View style={styles.breakLine}>
//       <Text style={styles.breakLineText}>Meal Plan</Text>
//     </View>
//   );
// };

export default function VerticalIndicators() {
  return (
    <View style={styles.mainContainer}>
      <VerticalBarMain />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 3.8,
    width: "100%",
    justifyContent: "center",
    //backgroundColor: "yellow",
  },
  verticalBarContainer: {
    flexDirection: "row",
    justifyContent: "center",
    //backgroundColor: "red",
  },
  verticalBar: {
    //height: windowHeight / 4,
    width: windowWidth / 4 - 15,
    //backgroundColor: "white",
    //borderColor: "black",
    //borderWidth: 2,
    alignContent: "center",
    justifyContent: "center",
  },
  verticalPill: {
    left: windowWidth / 8 - 30,
    borderRadius: 30,
    backgroundColor: "#fffbfe", // <<<<<-------------- this
    borderStyle: "solid",
    borderColor: "#79747e",
    borderWidth: 1,
    width: 46,
    height: 143,
    alignItems: "center",
  },
  healthPill: {
    position: "absolute",
    top: "76%",
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    backgroundColor: "#e8bf8f",
    width: 40,
    height: 32,
  },
  healthCircle: {
    position: "absolute",
    bottom: "70%",
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    backgroundColor: "#e8bf8f",
    alignItems: "center",
    justifyContent: "center",
  },
  healthCircleIcon: {
    width: 25,
    height: 25,
  },
  foodPill: {
    position: "absolute",
    top: "76%",
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    backgroundColor: "#b0c2a7",
    width: 40,
    height: 32,
  },
  foodCircle: {
    position: "absolute",
    bottom: "70%",
    marginLeft: 2,
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    backgroundColor: "#b0c2a7",
    alignItems: "center",
    justifyContent: "center",
  },
  foodCircleIcon: {
    width: 25,
    height: 25,
  },
  vitaminPill: {
    position: "absolute",
    top: "76%",
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    backgroundColor: "#e9aaaa",
    width: 40,
    height: 32,
  },
  vitaminCircle: {
    position: "absolute",
    bottom: "70%",
    marginLeft: 2,
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    backgroundColor: "#e9aaaa",
    alignItems: "center",
    justifyContent: "center",
  },
  vitaminCircleIcon: {
    width: 24,
    height: 24,
  },
  waterPill: {
    position: "absolute",
    top: "63%",
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    backgroundColor: "#d1e2f2",
    width: 40,
    height: 50,
  },
  waterCircle: {
    position: "absolute",
    bottom: "70%",
    marginLeft: 2,
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    backgroundColor: "#d1e2f2",
    alignItems: "center",
    justifyContent: "center",
  },
  waterCircleIcon: {
    width: 12,
    height: 12,
  },
  breakLine: {
    flex: 0.5,
    justifyContent: "center",
    borderTopColor: "grey",
    borderTopWidth: StyleSheet.hairlineWidth,
    backgroundColor: "blue",
  },
  breakLineText: {
    fontSize: 25,
    textAlign: "left",
  },
});
