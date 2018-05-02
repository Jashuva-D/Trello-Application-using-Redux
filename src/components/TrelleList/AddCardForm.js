import React from 'react';
import  FlatButton  from 'material-ui/FlatButton';


class AddCardForm extends React.Component{
    constructor(props){
        super(props);
        this.state={value:""}
        this.handleChange=this.handleChange.bind(this);
        this.handleAddCard=this.handleAddCard.bind(this);
    }
    handleChange(event){
        this.setState({value:event.target.value});
    }
    handleAddCard(event){
        event.preventDefault();
        this.props.addCard(this.state.value);
        this.setState({value:""});
    }
    render(){
        const inputStyle={
            margin: 0,
            fontSize: "18px",
            lineHeight: "18px",
            height: "18px",
            padding: "10px",
            border: "1px solid #ddd",
            background: "#fff",
            borderRadius: "6px",
            fontFamily: "Lato, sans-serif",
            color: "#888"
        };
        return (
            <div>
                <input type="text" style={inputStyle} value={this.state.value} onChange={this.handleChange} />
                <FlatButton label="add" primary={true} onClick={this.handleAddCard} />
            </div>
        )
    }
}

export default AddCardForm;
