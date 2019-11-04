import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Text, View, ScrollView, StyleSheet, TouchableWithoutFeedback } from 'react-native';

import { selectRace } from '../redux/modules/userInput';

import { colors } from '../variables';

const SelectorCard = ({ name, distance, selected, onPress }) => {
  const isThousands = distance.toString().length > 3;
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.card, selected && styles.cardSelected]}>
        <Text
          style={{
            ...styles.cardDistance,
            color: selected ? 'white' : styles.cardDistance.color,
          }}
        >
          {isThousands ? distance / 1000 : distance}
          <Text style={styles.cardUnit}> {isThousands ? 'km' : 'm'}</Text>
        </Text>
        <Text style={{ ...styles.cardName, color: selected ? 'white' : styles.cardName.color }}>
          {name}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const Selector = ({ userInput, selectRace }) => {
  return (
    <ScrollView
      style={styles.container}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    >
      {userInput.races.map(({ name, distance }, index) => (
        <SelectorCard
          onPress={() => {
            selectRace(index);
          }}
          key={name}
          name={name}
          distance={distance}
          selected={index === userInput.selectedRaceIndex}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
  },
  card: {
    backgroundColor: colors.grey,
    width: 120,
    height: 104,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    marginRight: 8,
    padding: 8,
  },
  cardSelected: {
    backgroundColor: colors.primary,
  },
  cardName: {
    textAlign: 'center',
    fontSize: 14,
  },
  cardDistance: {
    fontSize: 24,
  },
  cardUnit: {
    fontSize: 12,
    fontWeight: '700',
  },
});

export default connect(
  ({ userInput }) => ({ userInput }),
  { selectRace }
)(Selector);
