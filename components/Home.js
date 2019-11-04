import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';

import { H1, H2, H3 } from './Title';
import Section from './Section';
import Nav from './Nav';
import Selector from './Selector';
import TimeSelector from './TimeSelector';
import Table from './Table';
import TextToggle from './TextToggle';

const Home = () => (
  <View style={styles.container}>
    <Nav />
    <ScrollView>
      <Section hasMarginTop={false}>
        <H2>Informations</H2>
        <Selector />
        <TextToggle option1={'Prédéfini'} option2={'Custom'} />
        <TimeSelector />
        <View
          style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}
        >
          <TextToggle option1={'Prédéfini'} option2={'Custom'} />
          <TextToggle option1={'Allure'} option2={'Vitesse'} />
        </View>
      </Section>
      <Section>
        <H2>Estimations</H2>
        <Table />
      </Section>
    </ScrollView>
  </View>
);

export default Home;

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    height: '100%',
  },
});
