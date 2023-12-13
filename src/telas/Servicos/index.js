import React from "react";
import { FlatList } from "react-native";
import Item from "./Item";
import estilos from '../../estilos/';


// o KeyboardAvoidingView faz com que o teclado não sobreponha o componente, ou seja, ele acompanhe junto

function Servicos () {

    const servicos = [
        {
            id: 1,
            nome: "Banho",
            preco: 50.0,
            desc: "Banho morninho com shampoo Johnson's Baby suave!"
        },
        {
            id: 2,
            nome: "Ração Natural",
            preco: 10.0,
            desc: "Comida natural para seu bichinho, feita com muito amor!"
        },
        {
            id: 3,
            nome: "Passeio",
            preco: 25.0,
            desc: "Levamos seu animalzinho para dar uma voltinha para você!"
        },
        {
            id: 4,
            nome: "Quadrinho",
            preco: 50.0,
            desc: "Um pequeno quadrinho de seu pet feito à mão!"
        }
    ]

    return <>
        <FlatList
        data={servicos}
        renderItem={({item}) => <Item {...item}  />}
        keyExtractor={({id}) => String(id)}
        />
    </>
}

export default Servicos