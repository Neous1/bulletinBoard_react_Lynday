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
                },
                {
                    id: 35,
                    note: "Order Printer ink"
                }
            ]
        }
        this.eachNote = this.eachNote.bind(this)
    }

    update(newText, i){
        console.log('updating item at index', i, newText)
        this.setState(prevState =>({
            notes: prevState.note.map(
                note =>(note.id !== i) ? note: {...note, note: newText}
            )
        }))
    }
    eachNote(note, i){
        return(
            <Note key={i}
                index ={i}>
                {note.note}
            </Note>
        )
    }
    render() {
        return(
            <div className ="board">
                {this.state.notes.map(this.eachNote)}
            </div>
        )
    }
}

export default Board