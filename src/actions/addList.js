let listId=2;

export const addList = title => ({
    type: "ADDLIST",
    id:listId++,
    title:title
})

export default addList;