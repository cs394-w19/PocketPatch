import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Table, Row, Rows } from "react-native-table-component";
import { Coin, OkFace, AngryFace, WoundUpFace } from "./BearIcons";

export default class ExampleOne extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tableHead: ["Date", "Duration", "Before", "After", "Coins"],
      tableData: [
        [
          "Today\n14 Mar 2019",
          "7 min",
          <OkFace />,
          <OkFace />,
          <Coin coinValue={5} />
        ],
        [
          "Thursday\n14 Mar 2019",
          "7 min",
          <OkFace />,
          <OkFace />,
          <Coin coinValue={5} />
        ],
        [
          "Wednesday\n13 Mar 2019",
          "6 min",
          <AngryFace />,
          <OkFace />,
          <Coin coinValue={4} />
        ],
        [
          "Tuesday\n12 Mar 2019",
          "7 min",
          <AngryFace />,
          <AngryFace />,
          <Coin coinValue={2} />
        ],
        [
          "Monday\n11 Mar 2019",
          "6 min",
          <WoundUpFace />,
          <AngryFace />,
          <Coin coinValue={3} />
        ],
        [
          "Sunday\n10 Mar 2019",
          "6 min",
          <WoundUpFace />,
          <AngryFace />,
          <Coin coinValue={3} />
        ],
        [
          "Saturday\n9 Mar 2019",
          "5 min",
          <WoundUpFace />,
          <AngryFace />,
          <Coin coinValue={3} />
        ]
      ]
    };
  }

  render() {
    const state = this.state;
    return (
      <View style={styles.container}>
        <Table borderStyle={{ borderWidth: 2, borderColor: "#c8e1ff" }}>
          <Row
            data={state.tableHead}
            style={styles.head}
            textStyle={styles.text}
          />
          <Rows data={state.tableData} textStyle={styles.text} />
        </Table>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { margin: 5, marginTop: 10, backgroundColor: "#fff" },
  head: { height: 40, backgroundColor: "#f1f8ff" },
  text: { margin: 8, textAlign: "center" }
});
