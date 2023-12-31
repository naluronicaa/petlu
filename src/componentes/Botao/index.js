import React from 'react';

import { TouchableOpacity, Text } from 'react-native';
import funcaoEstilosPadrao from './estilos';

function Botao({pequeno = false, invertido = true, valor, acao, estilos}) {
  const estilosPadrao = funcaoEstilosPadrao(pequeno, invertido);
  return <TouchableOpacity onPress={acao} style={[estilosPadrao.botao, estilos]}>
    <Text style={estilosPadrao.valor}>{valor}</Text>
  </TouchableOpacity>
}

export default Botao