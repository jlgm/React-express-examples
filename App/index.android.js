import React, { Component } from 'react'
import { AppRegistry, View, Text, StyleSheet} from 'react-native'

class Counter extends Component {

    state = {count: 0}

    componentDidMount() {
        setInterval(() => {
            this.setState({count: this.state.count + 1})
        }, 1000)
    }

    render() {
        const {count} = this.state
        const {color, size} = this.props

        return (
            <Text style = {{color, fontSize: size, alignSelf: 'center'}}>
             {count}
            </Text>
        )
    }
}

class App extends Component {
    render() {
        return (
            <View style={styles.container}>
             <View style={styles.box}>
              <Counter style={styles.display} color={"green"} size={55}/>
             </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    box: {
        flex: 2,
        backgroundColor: 'skyblue',
        borderWidth: 6,
        borderColor: 'steelblue',
        borderRadius: 10,
    },
    display: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    }
})

AppRegistry.registerComponent('App', () => App)
