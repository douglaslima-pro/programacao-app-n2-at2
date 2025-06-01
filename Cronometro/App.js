import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

export default function App() {
  const [tempo, setTempo] = useState(0);
  const [executando, setExecutando] = useState(false);
  const intervaloRef = useRef(null);

  const formatarTempo = (tempo) => {
    const minutos = Math.floor(tempo / 60000);
    const segundos = Math.floor((tempo % 60000) / 1000);
    const milesimos = Math.floor((tempo % 1000) / 10);

    return `${String(minutos).padStart(2, '0')}:${String(segundos).padStart(2, '0')}:${String(milesimos).padStart(2, '0')}`;
  };

  const iniciarCronometro = () => {
    if (!executando) {
      setExecutando(true);
      intervaloRef.current = setInterval(() => {
        setTempo((tempoAnterior) => tempoAnterior + 10);
      }, 10);
    }
  };

  const pausarCronometro = () => {
    if (executando) {
      clearInterval(intervaloRef.current);
      setExecutando(false);
    }
  };

  const reiniciarCronometro = () => {
    clearInterval(intervaloRef.current);
    setExecutando(false);
    setTempo(0);
  };

  return (
    <View style={estilos.container}>
      <StatusBar hidden />
      <Text style={estilos.titulo}>Cronômetro</Text>
      <Text style={estilos.tempoTexto}>{formatarTempo(tempo)}</Text>

      <View style={estilos.containerBotoes}>
        <TouchableOpacity style={estilos.botao} onPress={iniciarCronometro}>
          <Text style={estilos.textoBotao}>Iniciar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={estilos.botao} onPress={pausarCronometro}>
          <Text style={estilos.textoBotao}>Pausar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={estilos.botao} onPress={reiniciarCronometro}>
          <Text style={estilos.textoBotao}>Reiniciar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#101010',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    color: '#fff',
    fontSize: 32,
    marginBottom: 20,
  },
  tempoTexto: {
    fontSize: 60,
    color: '#00FFAA',
    fontWeight: 'bold',
    marginBottom: 40,
  },
  containerBotoes: {
    flexDirection: 'row',
    gap: 20,
  },
  botao: {
    backgroundColor: '#282c34',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginHorizontal: 5,
  },
  textoBotao: {
    color: '#00FFAA',
    fontSize: 18,
  },
});