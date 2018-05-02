import React from 'react';
import ReactDOM from 'react-dom';
import Popover from 'material-ui/Popover';
import { MuiThemeProvider } from 'material-ui/styles';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import {connect} from 'react-redux';
import getListId from '../../container/getListId';

const setStateToProps = (state,ownProps) => {
    return {
            lists: state.TrelloReducer.trellolist,
            open:ownProps.open,
            anchorEl:ownProps.anchorEl
           };
}

class connectedMovePopOver extends React.Component{
    
    constructor(props){
        super(props);
        this.state={open:false,anchorEl:null};
        this.handleMenuClick=this.handleMenuClick.bind(this);
    }
    componentWillUpdate(){
       this.state.open=this.props.open;
       this.state.anchorEl=this.props.anchorEl;
    }
    handleMenuClick(event){
        let targetId=getListId(this.props.lists,event.target.textContent);
        this.props.MenuClick(targetId);
        this.setState({open:false});
    }
    render(){
        console.log(this.state);
        return(
            <MuiThemeProvider>
                            <Popover
                                    open={this.state.open}
                                    anchorEl={this.state.anchorEl}
                                    anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
                                    targetOrigin={{horizontal: 'left', vertical: 'top'}}
                                    onRequestClose={this.props.closePopOver()}
                                    >
                                    <Menu style={{backgroundColor:'yellow',color: 'white'}}>
                                        {
                                            this.props.lists.map((list,index)=>
    
                                                                            <MenuItem 
                                                                                key={index} 
                                                                                primaryText={list.title} 
                                                                                onClick={this.handleMenuClick} 
                                                                            />
                                                                    )
                                        }
                                    </Menu>
                            </Popover>
            </MuiThemeProvider>
        )
    }
}

const MovePopOver = connect(setStateToProps)(connectedMovePopOver);
export default MovePopOver;