import React from 'react';
import TrelleList from './TrelleList/TrelleList.js';
import  FlatButton  from 'material-ui/FlatButton';
import { MuiThemeProvider } from 'material-ui/styles';
import {connect} from 'react-redux';
import addList from '../actions/addList';



const setStateToProps= state => {
    console.log(state);
    return {trellolist: state.TrelloReducer.trellolist};
}
const mapDispatchToProps = dispatch => {
    return {
        addList: title=>dispatch(addList(title))
    }
}
class connectedTrelleApp extends React.Component{
    constructor(props){
        super(props);
        this.handleAddList=this.handleAddList.bind(this);
    }
    handleAddList(){
        var title=prompt("Enter Title");
        this.props.addList(title);
        
    }
    render(){
        const trellolist=this.props.trellolist;
        const divStyle = {
            margin: '20px',
            border: '1px solid #ddd',
            display: 'inline-block',
            padding: '0px',
            height:'100%',
            borderRadius: '5px',
            backgroundColor:'white',
            verticalAlign: 'top'
        };
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
        }
            return <MuiThemeProvider><div>
            {trellolist.map((list,index) => <TrelleList key={index} id={list.id} />)}
            <div style={divStyle}>
            <FlatButton label="Add List" secondary={true} onClick={this.handleAddList} />
            </div>
        </div>
        </MuiThemeProvider>
        
    }
}

const TrelleApp = connect(setStateToProps,mapDispatchToProps)(connectedTrelleApp)
export default TrelleApp;