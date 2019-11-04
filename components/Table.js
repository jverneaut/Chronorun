import React from 'react';

import { Text, View, StyleSheet } from 'react-native';

const data = [
  {
    name: '5 kilomètres',
    distance: 5000,
    time: 1800,
    pace: 323,
  },
  {
    name: '10 kilomètres',
    distance: 10000,
    time: 1800,
    pace: 323,
  },
  {
    name: 'Semi-marathon',
    distance: 21000,
    time: 1800,
    pace: 323,
  },
  {
    name: 'Marathon',
    distance: 42195,
    time: 1800,
    pace: 323,
  },
];

const TableRow = ({ name, distance, time, pace }) => {
  const isThousands = distance.toString().length > 3;

  const timeM = Math.floor(time / 60);
  const timeS = time - timeM * 60;

  const paceM = Math.floor(pace / 60);
  const paceS = pace - paceM * 60;

  return (
    <View style={styles.row}>
      <View style={[styles.col, styles.col1]}>
        <Text style={styles.cell}>{name}</Text>
      </View>
      <View style={[styles.col, styles.col2]}>
        <Text style={styles.cell}>
          {isThousands ? distance / 1000 + ' km' : distance + ' m'}
        </Text>
      </View>
      <View style={[styles.col, styles.col3]}>
        <Text style={styles.cell}>
          {timeM.toString().padStart(2, '0') + ':' + timeS.toString().padStart(2, '0')}
        </Text>
      </View>
      <View style={[styles.col, styles.col4]}>
        <Text style={styles.cell}>
          {paceM.toString().padStart(2, '0') + ':' + paceS.toString().padStart(2, '0')}
        </Text>
      </View>
    </View>
  );
};

const Table = () => (
  <View style={styles.container}>
    <View style={styles.head}>
      <View style={[styles.col, styles.col1]}>
        <Text style={[styles.cell, styles.headCell]}>Nom</Text>
      </View>
      <View style={[styles.col, styles.col2]}>
        <Text style={[styles.cell, styles.headCell]}>Distance</Text>
      </View>
      <View style={[styles.col, styles.col3]}>
        <Text style={[styles.cell, styles.headCell]}>Durée</Text>
      </View>
      <View style={[styles.col, styles.col4]}>
        <Text style={[styles.cell, styles.headCell]}>Allure</Text>
      </View>
    </View>
    {data.map(dataEntry => (
      <TableRow {...dataEntry} key={dataEntry.name} />
    ))}
  </View>
);

export default Table;

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
  },
  head: {
    display: 'flex',
    flexDirection: 'row',
  },
  headCell: {
    color: '#868e96',
  },
  cell: {
    fontSize: 16,
    lineHeight: 28,
  },
  col: {
    display: 'flex',
    alignItems: 'flex-end',
  },
  col1: {
    flex: 1,
    alignItems: 'flex-start',
  },
  col2: {
    alignItems: 'flex-start',
    width: 84,
  },
  col3: {
    alignItems: 'center',
    width: 56,
  },
  col4: {
    width: 56,
  },
});
