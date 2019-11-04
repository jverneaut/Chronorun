import React from 'react';
import { Text, StyleSheet } from 'react-native';

export const H1 = ({ children }) => <Text style={styles.h1}>{children}</Text>;

export const H2 = ({ children }) => <Text style={styles.h2}>{children}</Text>;

export const H3 = ({ children }) => <Text style={styles.h3}>{children}</Text>;

export default H1;

const styles = StyleSheet.create({
  h1: {
    fontSize: 24,
    fontWeight: '600',
  },
  h2: {
    fontSize: 20,
    fontWeight: '600',
  },
  h3: {},
});
