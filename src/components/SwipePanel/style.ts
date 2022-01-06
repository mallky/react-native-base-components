import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
  },

  topLine: {
    position: 'relative',
    width: 50,
    height: 4,
    borderRadius: 2,
    backgroundColor: 'gray',
  },

  panel: {
    position: 'absolute',
    left: 0,
    right: 0,
    backgroundColor: 'green',
  },
});
