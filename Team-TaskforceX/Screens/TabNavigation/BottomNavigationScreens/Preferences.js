import * as React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Button,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { selected_items_diet } from "../../DietryRequirements";
import { selected_items_allergy } from "../../Allergies";
import { selected_items_dislikes } from "../../Dislikes";
import { selected_items_health } from "../../HealthConditions";
import { firebase } from "../../../config";
// const SCREENHEIGHT = Dimensions.get('window').height;
const SCREENWIDTH = Dimensions.get("window").width;
const DIET_DATA = selected_items_diet;

const ALLERGY_DATA = selected_items_allergy;

const DISLIKES_DATA = selected_items_dislikes;

const HEALTH_DATA = selected_items_health;

// next trim need to get values from the previous pages and output it here.
export default function Preferences({ navigation }) {

const [dietData, setDietData] = React.useState(DIET_DATA);
const [allergyData, setAllergyData] = React.useState(ALLERGY_DATA);
const [dislikesData, setDislikesData] = React.useState(DISLIKES_DATA);
const [healthData, setHealthData] = React.useState(HEALTH_DATA);


  const CommitDietryData = () => {
    var a = [
      { key: "None", value: false },
      { key: "Vegetarian", value: false },
      { key: "Vegan", value: false },
      { key: "Keto", value: false },
      { key: "Pescetarian", value: false },
      { key: "Low Carb", value: false },
      { key: "Test", value: false },
    ];

    for (let i = 0; i < a.length; i++) {
      for (let j = 0; j < DIET_DATA.length; j++) {
        if (a[i].key == DIET_DATA[j].title) {
          a[i].value = true;
        }
      }
      //console.log(a[i].value);
    }

    const dietryData = {
      none: a[0].value,
      vegetarian: a[1].value,
      vegan: a[2].value,
      keto: a[3].value,
      pescetarian: a[4].value,
      lowCarb: a[5].value,
      test: a[6].value,
    };
    const uploadDietryRequirements = firebase
      .firestore()
      .collection("DietryRequirements");
    uploadDietryRequirements.add(dietryData).catch((error) => {
      alert(error);
    });
  };
  const CommitAllergyData = () => {
    var a = [
      { key: "None", value: false },
      { key: "Soy", value: false },
      { key: "Dairy", value: false },
      { key: "Fish", value: false },
      { key: "Eggs", value: false },
      { key: "Gluten", value: false },
      { key: "Test", value: false },
    ];

    for (let i = 0; i < a.length; i++) {
      for (let j = 0; j < ALLERGY_DATA.length; j++) {
        if (a[i].key == ALLERGY_DATA[j].title) {
          a[i].value = true;
        }
      }
      //console.log(a[i].value);
    }

    const allerygyData = {
      none: a[0].value,
      soy: a[1].value,
      dairy: a[2].value,
      fish: a[3].value,
      eggs: a[4].value,
      gluten: a[5].value,
      test: a[6].value,
    };
    const uploadAllergies = firebase.firestore().collection("Allergies");
    uploadAllergies.add(allerygyData).catch((error) => {
      alert(error);
    });
  };

  const CommitDislikesData = () => {
    var a = [
      { key: "None", value: false },
      { key: "Mushrooms", value: false },
      { key: "Ginger", value: false },
      { key: "Raisins", value: false },
      { key: "Tofu", value: false },
      { key: "Anchovies", value: false },
      { key: "Test", value: false },
    ];

    for (let i = 0; i < a.length; i++) {
      for (let j = 0; j < DISLIKES_DATA.length; j++) {
        if (a[i].key == DISLIKES_DATA[j].title) {
          a[i].value = true;
        }
      }
      //console.log(a[i].value);
    }

    const dislikesData = {
      none: a[0].value,
      mushrooms: a[1].value,
      ginger: a[2].value,
      raisins: a[3].value,
      tofu: a[4].value,
      anchovies: a[5].value,
      test: a[6].value,
    };
    const uploadDislikes = firebase.firestore().collection("Dislikes");
    uploadDislikes.add(dislikesData).catch((error) => {
      alert(error);
    });
  };

  const CommitHealthConditions = () => {
    var a = [
      { key: "None", value: false },
      { key: "Vitamin B6 deficiency", value: false },
      { key: "Vitamin D deficiency", value: false },
      { key: "Limit Sodium 2400mg", value: false },
      { key: "Limit Cholesterol 2800mg", value: false },
      { key: "Hypertension", value: false },
      { key: "Heart Disease", value: false },
      { key: "Diabetes type 2", value: false },
      { key: "Cardiovascular", value: false },
      { key: "Iron deficiency", value: false },
    ];

    for (let i = 0; i < a.length; i++) {
      for (let j = 0; j < HEALTH_DATA.length; j++) {
        if (a[i].key == HEALTH_DATA[j].title) {
          a[i].value = true;
        }
      }
      console.log(a[i].value);
    }

    const healthData = {
      none: a[0].value,
      vitaminB6Deficiency: a[1].value,
      vitaminDdeficiency: a[2].value,
      limitSodium2400mg: a[3].value,
      limitCholesterol2800mg: a[4].value,
      hypertension: a[5].value,
      heartDisease: a[6].value,
      diabetesType2: a[7].value,
      cardiovascular: a[8].value,
      ironDeficiency: a[9].value,
    };
    const uploadHealthCondititions = firebase
      .firestore()
      .collection("HealthConditions");
    uploadHealthCondititions.add(healthData).catch((error) => {
      alert(error);
    });
  };


  return (
    <SafeAreaView style={styles.container}>
      <Icon
        name="arrow-left"
        size={20}
        color="black"
        type="entypo"
        onPress={() => navigation.goBack()}
      />
      <View>
        <Text style={styles.title}>Your preferences</Text>
      </View>
      <View>
        <Text style={styles.text}>Please confirm your selections</Text>
      </View>
      <View style={styles.columnView}>
        <Text style={styles.preference}>Special dietary requirement</Text>
        <View>
        <FlatList
          data={dietData}
          numColumns={2}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => (
            <View style={styles.item}>
              <TouchableOpacity
                onPress={() => setDietData((prevData) => prevData.filter((_, i) => i !== index))}
              >
                <View style={styles.itemContent}>
                  <Text style={styles.itemText}>{item.title}</Text>
                  <Icon name="times" size={20} color="black" style={styles.crossIcon} />
                </View>
              </TouchableOpacity>
            </View>
          )}
        />
        </View>
        <Text style={styles.preference}>Allergies</Text>
        <View>
        <FlatList
          data={allergyData}
          numColumns={2}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => (
            <View style={styles.item}>
              <TouchableOpacity
                onPress={() => setAllergyData((prevData) => prevData.filter((_, i) => i !== index))}
              >
                <View style={styles.itemContent}>
                  <Text style={styles.itemText}>{item.title}</Text>
                  <Icon name="times" size={20} color="black" style={styles.crossIcon} />
                </View>
              </TouchableOpacity>
            </View>
          )}
        />
        </View>
        <Text style={styles.preference}>Dislikes</Text>
        <View>
        <FlatList
          data={dislikesData}
          numColumns={2}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => (
            <View style={styles.item}>
              <TouchableOpacity
                onPress={() => setDislikesData((prevData) => prevData.filter((_, i) => i !== index))}
              >
                <View style={styles.itemContent}>
                  <Text style={styles.itemText}>{item.title}</Text>
                  <Icon name="times" size={20} color="black" style={styles.crossIcon} />
                </View>
              </TouchableOpacity>
            </View>
          )}
        />
        </View>
        <Text style={styles.preference}>Health Conditions</Text>
        <View>
        <FlatList
          data={healthData}
          numColumns={2}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => (
            <View style={styles.item}>
              <TouchableOpacity
                onPress={() => setHealthData((prevData) => prevData.filter((_, i) => i !== index))}
              >
                <View style={styles.itemContent}>
                  <Text style={styles.itemText}>{item.title}</Text>
                  <Icon name="times" size={20} color="black" style={styles.crossIcon} />
                </View>
              </TouchableOpacity>
            </View>
          )}
        />
        </View>
        <View>
        <TouchableOpacity
            style={styles.button}
            onPress={() => {
              CommitDietryData();
              CommitAllergyData();
              CommitDislikesData();
              CommitHealthConditions();
              navigation.goBack();
            }}
            accessibilityLabel="Confirm your preference selection"
          >
            <Text style={styles.buttonText}>Confirm</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.altButton}
            onPress={() => navigation.navigate("DietryRequirements")}
            accessibilityLabel="Redo your preference selection"
          >
            <Text style={styles.altButtonText}>Redo</Text>
          </TouchableOpacity>
        </View>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFBFE",
    padding: 30,
    fontSize: 150,
    textAlign: "left",
  },
  title: {
    fontSize: 25,
    color: "black",
    marginBottom: 20,
    marginTop: 20,
    // paddingBottom: 10,
  },
  text: {
    fontSize: 15,
    marginBottom: 10,
  },
  preference: {
    fontWeight: "bold",
    fontSize: 18,
    paddingTop: 5,
    paddingBottom: 5,
  },
  button: {
    backgroundColor: "#8d71ad",
    height: 55,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
    top: 10,
  },

  altButton: {
    backgroundColor: "white",
    height: 55,
    justifyContent: "center",
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "gray",
    top: 10,
    margin: 10,
  },

  buttonText: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
  },

  altButtonText: {
    fontSize: 18,
    color: "#8d71ad",
    fontWeight: "bold",
    top: 0,
    alignSelf: "center",
    padding: 10,
  },
  columnView: {
    // flex: 1,
    // flexDirection: 'row',
    // flexWrap: 'wrap',
    // alignItems: 'flex-start',
  },

  // item: {
  //   width: '50%',
  //   flex: 1,
  //   flexDirection: 'row',
  //   flexWrap: 'wrap',
  //   alignItems: 'flex-start',
  // }
  item: {
    marginTop: 10,
    backgroundColor: 'lavender',
    borderColor: "black",
    borderWidth: 1,
    maxWidth: SCREENWIDTH / 2 - 40,
    padding: 10,
    alignItems: "center",
    borderRadius: 10,
    justifyContent: "space-around",
    margin: 5,
    flex: 0.5,
  },
  itemContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemText: {
    color: "black",
    // fontFamily: 'Times',
  },
  crossIcon: {
    marginLeft: 5, // Adjust this value to add spacing between the label and check mark
  },
});
