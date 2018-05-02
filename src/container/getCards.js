
const getCards=(todos,parentId) => {
    return todos.filter(card=>card.parent==parentId);
}

export default getCards;