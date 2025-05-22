import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const curiosidades = [
  'As borboletas sentem o gosto com os pés! Elas têm sensores gustativos nas patas para identificar se a planta é boa para colocar seus ovos.',
  'Os golfinhos dão nomes uns aos outros através de assobios únicos.',
  'Os polvos têm três corações e o sangue azul!',
  'As corujas conseguem girar a cabeça em até 270 graus.',
];

const Animais = () => {
  const navigation = useNavigation();
  const [curiosidade, setCuriosidade] = useState(curiosidades[0]);

  const gerarCuriosidade = () => {
    const aleatorio = Math.floor(Math.random() * curiosidades.length);
    setCuriosidade(curiosidades[aleatorio]);
  };

  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
      {/* Header */}
      <View style={styles.header}>
        <Image source={require('../assets/Cérebro-Curioso.png')} style={styles.headerIcon} />
        <Image source={require('../assets/animais.png')} style={styles.headerIcon} />
      </View>

      {/* Conteúdo */}
      <View style={styles.content}>
        <View style={styles.row}>
          <View style={styles.tipBox}>
            <Text style={styles.tipText}>
              Aperte o botão para{'\n'}novas perguntas
            </Text>
          </View>

          <TouchableOpacity style={styles.lamp} onPress={gerarCuriosidade}>
            <Image source={require('../assets/lampada.png')} style={styles.iconLamp} />
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardText}>{curiosidade}</Text>
        </View>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image source={require('../assets/Home.png')} style={styles.iconFooter} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('EditarCuriosidade')}>
                  <Image source={require('../assets/lapis.png')} style={styles.iconFooter} />
                </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Animais;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5d9b5a', // verde
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 10,
  },
  headerIcon: {
    width: 130,
    height: 130,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  tipBox: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 12,
    marginRight: 10,
    maxWidth: 180,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  tipText: {
    color: '#333',
    fontWeight: '600',
    fontSize: 16,
    textAlign: 'center',
  },
  lamp: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 10,
  },
  iconLamp: {
    width: 40,
    height: 40,
  },
  card: {
    backgroundColor: '#b8e3ae',
    padding: 15,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#2e3b2e',
    width: '100%',
  },
  cardText: {
    color: '#000',
    textAlign: 'center',
    fontWeight: '600',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
    backgroundColor: '#f0f0f0',
  },
  iconFooter: {
    width: 40,
    height: 40,
  },
});
