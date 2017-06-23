import React, { Component } from "react";
import { View, Text } from "react-native";
import { Card } from "react-native-elements";

export default class ProductCard extends Component {
  render() {
    const { data } = this.props;
    return (
      <Card title={data.name} image={{uri: data.image}}>
        <Text style={{ marginBottom: 0, fontWeight:'bold' }}>
          Description
        </Text>
        <Text>
          {data.description}
        </Text>
        <View>
        <Text style={{fontWeight: 'bold', marginTop: 10}}>Manufacturer</Text>
        <Text>{data.manufacturer}</Text>
        <Text style={{fontWeight: 'bold', marginTop: 10}}>Model</Text>
        <Text>{data.model===null? 'NA': data.model}</Text>
        <Text style={{fontWeight: 'bold', marginTop: 10}}>UPC Number</Text>
        <Text>{data.upc===null? 'NA': data.upc}</Text>
        <Text style={{fontWeight: 'bold', marginTop: 10}}>Price (USD)</Text>
        <Text>{data.price===null? 'NA': data.price}</Text>
        </View>

      </Card>
    );
  }
}
