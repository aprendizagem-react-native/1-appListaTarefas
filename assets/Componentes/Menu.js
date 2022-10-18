import React from 'react';

import {  StyleSheet, View, Text, Button } from 'react-native';

const Menu = ( {alteraExibeModal} ) => {
    return(
        <View style={e.container} >

            <Text style={e.texto} > Lista de Tarefas </Text>
            <Button title="Novo" color="#FF5722" onPress={()=>alteraExibeModal(true)} />

        </View>
    )
}

const e = StyleSheet.create({
    container: {
        flexDirection: "row", // troca coluna por linha
        justifyContent: "space-between", // espaço entre os elementos
        alignItems: "center", // alinhar vertical
        padding: 20,
        backgroundColor: "#673AB7"
    },
    texto: {
        color: "#FFF",
        fontWeight: "bold",
        fontSize: 15
    }
});


export default Menu;