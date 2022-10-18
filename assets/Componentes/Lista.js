import React from 'react';

import { StyleSheet, View, Text, Button } from 'react-native';

const Lista = ( {tarefas, remove, altera, exibeTodos} ) => {

    return(
        <View>
        {
            tarefas == 0 ? <Text> Nenhuma tarefa cadastrada... </Text> :
            tarefas.map( t => {

                if( exibeTodos == false && t.status == true ){
                    return null;
                }
                
                return <View key={t.id} style={e.container} >
                    
                    <Text style={ t.status == true ? e.textoConcluido : null } > { t.titulo } </Text>

                    <View style={e.botoes} >
                        <Button title="V" color="#673AB7" onPress={()=>altera(t.id)} />
                        <Button title="X" color="#FF5722" onPress={()=>remove(t.id)} />
                    </View>

                </View>

            })
        }
        </View>
    );
}

const e = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderWidth: 1,
        padding: 10,
        marginTop: 20,
        borderColor: "#CCC"
    },
    botoes:{
        flexDirection: "row",    
    },
    textoConcluido: {
        color: "green",
        textDecorationLine: "underline"
    }
});

export default Lista;