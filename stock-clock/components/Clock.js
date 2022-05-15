import reactDom from 'react-dom';
import { StyleSheet, Text, View } from 'react-native';

export default function Clock(props) {

  return (
    <View style={styles.clock} >
      <Text style={styles.clockText}>07</Text>
    </View>
  );
}

const boxHeightVar = 100;

const styles = StyleSheet.create({
  clock: {
    height: boxHeightVar,
    width: (boxHeightVar * 0.6),
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },

  clockText: {
    color: 'white',
    fontSize: 30,
  },
});