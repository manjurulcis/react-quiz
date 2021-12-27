import React, { useEffect, useState } from "react";
import {
  View,
  SafeAreaView,
  FlatList,
  Pressable,
  Text,
  StyleSheet,
} from "react-native";
import {
  NavigationContainer,
  NavigationEvents,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { useRecoilValue } from "recoil";
import { getAllAnswer } from "../recoil/selectors/homeSelectors";

const QuizApp = ({ route, navigation }) => {

  // Button title
  const title = "Start";
  // Fetching data and showing to Home
  let oldAllAnswers = useRecoilValue(getAllAnswer);

  const [allAnswers, setAllAnswers] = useState(oldAllAnswers);
  console.log(allAnswers);
  useEffect(() => {
    console.log(route.params?.answer);
    if (route.params?.answer)
      setAllAnswers([route.params?.answer, ...allAnswers]);
    console.log("Inside Useffect", allAnswers);
  }, [route]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.textColor}>Welcome to the Quiz</Text>
      <Pressable
        style={styles.button}
        onPress={() =>
          navigation.navigate({
            name: "Quiz",
            params: { answer: null },
          })
        }
      >
        <Text style={styles.text}>{title}</Text>
      </Pressable>
      <Text style={styles.answerLabel}>
        All Entries ( Total {allAnswers.length} )
      </Text>
      <View style={styles.dataGridRow}>
        <Text style={styles.datatableHeaderGridCol1}>Text</Text>
        <Text style={styles.datatableHeaderGridCol2}>Option</Text>
        <Text style={styles.datatableHeaderGridCol2}>Posted</Text>
      </View>
      <FlatList
        data={allAnswers}
        style={{ width: "92%", paddingLeft: "1%", marginTop: ".2rem" }}
        renderItem={({ item }) => (
          <View style={styles.dataGridRow}>
            <Text style={styles.dataGridCol1}>
              {item.user_answer.length > 10
                ? item.user_answer.substring(0, 7) + "..."
                : item.user_answer.substring(0, 10)}
            </Text>
            <Text style={styles.dataGridCol2}>{item.selected_option}</Text>
            <Text style={styles.dataGridCol2}>{item.time.toString()}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#159DFF",
    alignItems: "center",
    justifyContent: "center",
  },
  textColor: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "700",
  },
  button: {
    backgroundColor: "blue",
    paddingHorizontal: "2rem",
    paddingVertical: "0.5rem",
    marginTop: "0.6rem",
  },
  text: {
    fontSize: 20,
    fontWeight: "700",
    color: "white",
  },
  dataGridRow: {
    padding: 10,
    borderWidth: 0,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginBottom: 5,
    display: "inline-block",
    width: "100%",
  },
  dataGridCol1: {
    display: "inline-block",
    width: "36%",
    fontSize: 20,
    color: "#222",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
  dataGridCol2: {
    display: "inline-block",
    width: "32%",
    fontSize: 20,
    color: "#222",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
  datatableHeaderGridCol1: {
    display: "inline-block",
    width: "40%",
    fontSize: 20,
    fontWeight: "700",
    color: "#FFFFFF",
    height: 25,
    textAlign: "left",
    paddingLeft: 20,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
  datatableHeaderGridCol2: {
    display: "inline-block",
    width: "30%",
    fontSize: 20,
    fontWeight: "700",
    color: "white",
    height: 25,
    textAlign: "left",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
  answerLabel: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 15,
    color: "#FFDDEE",
  },
});
export default QuizApp;
