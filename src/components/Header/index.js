import React from 'react';

import {
  View, Text, TouchableOpacity, StatusBar,
} from 'react-native';

import PropTypes from 'prop-types';
import styles from './styles';

// import { Container } from './styles';

const Header = ({ title }) => (
  <View style={styles.container}>
    <StatusBar barStyle="dark-content" />
    <View style={styles.left} />
    <Text style={styles.title}>{title}</Text>
    <TouchableOpacity onPress={() => {}} />
  </View>
);

Header.PropTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
