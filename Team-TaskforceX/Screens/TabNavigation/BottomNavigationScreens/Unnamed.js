import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  Button,
  ScrollView,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
//import { Colors } from "react-native/Libraries/NewAppScreen";

export default function Unnamed({ navigation }) {
  const [text, setText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [capturedText, setCapturedText] = useState("");
  const url1 =
    "https://vision.googleapis.com/v1/images:annotate?key=AIzaSyBRydZqVfioOeHAZ6X2u0GGTGtbOs1RasQ";
  const url2 =
    "https://translation.googleapis.com/language/translate/v2?key=AIzaSyBRydZqVfioOeHAZ6X2u0GGTGtbOs1RasQ";
  // hooks should be placed at the top level of a function
  // not inside loops, conditions or nexted functions.
  // useEffect(() => {
  //   result(text);
  // }, [text]);

  const takePhotoAndPerformOCR = async () => {
    // Launch camera. Camera closes after image is taken
    let result = await ImagePicker.launchCameraAsync({
      base64: true,
    });

    if (!result.canceled) {
      // Google Cloud Vision API - OCR. Note the format of the request
      const body = {
        requests: [
          {
            image: {
              content: result.base64,
            },
            features: [
              {
                type: "DOCUMENT_TEXT_DETECTION",
              },
            ],
          },
        ],
      };

      const response = await fetch(url1, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      const parsed = await response.json();
      setCapturedText(parsed.responses[0].fullTextAnnotation.text);
      filterIngredients(parsed.responses[0].fullTextAnnotation.text);
      console.log(parsed.responses[0].fullTextAnnotation.text);
    }
  };

  async function translateText(text) {
    const response = await fetch(url2, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        q: text,
        target: "en",
      }),
    });
    const data = await response.json();
    const translatedText = data.data.translations[0].translatedText;
    setTranslatedText(translatedText);
    console.log(translatedText);
  }

  function filterIngredients(text) {
    const filterDict = {
      nuts: ["almond", "cashew", "walnut"],
      fruit: ["banana", "apple", "orange"],
      meat: ["chicken", "beef", "pork"],
      spices: ["chilli", "pepper", "yeast", "wheat"],
    };
    const words = text.split(/[.,\/#!$%\^&\*;:{}=\-_`~()\[\]\n\r\s]+/); // text.split("\n");
    const wordDict = {};

    words.forEach((word) => {
      wordDict[word.toLowerCase()] = word.toLowerCase();
    });

    const filteredWords = Object.values(wordDict).filter((word) =>
      Object.values(filterDict).some((array) => array.includes(word))
    );

    const found = filteredWords.join(" ");
    found == "" ? alert("nothing") : alert("found: " + found);

    const outputWords = words.map((word, index) => {
      if (filteredWords.includes(word.toLowerCase())) {
        return (
          <Text
            key={index}
            style={{ fontWeight: "bold", fontSize: 24, color: "red" }}
          >
            {word}
          </Text>
        );
      } else {
        return <Text key={index}>{word}</Text>;
      }
    });

    const outputSentence = outputWords.reduce((acc, cur) => {
      return [acc, " ", cur];
    });
    setText(outputSentence);
  }

  return (
    <View style={styles.container}>
      <View style={styles.photoView}>
        <ScrollView>
          <Text>{text}</Text>
        </ScrollView>
        <Button title="Take Photo" onPress={takePhotoAndPerformOCR} />
      </View>
      <View style={styles.tranlateView}>
        <Button
          title="translate"
          onPress={() => translateText(capturedText)} // "你好", "Xin chào","原料"
        />
        <ScrollView>
          <Text style={{ fontSize: 24 }}>{translatedText}</Text>
        </ScrollView>
      </View>
      <View style={styles.clearScreen}>
        <Button
          title="clear screen"
          onPress={() => {
            setText("");
            setTranslatedText("");
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
  },
  photoView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    textAlignVertical: "center",
    backgroundColor: "gainsboro",
  },
  tranlateView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    textAlignVertical: "center",
    backgroundColor: "pink",
  },
  clearScreen: {
    flex: 0.2,
    backgroundColor: "white",
  },
});
