import reactDom from 'react-dom';
import { StyleSheet, Text, View } from 'react-native';
import React, {useState} from 'react';
import Clock from './Clock';

export default function Item(props) {
  const [timer, setTimer] = useState(10);
  
  return (
    <View style={styles.container} >
      <Clock boxHeight={boxHeightVar} timer={timer} />
      <View style={styles.boxBody}>
        <View style={styles.itemNameContainer}>
          <Text style={styles.itemName}>Chicken-Noodle Soup</Text>
        </View>
        <View style={styles.expiryContainer}>
        <Text>Expiry: 04/06/22</Text>
        </View>
      </View>
      <View style={styles.groupStatus}>
      </View>
      <View style={styles.grabber}>

      </View>
    </View>
  );
}

const boxHeightVar = 75;

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
    backgroundColor: '#65C0EA',
    alignItems: 'stretch',
    justifyContent: 'center',
  },

  itemNameContainer: {
    flex: 1,
    fontSize: 16,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },

  itemName: {
    fontSize: 18,
  },

  expiryContainer: {
    alignItems: 'center',
    paddingBottom: 5,
    justifyContent: 'center',
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