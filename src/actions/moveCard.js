const moveCard= (card,destination) => ({
    type: "MOVECARD",
    destination: destination,
    card:card
})

export default moveCard;