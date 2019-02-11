import React, { Component } from 'react'
import './styles.css'

class FormGenerator extends Component {
    state = {
        items: [{id: 1, classNames: ['item']}, {id: 2,classNames: ['item']}, {id: 3, classNames: ['item']}, {id: 4, classNames: ['item']}, {id: 5, classNames: ['item']}, {id: 6, classNames: ['item']}],
        styles: {},
        isPopup: false,
        activeChanged: null
    }

    changeItem = (id) => {
        this.showPopup()
        this.setState({activeChanged: id})
    }

    addRow = () => {
        console.log('gg')
        const { items } = this.state
        const lastItemId = items[items.length-1].id
        const newItems = [...items]
        console.log(newItems)
        for(let i = lastItemId; i < (items.length + 6); i++){
            console.log('step')
            const newItem = {
                id: i+1,
                classNames: ['item']
            }
            newItems.push(newItem)
        }
        console.log(newItems)
        this.setState({items: newItems})
        // console.log(this.state.items)
    }

    showPopup = () => {
        this.setState({isPopup: !this.state.isPopup})
    }
    render() {
        const { items, isPopup } = this.state
        return(
            <div>
                Создание документа 
                <div className='grid'>
                    {items.map((item, i) => (
                            <div key={i} className={item.classNames.join(' ')} onClick={()=>{this.changeItem(item.id)}} >
                                item {item.id}
                            </div>
                        )
                    )}
                    <div className='add-button' onClick={this.addRow}>+</div>
                </div>
                
                {isPopup && (
                    <div>Добавить тип поля</div>
                )}
            </div>
        )
    }
}

export default FormGenerator