import React from 'react';
import { View, StyleSheet } from 'react-native';

const Section = ({ children, hasMarginTop = true }) => (
  <View
    style={{ ...styles.container, marginTop: hasMarginTop ? styles.container.marginTop : 0 }}
  >
    {children}
  </View>
);

export default Section;

const styles = StyleSheet.create({
  container: {
    paddingLeft: 24,
    paddingRight: 24,
    marginTop: 32,
  },
});
