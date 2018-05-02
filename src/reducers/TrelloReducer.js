
let initialState={
    trellolist:[],
    cards:[]
};

const TrelloReducer = (state=initialState,action) => {
    switch(action.type){
        case "ADDLIST":
                return {...state,trellolist:[...state.trellolist,{id:action.id,title:action.title}]}
        case "ADDCARD":
                return {...state,cards:[...state.cards,{id:action.id,task:action.task,parent:action.parent}]};
        case "MOVECARD":
                return {...state,cards:state.cards.map(card=>(card.id===action.card)?{...card,parent:action.destination}:card)}
        case "UPDATETITLE":
                return {...state,trellolist:state.trellolist.map(list=>(list.id===action.target)?{...list,title:action.newTitle}:list)};
        case "UPDATECARD":
                return {...state,cards:state.cards.map(card=>(card.id===action.card)?{...card,task:action.newValue}:card)};
        case "DELETECARD":
                return {...state,cards:state.cards.filter(card=>card.id!==action.card)};
        default:
            return state;
    };
}

export default TrelloReducer;