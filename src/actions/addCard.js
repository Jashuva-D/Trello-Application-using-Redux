let cardId=0;

const addCard= (parentId,task) => ({
    type : "ADDCARD",
    id: cardId++,
    task: task,
    parent:parentId
})

export default addCard;