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
          <Text style={styles.itemName}>{props.itemNameText}</Text>
        </View>
        <View style={styles.expiryContainer}>
        <Text>Expiry: {props.expiryText}</Text>
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
    marginTop: 50,
    paddingHorizontal: 15,
    // borderColor: 'rgba(158, 150, 150, 1)',
    // borderWidth: 10,
    // borderRadius: 5,
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
    fontWeight: 'bold',
  },

  expiryContainer: {
    alignItems: 'center',
    paddingBottom: 5,
    justifyContent: 'center',
  },

  groupStatus: {
    width: 10,
    height: boxHeightVar,
    backgroundColor: '#1EA82E',
  },

  grabber: {
    width: (boxHeightVar / 2),
    height: boxHeightVar,
    backgroundColor: '#DB6E61',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
});