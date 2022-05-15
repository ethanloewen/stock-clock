import reactDom from 'react-dom';
import { StyleSheet, Text, View } from 'react-native';
import Item from './components/Item.js';

export default function App() {

  return (
    <View style={styles.container}>
      <Item itemNameText={'Chicken-Noodle Soup'} expiryText={'04/06/22'}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    margin: 0,
    padding: 0,
    // boxSizing: 'border-box',
    // borderWidth: 5,
    // borderColor: 'red',
  },
});
