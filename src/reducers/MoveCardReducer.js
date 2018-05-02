
const MoveReducer = (state,action)=>{
    switch(action.type){
        case "MOVECARD":
            return {...state,cards:state.cards.map(card=>(card.id===action.id)?{...card,parent:action.parent}:card)};
        default:
            return state;
    }
}

export default MoveReducer;