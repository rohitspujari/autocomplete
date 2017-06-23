import React, { Component } from "react";
import { Text, View, TextInput, Dimensions, FlatList, Keyboard} from "react-native";
import { SearchBar, List, ListItem } from "react-native-elements";
import axios from "axios";
//const AUTOCOMPLETE_API = "http://localhost:8010/rlabs-247d8/us-central1/autocomplete";
const AUTOCOMPLETE_API =
  "https://us-central1-one-time-password-24ef8.cloudfunctions.net/autocomplete";

const { height, width } = Dimensions.get("window");

export default class Autocomplete extends Component {
  state = {
    inputValue: "",
    autocompleteData: [],
    showSuggestions: true,

  };

  _handleTextChange = inputValue => {
    const request = {
      prefix: inputValue
    };

    axios.post(AUTOCOMPLETE_API, request).then((response, error) => {
      //console.log(response.data);
      this.setState({ autocompleteData: response.data });
    });
    this.setState({ inputValue });
    //console.log(inputValue)
  };


  renderSuggestions = () => {
    return (
      <List
        containerStyle={{
          marginTop:0,
          borderTopWidth: 0,
          borderBottomWidth: 0

        }}
      >
        {this.state.autocompleteData.map((item, i) =>
          <ListItem
            key={item._id}
            title={item.text}
            hideChevron
            underlayColor="#97a3a3"
            onPress={()=> {
              Keyboard.dismiss()
              this.setState({showSuggestions:false, autocompleteData:[], inputValue: item.text})
            }}

          />
        )}
      </List>
    );
  }



  render() {
    return (
      <View style={styles.container}>

        <SearchBar
          ref={ component => this._textInput = component}
          lightTheme
          containerStyle={{
            backgroundColor:'white',
            //borderWidth: 0,
            //margin: 0
          }}
          inputStyle={{
            backgroundColor: "white"
          }}
          onFocus={()=>{this.setState({ inputValue:'', showSuggestions:true})}}
          value={this.state.inputValue}
          onChangeText={this._handleTextChange}
          placeholder="search"
          autoCorrect={false}
        />

        {this.state.showSuggestions == true ? this.renderSuggestions(): <View />}


      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1
    //alignItems: "center"
    //justifyContent: 'center',
    //borderWidth: 1
  },

  suggestions: {
    //borderWidth:1,
    //marginT
    ///paddingHorizontal: 5
  },
  autocomplete: {
    //flex:1,
    //borderWidth: 1
  }
};
