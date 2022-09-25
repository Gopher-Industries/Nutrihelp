import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.searchInput} placeholder="Search here.." />
    </View>
  );
};

//const onChangeSearch = () => alert("Search test");

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
  },
  searchInput: {
    width: '100%',
    height: '100%',
    paddingLeft: 14,
    fontSize: 16,
    borderColor: 'black',
  },
});

export default SearchBar;
