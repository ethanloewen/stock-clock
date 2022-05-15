import reactDom from 'react-dom';
import { StyleSheet, Text, View } from 'react-native';

export default function Clock(props) {

  return (
    <View style={styles.clock} >
      <Text style={styles.clockText}>{props.timer}</Text>
    </View>
  );
}

const boxHeightVar = 75;

const styles = StyleSheet.create({
  clock: {
    height: boxHeightVar,
    width: (boxHeightVar * 0.6),
    backgroundColor: '#17526D',
    alignItems: 'center',
    justifyContent: 'center',
  },

  clockText: {
    color: 'white',
    fontSize: 26,
  },
});