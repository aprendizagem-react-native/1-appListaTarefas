import React from 'react'

import { StyleSheet, Modal, View, Text, Button, TextInput } from 'react-native'

const Cadastro = ( {insere, exibeModal, alteraExibeModal} ) => {

    const [ titulo, alteraTitulo ] = React.useState("");

    const salvar = () => {

        const tarefa = {
            id: 20,
            titulo: titulo,
            status: false
        }

        insere( tarefa );

        alteraExibeModal(false);

    }

    return(
        <Modal animationType='slide' visible={ exibeModal } >
            <View style={e.container} >
                <Text style={e.titulo} > Cadastro de tarefas </Text>
                <TextInput style={e.input} placeholder='Digite o título...' onChangeText={(e)=>alteraTitulo(e)} />                      
                <View style={ e.botoes } >
                    <Button title='Salvar' color="#673AB7" onPress={()=>salvar()} />
                    <Button title='Cancelar' color="#FF5722" onPress={()=>alteraExibeModal(false)} />
                </View>
            </View>    
        </Modal>
    )

}


const e = StyleSheet.create({
    container: {
        padding: 15 // espaçamento por dentro
    },
    titulo: {
        textAlign: "center", // alinhamento do texto esquerda/direita/centro
        fontSize: 15, // tamanho da fonte
        marginBottom: 10, // margem em baixo (bottom)
        marginTop: 10, // margem em cima (top)
        fontWeight: "bold" // negrito na fonte
    },
    botoes: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    input: {
        borderWidth: 1, // adicionar borda nas coisas
        borderColor: "#CCC", // cor da borda
        padding: 10,
        marginBottom: 10
    }
})

export default Cadastro;