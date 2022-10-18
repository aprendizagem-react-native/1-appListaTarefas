import React from 'react';

import { StyleSheet, View, Text, Switch } from 'react-native';

const MostraTodos = () => {
    return(
        <View style={ e.container } >
            <Text style={ e.switch }> Mostrar Todos </Text>
            <Switch onValueChange={  } value={false} />
        </View>     
    );
}

const e = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
        marginTop: 20,
        marginRight: 20
    }
});

export default MostraTodos;