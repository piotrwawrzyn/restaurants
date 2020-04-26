import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.backgroundStyle}>
      <Ionicons name="ios-search" style={styles.iconStyle} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Search"
        style={styles.inputStyle}
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: '#F0EEEE',
    borderRadius: 10,
    height: 50,
    marginHorizontal: 15,
    marginVertical: 10,
    flexDirection: 'row'
  },
  inputStyle: {
    flex: 1,
    fontSize: 16,
    letterSpacing: 0.5
  },
  iconStyle: {
    alignSelf: 'center',
    paddingHorizontal: 10,
    color: '#aaa',
    fontSize: 35
  }
});

export default SearchBar;
