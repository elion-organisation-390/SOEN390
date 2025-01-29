import React from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, ViewStyle } from 'react-native';

type SearchBarProps = {
  searchText: string;
  onSearchTextChange: (text: string) => void;
  onSearchPress: () => void;
  style?: ViewStyle;
};

const SearchBar: React.FC<SearchBarProps> = ({ searchText, onSearchTextChange, onSearchPress, style }) => {
  return (
    <View style={[styles.searchBox, style]}>
      <TextInput
        style={styles.input}
        placeholder="Search place"
        value={searchText}
        onChangeText={onSearchTextChange}
      />
      <TouchableOpacity style={styles.searchButton} onPress={onSearchPress}>
        <Text style={styles.searchButtonText}>Search</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    shadowOpacity: 0.2,
    elevation: 3,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    height: 40,
  },
  searchButton: {
    backgroundColor: '#722F37',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginLeft: 10,
  },
  searchButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default SearchBar;