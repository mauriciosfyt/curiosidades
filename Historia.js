import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const curiosidades = [
  'Cleópatra viveu mais perto da invenção do iPhone do que da construção das pirâmides.\n\nAs pirâmides foram construídas cerca de 2.500 a.C., e Cleópatra viveu por volta de 30 a.C. — ou seja, mais de 2.000 anos antes do iPhone!',
];

const Historia = () => {
  const navigation = useNavigation();
  const [curiosidade, setCuriosidade] = useState(curiosidades[0]);

  const gerarCuriosidade = () => {
    const aleatorio = Math.floor(Math.random() * curiosidades.length);
    setCuriosidade(curiosidades[aleatorio]);
  };

  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
      <View style={styles.header}>
        <Image source={require('../assets/Cérebro-Curioso.png')} style={styles.headerIcon} />
        <Image source={require('../assets/historia.png')} style={styles.headerIcon} />
      </View>

      <View style={styles.content}>
        <View style={styles.row}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Aperte o botão para novas perguntas</Text>
          </View>
          <TouchableOpacity style={styles.lamp} onPress={gerarCuriosidade}>
            <Image source={require('../assets/lampada.png')} style={styles.iconLamp} />
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardText}>{curiosidade}</Text>
        </View>
      </View>

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

export default Historia;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#dc713c' },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 10,
  },
  headerIcon: { width: 120, height: 120 },
  content: { flex: 1, paddingHorizontal: 20, alignItems: 'center' },
  row: { flexDirection: 'row', alignItems: 'center', marginVertical: 20 },
  button: {
    backgroundColor: '#e48b5f',
    padding: 12,
    borderRadius: 8,
    marginRight: 10,
    maxWidth: 160,
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 13,
  },
  lamp: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 10,
  },
  iconLamp: { width: 40, height: 40 },
  card: {
    backgroundColor: '#f8e0b2',
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#000',
    width: '100%',
  },
  cardText: {
    color: '#000',
    textAlign: 'left',
    fontWeight: '600',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
    backgroundColor: '#f0f0f0',
  },
  iconFooter: { width: 40, height: 40 },
});
