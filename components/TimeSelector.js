import React, { useState } from 'react';

import { Text, View, StyleSheet, TouchableWithoutFeedback, ScrollView } from 'react-native';

import { colors } from '../variables';

const TimeSelector = () => {
  const minutes = [0, 1, 2, 3, 4, 5, 6];
  const seconds = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55];

  const [selectedMinutesIndex, setSelectedMinutesIndex] = useState(0);
  const [selectedSecondsIndex, setSelectedSecondsIndex] = useState(0);

  return (
    <View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.row}>
        {minutes.map((minute, index) => (
          <TouchableWithoutFeedback key={minute} onPress={() => setSelectedMinutesIndex(index)}>
            <View style={[styles.cell, index === selectedMinutesIndex && styles.cellSelected]}>
              <Text
                style={[
                  styles.cellText,
                  index === selectedMinutesIndex && styles.cellTextSelected,
                ]}
              >
                {minute}
              </Text>
            </View>
          </TouchableWithoutFeedback>
        ))}
      </ScrollView>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.row}>
        {seconds.map((second, index) => (
          <TouchableWithoutFeedback key={second} onPress={() => setSelectedSecondsIndex(index)}>
            <View style={[styles.cell, index === selectedSecondsIndex && styles.cellSelected]}>
              <Text
                style={[
                  styles.cellText,
                  index === selectedSecondsIndex && styles.cellTextSelected,
                ]}
              >
                {second}
              </Text>
            </View>
          </TouchableWithoutFeedback>
        ))}
      </ScrollView>
    </View>
  );
};

export default TimeSelector;

const styles = StyleSheet.create({
  row: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 8,
  },
  cell: {
    width: 64,
    height: 64,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.grey,
    borderRadius: 4,
    marginRight: 8,
  },
  cellSelected: {
    backgroundColor: colors.primary,
  },
  cellText: {
    fontWeight: '600',
    fontSize: 20,
  },
  cellTextSelected: {
    color: 'white',
  },
});
