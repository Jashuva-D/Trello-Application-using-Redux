
const UpdateReducer = (state,action) => {
    switch(action.type){
        case "UPDATETITLE":
            return {...state,trellolist:state.trellolist.map(list=>(list.id===action.target)?{...list,title:action.newTitle}:list)};
        default:
            return state;
    }
}