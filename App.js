import React from 'react';

import { StyleSheet, Text, View, Switch } from 'react-native';

import Menu from './assets/Componentes/Menu';
import MostraTodos from './assets/Componentes/MostraTodos';
import Lista from './assets/Componentes/Lista';
import Cadastro from './assets/Componentes/Cadastro';

export default function App() {

    const banco = [
        { id: 1, titulo: "Lavar a louça", status: false },
        { id: 2, titulo: "Limpar a casa", status: false },
        { id: 3, titulo: "Estudar React", status: true }
    ];

    const [ tarefas, alteraTarefas ] = React.useState( banco );
    const [ exibeModal, alteraExibeModal ] = React.useState( false );
    const [ exibeTodos, alteraExibeTodos ] = React.useState( true );

    /*
    const buscaTodos = () => {
    }
    */

    const insere = ( tarefa ) => {
        // axios.post
        // buscaTodos()
        alteraTarefas( [ ...tarefas, tarefa ] );
    }

    const altera = ( id ) => {
        const novas_tarefas = tarefas.map( t => {
            if( t.id == id ){
                t.status = !t.status;
            }
            return t;
        })

        alteraTarefas( novas_tarefas );

    }

    const remove = ( id ) => {
        // axios.delete()
        // buscaTodos()
        const novas_tarefas = tarefas.filter( t => {
            if( t.id != id ){
                return t;
            }
        })

        alteraTarefas( novas_tarefas );

    }

    return (
        <View>

            <Menu alteraExibeModal={alteraExibeModal} />
            <MostraTodos />

            <View style={e.containerLista} >
                <Lista exibeTodos={exibeTodos} altera={altera} remove={remove} tarefas={tarefas} />           
            </View>

            <Cadastro insere={insere} exibeModal={exibeModal} alteraExibeModal={alteraExibeModal} />

        </View>
    );
}

const e = StyleSheet.create({
    containerLista: {
        padding: 15
    }
});