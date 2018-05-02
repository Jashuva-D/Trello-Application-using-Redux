import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider } from 'material-ui/styles';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import {List, ListItem} from 'material-ui/List';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';
import Avatar from 'material-ui/Avatar';
import FlatButton from 'material-ui/FlatButton';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MovePopOver from './MovePopOver';
import {connect} from 'react-redux';
import moveCard from '../../actions/moveCard';
import updateCard from '../../actions/updateCard';
import deleteCard from '../../actions/deleteCard';


const mapDispatchToProps = dispatch => {
    return {
        moveCard: (cardId,parentId) => dispatch(moveCard(cardId,parentId)),
        updateCard:(cardId,newValue) => dispatch(updateCard(cardId,newValue)),
        deleteCard: (cardId) => dispatch(deleteCard(cardId))
    }
}

class connectedTrelleCard extends React.Component{
    
    constructor(props){
        super(props);

        this.state={OpenPopOver: false,update:false,value:""}

        this.handleMoveClick=this.handleMoveClick.bind(this);
        this.handleMoveItem=this.handleMoveItem.bind(this);
        this.handleUpdate=this.handleUpdate.bind(this);
        this.saveUpdate=this.saveUpdate.bind(this);
        this.handleInput=this.handleInput.bind(this);
        this.handleDelete=this.handleDelete.bind(this);
        this.closePopOver=this.closePopOver.bind(this);
    }
    handleDelete(){
        this.props.deleteCard(this.props.id);
    }
    handleInput(event){
        this.setState({update:true,value: event.target.value})
    }
    handleUpdate(){
        this.setState({update: true})
    }
    componentWillMount(){
        this.state.value=this.props.data;
    }
    handleMoveClick(event){
        this.state.OpenPopOver=true;
        this.state.anchorEl=event.currentTarget;
        this.setState({OpenPopOver: true,anchorEl:event.currentTarget});
    }
    handleMoveItem(targetListid){
        this.props.moveCard(this.props.id,targetListid);
        
    }
    closePopOver(){
        this.setState({OpenPopOver:false,anchorEl:null})
    }
    saveUpdate(){
       this.props.updateCard(this.props.id,this.state.value);
        this.setState({update: false})
    }
    render(){
        const inputStyle={
            margin: 0,
            fontSize: "18px",
            lineHeight: "18px",
            padding: "5px",
            border: "1px solid #ddd",
            background: "#fff",
            borderRadius: "6px",
            fontFamily: "Lato, sans-serif",
            color: "#888"
        }
        const ListItemStyle={
            border: "1px solid #ddd ",
            borderRadius: "10px",
            padding:"0px"
        }
        var update=this.state.update;
        if(!update){
            return (
                <ListItem style={ListItemStyle} primaryText={this.props.data} 
                          leftAvatar={
                                        <Avatar icon={<IconMenu
                                                        iconButtonElement={<IconButton><Menu /></IconButton>}
                                                        >
                                                            <MenuItem primaryText="Edit" onClick={this.handleUpdate}/>
                                                            <MenuItem primaryText="Delete" onClick={this.handleDelete}/>
                                                        </IconMenu>
                                                    }
                                                size={30}
                                        />
                            }
                                     
                         rightIcon={<ArrowDropRight onClick={this.handleMoveClick}/>}
                        
                >
                <MovePopOver 
                    open={this.state.OpenPopOver}
                    anchorEl={this.state.anchorEl}
                    MenuClick={this.handleMoveItem}
                    closePopOver={this.closePopOver}
                />
                </ListItem>
            )
        }
        else{
            return (
                <ListItem>
                    <input style={inputStyle} value={this.state.value} onChange={this.handleInput}/>
                    <FlatButton label='save' onClick={this.saveUpdate} />
                </ListItem>
            )
        }
        
    }
}

const TrelleCard= connect(null,mapDispatchToProps)(connectedTrelleCard);
export default TrelleCard;