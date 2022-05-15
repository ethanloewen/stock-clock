import { StatusBar } from 'expo-status-bar';
import reactDom from 'react-dom';
import { StyleSheet, Text, View } from 'react-native';
import Item from './components/Item.js';

export default function App() {
  return (
    <View style={styles.container}>
      <Item />
      {/* <StatusBar style="auto" /> */}
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
    // justifyContent: 'center',
    borderWidth: 5,
    borderColor: 'red',
  },
});
