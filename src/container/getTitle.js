
const getTitle = (list,id) => {
    const title=list.filter(list => list.id===id);
    return title[0].title;
}

export default getTitle;