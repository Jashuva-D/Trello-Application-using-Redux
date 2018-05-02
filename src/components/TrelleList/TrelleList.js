import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider } from 'material-ui/styles';
import {List, ListItem} from 'material-ui/List';
import TrelleCard from '../TrelleCard/TrelleCard';
import  FlatButton  from 'material-ui/FlatButton';
import ListHeader from './ListHeader';
import getCards from '../../container/getCards';
import getTitle from '../../container/getTitle';
import {connect} from 'react-redux';
import addCard from '../../actions/addCard';
import AddCardForm from './AddCardForm';
import updateTitle from '../../actions/updateTitle';

const setStateToProps = (state,ownProps) => {
    return {cardsList: getCards(state.TrelloReducer.cards,ownProps.id),
            title:getTitle(state.TrelloReducer.trellolist,ownProps.id)};
}
const mapDispatchToProps = dispatch => {
    return {
        addCard: (parent,task) => dispatch(addCard(parent,task)),
        headerUpdate: (target,newTitle) => dispatch(updateTitle(target,newTitle))
    }
}

class connectedTrelleList extends React.Component{
    constructor(props){
        super(props);
        this.state={cardsList:[],titleUpdate:false,title:""}

        this.handleAddCard=this.handleAddCard.bind(this);   
        this.handleHeaderUpdate=this.handleHeaderUpdate.bind(this);

    }
    handleHeaderUpdate(newValue){
        this.props.headerUpdate(this.props.id,newValue);
    }
   handleAddCard(task){
       if(task!==""){
        this.props.addCard(this.props.id,task);
       }  
   }
   render(){
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
            };
          return (
                    <MuiThemeProvider>
                    <div style={divStyle}>
                    <List style={{padding:'0px'}}>
                        <ListItem innerDivStyle={{padding: "0px"}}>
                                <ListHeader title={this.props.title} 
                                            update={this.handleHeaderUpdate}/>
                        </ListItem>
                        <ListItem>
                        <List>
                        {
                            this.props.cardsList.map((card,index)=><TrelleCard 
                                                                    key={index}
                                                                    id={card.id}
                                                                    data={card.task} 
                                                                    />
                                                    )
                        }
                        </List>
                        </ListItem>
                        <ListItem>
                        <hr />
                        <AddCardForm addCard={this.handleAddCard} />
                        </ListItem>
                    </List>
                    </div>
                    </MuiThemeProvider>
                )   
    }
}

const TrelleList = connect(setStateToProps,mapDispatchToProps)(connectedTrelleList);
export default TrelleList;