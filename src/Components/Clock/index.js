import React from 'react';
import { setInterval, clearInterval} from 'timers';

export default class Clock extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            dateTime: new Date(),
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                dateTime: new Date()
            })
        }, 1000)
    }

    // componentDidUpdate() {
    //     console.log(this.state)
    // }

    componentWillUnmount() {
        console.log('component will unmount')
    }
    render() {
        return(
            <span>{this.state.dateTime.toLocaleTimeString()}</span>
        )
    }
}