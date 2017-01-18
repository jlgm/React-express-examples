import React, { Component } from 'react'
import { AppRegistry, View, Text, StyleSheet} from 'react-native'

class Counter extends Component {
    state = {count: 0}


    componentDidMount() {
        setInterval(() => {
            this.setState({count: this.state.count + 1})
        }, 500)
    }

    render() {
        const {count} = this.state
        const {color, size} = this.props

        return (
            <Text style = {{color, fontSize: size}}>
             {count}
            </Text>
        )
    }
}
class App extends Component {
    render() {
        return (
            <View style={styles.container}>
             <Counter color = {'lightblue'} size={16}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

AppRegistry.registerComponent('App', () => App)
