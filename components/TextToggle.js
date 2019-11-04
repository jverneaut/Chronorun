import React, { useState } from 'react';

import { colors } from '../variables';

import { Text, View, StyleSheet, TouchableWithoutFeedback } from 'react-native';

const TextToggle = ({ option1, option2 }) => {
  const [selected, setSelected] = useState(0);

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => setSelected(0)}>
        <Text style={[styles.option, selected === 0 && styles.optionSelected]}>{option1}</Text>
      </TouchableWithoutFeedback>
      <Text style={styles.separator}> / </Text>
      <TouchableWithoutFeedback onPress={() => setSelected(1)}>
        <Text style={[styles.option, selected === 1 && styles.optionSelected]}>{option2}</Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default TextToggle;

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
    marginBottom: 8,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  separator: {
    color: colors.lightText,
    fontSize: 12,
  },
  option: {
    color: colors.lightText,
    fontSize: 16,
  },
  optionSelected: {
    color: 'black',
  },
});
