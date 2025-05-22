import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const curiosidades = [
  'O mel nunca estraga — já encontraram potes comestíveis com mais de 3.000 anos no Egito.',
  'As maçãs flutuam porque 25% do seu volume é ar.',
  'O ketchup era usado como remédio no século XIX.',
  'O chocolate já foi usado como moeda pelos maias e astecas.',
];

const CuriosidadeComida = () => {
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
        <Image source={require('../assets/comida.png')} style={styles.headerIcon} />
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

      {/* Footer visível */}
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

export default CuriosidadeComida;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#791d1d',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#fff',
  },
  headerIcon: {
    width: 170,
    height: 170,
    resizeMode: 'contain',
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
    backgroundColor: '#fff',
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
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
  },
  iconLamp: {
    width: 40,
    height: 40,
  },
  card: {
    backgroundColor: '#f26a6a',
    padding: 20,
    borderRadius: 10,
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#000',
  },
  cardText: {
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
    backgroundColor: '#e6e6e6',
  },
  iconFooter: {
    width: 40,
    height: 40,
  },
});
