import React, { useState } from 'react';

import { colors } from '../variables';

import { Text, View, ScrollView, StyleSheet, TouchableWithoutFeedback } from 'react-native';

const data = [
  {
    name: '500 m',
    distance: 500,
  },
  {
    name: '1 500 m',
    distance: 1500,
  },
  {
    name: '2 000 m',
    distance: 2000,
  },
  {
    name: '5 km',
    distance: 5000,
  },
  {
    name: '10 km',
    distance: 10000,
  },
  {
    name: 'semi-marathon',
    distance: 21000,
  },
  {
    name: 'marathon',
    distance: 42000,
  },
];

const SelectorCard = ({ name, distance, selected, onTouch }) => {
  const isThousands = distance.toString().length > 3;
  return (
    <TouchableWithoutFeedback onPress={onTouch}>
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

const Selector = () => {
  const [selected, setSelected] = useState(0);
  return (
    <ScrollView
      style={styles.container}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    >
      {data.map(({ name, distance }, index) => (
        <SelectorCard
          onTouch={() => setSelected(index)}
          key={name}
          name={name}
          distance={distance}
          selected={index === selected}
        />
      ))}
    </ScrollView>
  );
};

export default Selector;

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
    fontSize: 32,
  },
  cardUnit: {
    fontSize: 12,
    fontWeight: '700',
  },
});
