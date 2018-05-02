const updateCard = (cardId,newValue) => ({
    type:"UPDATECARD",
    card:cardId,
    newValue:newValue
})

export default updateCard;