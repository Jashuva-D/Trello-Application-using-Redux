
const updateTitle = (targetid,newTitle) => ({
    type: "UPDATETITLE",
    target:targetid,
    newTitle: newTitle

});

export default updateTitle;