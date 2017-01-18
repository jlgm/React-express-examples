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
             <Counter color = {'blue'} size={70}/>
             <Counter color = {'teal'} size={40}/>
             <Counter color = {'lightblue'} size={25}/>
             <Counter color = {'silver'} size={12}/>
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
