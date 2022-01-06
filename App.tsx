/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';

import {
  Platform,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import PagingFlatList from './src/components/PagingFlatList';

const App = () => (
  <View style={styles.sectionContainer}>
    <Text style={{ color: 'white' }}>asd</Text>
    <PagingFlatList
      data={Array(30).fill(null)}
      ItemSeparatorComponent={({ highlighted }) => (
        <View
          style={[styles.separator, highlighted && { borderColor: 'red' }]}
        />
      )}
      renderItem={({ index, separators }) => (
        <TouchableHighlight
          style={{
            borderColor: 'yellow',
            borderWidth: 4,
            height: 100,
            width: '100%',
            marginBottom: 8,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => console.log(index)}
          onShowUnderlay={separators.highlight}
          onHideUnderlay={separators.unhighlight}
        >
          <Text style={{ color: 'red', fontSize: 20, fontWeight: 'bold' }}>
            {index}
          </Text>
        </TouchableHighlight>
      )}
    />
  </View>
);

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    marginTop: 32,
    paddingHorizontal: 24,
    backgroundColor: 'black',
  },

  separator: {
    borderColor: 'white',
    borderWidth: 4,
  },
});

export default App;
