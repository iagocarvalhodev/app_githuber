import React, { Component } from 'react';

import {
  View, Text, TextInput, TouchableOpacity, StatusBar, AsyncStorage,
} from 'react-native';

import api from '~/services/api';

import styles from './style';

export default class Welcome extends Component {
  state = {
    username: '',
  };

  // checando se usuario existe na base do github
  checkUserExists = async (username) => {
    const user = await api.get(`/users/${username}`);
    return user;
  };

  // se usuario existir salva o username no store da aplicação
  saveUser = async (username) => {
    await AsyncStorage.setItem('@githuber:username', username);
  };

  signIn = async () => {
    const { username } = this.state;
    const { navigation } = this.props;

    try {
      await this.checkUserExists(username);
      await this.saveUser(username);

      navigation.navigate('Repositories');
    } catch (err) {
      console.tron.log('Usuário não existe');
    }
  };

  render() {
    const { username } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.title}>Bem Vindo</Text>
        <Text style={styles.text}>
          Para continuar precisamos que você informe seu usuario do github.
        </Text>

        <View style={styles.form}>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Digite seu usuário"
            underlineColorAndroid="transparent"
            value={username}
            onChangeText={text => this.setState({ username: text })}
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={this.signIn}>
          <Text style={styles.buttonText}>Prosseguir</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
