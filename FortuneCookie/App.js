import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const frasesDaSorte = [
  "Hoje é um bom dia para começar algo novo!",
  "A sorte favorece os ousados.",
  "Grandes coisas estão por vir.",
  "Você será surpreendido positivamente em breve.",
  "Acredite nos seus sonhos e eles se realizarão.",
  "Sua energia positiva contagiará todos ao seu redor.",
  "A paciência é a chave para grandes conquistas.",
  "Seja a mudança que você quer ver no mundo.",
  "Uma nova oportunidade está prestes a surgir.",
  "Boas notícias estão a caminho.",
  "O universo conspira a seu favor.",
  "Você está mais perto do que imagina.",
  "Confie no seu potencial.",
  "Seja grato pelo que tem e receba ainda mais.",
  "Siga em frente, mesmo que devagar.",
  "A sorte sorri para quem persiste.",
  "Sua gentileza será recompensada.",
  "Algo incrível vai acontecer esta semana.",
  "Um novo começo está diante de você.",
  "Tudo acontece no tempo certo.",
  "Acredite: você é mais forte do que pensa.",
  "As estrelas estão alinhadas para o seu sucesso.",
  "Sua intuição te guiará para o caminho certo.",
  "Um encontro especial mudará seu dia.",
  "Aprenda com o passado e siga em frente.",
  "Você está prestes a alcançar algo grandioso.",
  "Sorte é o que acontece quando a preparação encontra a oportunidade.",
  "Um velho amigo trará boas memórias.",
  "Hoje é um bom dia para perdoar e recomeçar.",
  "Algo que você deseja há tempos está se aproximando.",
  "Não desista agora, o melhor ainda está por vir.",
  "Grandes realizações exigem coragem.",
  "Você será reconhecido pelo seu esforço.",
  "Em breve você receberá uma boa surpresa.",
  "Seus sonhos não têm prazo de validade.",
  "A alegria está nas pequenas coisas.",
  "Tudo o que você precisa já está dentro de você.",
  "Você tem o poder de mudar sua realidade.",
  "A vida recompensa quem tem coragem de arriscar.",
  "O que parece difícil hoje, amanhã será conquista.",
  "Seu brilho interior vai inspirar outras pessoas.",
  "Sorria! A sorte está do seu lado.",
  "A vida tem formas inesperadas de te surpreender.",
  "Nunca é tarde para recomeçar.",
  "Cada passo seu está te levando mais longe.",
  "Você vai conquistar mais do que imagina.",
  "Momentos incríveis estão te esperando.",
  "A harmonia atrai a prosperidade.",
  "Valorize os pequenos milagres do dia a dia.",
  "Você é capaz de criar um futuro brilhante."
];

export default function App() {
  const [imagem, setImagem] = useState(require('./assets/cookie_closed.png'));
  const [frase, setFrase] = useState('');
  const [biscoitoQuebrado, setBiscoitoQuebrado] = useState(false);

  function quebrarBiscoito() {
    if (biscoitoQuebrado) return;
    const indiceAleatorio = Math.floor(Math.random() * frasesDaSorte.length);
    const novaFrase = frasesDaSorte[indiceAleatorio];
    setFrase(`"${novaFrase}"`);
    setImagem(require('./assets/cookie_opened.png'));
    setBiscoitoQuebrado(true);
  }

  function reiniciarBiscoito() {
    setFrase('');
    setImagem(require('./assets/cookie_closed.png'));
    setBiscoitoQuebrado(false);
  }

  return (
    <View style={estilos.container}>
      <Image source={imagem} style={estilos.imagem} />
      <Text style={estilos.textoFrase}>{frase}</Text>

      {!biscoitoQuebrado ? (
        <TouchableOpacity style={estilos.botao} onPress={quebrarBiscoito}>
          <Text style={estilos.textoBotao}>Quebrar o Biscoito</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={estilos.botao} onPress={reiniciarBiscoito}>
          <Text style={estilos.textoBotao}>Tentar Novamente</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF8DC',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  imagem: {
    width: 250,
    height: 250,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  textoFrase: {
    fontSize: 20,
    color: '#333',
    fontStyle: 'italic',
    textAlign: 'center',
    marginVertical: 20,
  },
  botao: {
    backgroundColor: '#DD7B22',
    padding: 15,
    borderRadius: 10,
  },
  textoBotao: {
    color: '#FFF',
    fontSize: 18,
  },
});