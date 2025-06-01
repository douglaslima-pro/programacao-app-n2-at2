import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  StyleSheet, 
  Button, 
  KeyboardAvoidingView, 
  TouchableWithoutFeedback, 
  Keyboard 
} from 'react-native';

export default function App() {
  const [valorConta, setValorConta] = useState('');
  const [numeroPessoas, setNumeroPessoas] = useState('');
  const [percentualGorjeta, setPercentualGorjeta] = useState('');
  const [valorPorPessoa, setValorPorPessoa] = useState(null);

  function calcularDivisao() {
    const valor = parseFloat(valorConta);
    const pessoas = parseInt(numeroPessoas);
    const gorjeta = parseFloat(percentualGorjeta) || 0;

    if (isNaN(valor) || isNaN(pessoas) || pessoas <= 0) {
      setValorPorPessoa(null);
      return;
    }

    const totalComGorjeta = valor + (valor * (gorjeta / 100));
    const valorDividido = totalComGorjeta / pessoas;
    setValorPorPessoa(valorDividido.toFixed(2));
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView style={estilos.container} behavior="padding">
        <Text style={estilos.titulo}>DivApp - Divida sua conta!</Text>

        <TextInput
          style={estilos.entrada}
          keyboardType="numeric"
          placeholder="Valor total da conta"
          value={valorConta}
          onChangeText={setValorConta}
        />

        <TextInput
          style={estilos.entrada}
          keyboardType="numeric"
          placeholder="Número de pessoas"
          value={numeroPessoas}
          onChangeText={setNumeroPessoas}
        />

        <TextInput
          style={estilos.entrada}
          keyboardType="numeric"
          placeholder="Gorjeta (%) - opcional"
          value={percentualGorjeta}
          onChangeText={setPercentualGorjeta}
        />

        <Button title="Calcular" onPress={calcularDivisao} />

        {valorPorPessoa && (
          <Text style={estilos.resultado}>Cada pessoa deve pagar: R$ {valorPorPessoa}</Text>
        )}
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0f7fa',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#00796b'
  },
  entrada: {
    width: '100%',
    padding: 12,
    borderColor: '#00796b',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 15,
    backgroundColor: '#fff'
  },
  resultado: {
    marginTop: 20,
    fontSize: 20,
    color: '#004d40',
    fontWeight: 'bold'
  }
});