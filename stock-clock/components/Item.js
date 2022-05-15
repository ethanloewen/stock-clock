import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <div style={styles.itemBox}>
      <Text>Test</Text>
      <StatusBar style="auto" />
    </div>
  );
}

const styles = StyleSheet.create({
  itemBox: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
});