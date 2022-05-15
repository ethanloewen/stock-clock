import reactDom from 'react-dom';
import { StyleSheet, Text, View } from 'react-native';

export default function Item(props) {
  return (
    <View style={styles.container} >
      <Text>Test</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexWidth: 1,
    alignSelf: 'stretch',
    height: 100, //remove later
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    marginTop: 50,
    borderColor: 'blue',
    borderRadius: 5,
  },
});