import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { colors } from '../variables';

const Nav = () => (
  <View style={styles.container}>
    <Text style={styles.title}>🏃 Chronorun</Text>
  </View>
);

export default Nav;

const styles = StyleSheet.create({
  container: {
    paddingBottom: 16,
    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: 32,
  },
  title: {
    fontSize: 32,
    fontWeight: '600',
  },
});
