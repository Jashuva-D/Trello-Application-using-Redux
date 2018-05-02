
const getListId = (lists,text) => {
    let reqlist=lists.filter(list=>list.title===text);
    return reqlist[0].id;

}

export default getListId;