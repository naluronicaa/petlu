import React from 'react';

import { FlatList } from 'react-native';

import StatusCarrinho from '../../componentes/StatusCarrinho';
import Item from './item';

const servicos = [
  {
    id: 1,
    nome: "Banho",
    preco: 50.0,
    desc: "Banho morninho com shampoo Johnson's Baby suave!",
    quantidade: 2
},
{
    id: 2,
    nome: "Ração Natural",
    preco: 10.0,
    desc: "Comida natural para seu bichinho, feita com muito amor!",
    quantidade: 1
},
{
    id: 3,
    nome: "Passeio",
    preco: 25.0,
    desc: "Levamos seu animalzinho para dar uma voltinha para você!",
    quantidade: 0
},
{
    id: 4,
    nome: "Quadrinho",
    preco: 50.0,
    desc: "Um pequeno quadrinho de seu pet feito à mão!",
    quantidade: 0
}
];

function Carrinho() {
  const total = servicos.reduce((soma, {preco, quantidade}) => soma + (preco * quantidade), 0);

  return <>
    <StatusCarrinho total={ total } />
    <FlatList
      data={servicos}
      renderItem={({item}) => <Item {...item}  />}
      keyExtractor={({id}) => String(id)}
    />
  </>
}

export default Carrinho