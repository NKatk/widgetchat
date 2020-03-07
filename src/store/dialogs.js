export default store => {
  store.on('@init', () => ({ dialogs: [] }));
  store.on('addDialog', ({ dialogs }, data) => ({
    dialogs: dialogs.concat([data]),
  }));
  store.on('addMsg', ({ dialogs }, { index, data }) => {
    const dialogsC = [...dialogs];
    dialogsC[index].msgs.push(data);
    return {
      dialogs: dialogsC,
    };
  });
};
