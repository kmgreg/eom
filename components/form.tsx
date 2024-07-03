import React from 'react';
import {SafeAreaView, StyleSheet, TextInput, View} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker'

const UrlSelector = () => {
  const [url, onChangeText] = React.useState('');
  const [number, onChangeNumber] = React.useState('');
  const [showDropdown, setShowDropdown] = React.useState(false);
  const [selectedVerb, setSelectedVerb] = React.useState(null);
  const [verbList, setVerbList] = React.useState([
    {label: 'GET', value: 'GET'},
    {label: 'POST', value: 'POST'}
  ])


  return (
    <View>
      <DropDownPicker
    open={showDropdown}
    value={selectedVerb}
    items={verbList}
    setOpen={setShowDropdown}
    setValue={setSelectedVerb}
    setItems={setVerbList}
    />
    </View>
    
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default UrlSelector;