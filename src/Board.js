import React, {Component} from 'react'
import Note from './Note'
class Board extends Component {
    constructor(props){
        super(props)
        this.state = {
            notes: [
                {
                    id: 33,
                    note: "Call Lisa"
                },
                {
                    id: 34,
                    note: "email Evony"
                }
            ]
        }
    }
    render() {
        return(
            <div className ="board">
                <Note></Note>
            </div>
        )
    }
}

export default Board