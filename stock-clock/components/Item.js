import reactDom from 'react-dom';
import { StyleSheet, Text, View } from 'react-native';

export default function Item(props) {
  return (
    <View style={styles.container} >
      <View style={styles.clock}>
        <Text style={styles.clockText}>07</Text>
      </View>
      <View style={styles.boxBody}>
        <Text>Chicken-Noodle Soup</Text>
      </View>
      <View style={styles.groupStatus}>
      </View>
      <View style={styles.grabber}>

      </View>
    </View>
  );
}

const boxHeightVar = 100;

const styles = StyleSheet.create({
  container: {
    flexWidth: 1,
    alignSelf: 'stretch',
    height: boxHeightVar, //remove later
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderWidth: 3,
    marginTop: 50,
    borderColor: 'blue',
    borderRadius: 5,
  },

  boxBody: {
    flex: 1,
    height: boxHeightVar,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },

  clock: {
    height: boxHeightVar,
    width: boxHeightVar,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },

  clockText: {
    color: 'white',
    fontSize: 30,
  },

  groupStatus: {
    width: 10,
    height: boxHeightVar,
    backgroundColor: 'green',
  },

  grabber: {
    width: (boxHeightVar / 2),
    height: boxHeightVar,
    backgroundColor: 'aqua',
  },
});