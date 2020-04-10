export const repository = {
  saveTodolists(todolists) {
    this._save(todolists, 'todolists')
  },

  getTodolists() {
    //this._get('todolists')
    let stateAsString = localStorage.getItem('todolists' );
    if (stateAsString != null) {
      let state = JSON.parse(stateAsString);
      return state
    }
    return null
  },

  saveTasks(tasks, todolistsId) {
    this._save(tasks, 'out-state-' + todolistsId)
  },

  getTasks(todolistsId) {
    // this._get('out-state-' + id)
    let stateAsString = localStorage.getItem('out-state-' + todolistsId );
    if (stateAsString != null) {
      let state = JSON.parse(stateAsString);
      return state
    }
    return null
  },

  _save(data, key) {
    let stateAsString = JSON.stringify(data);
    localStorage.setItem(key, stateAsString)
  },
  _get(key) {
    let stateAsString = localStorage.getItem(key);
    if (stateAsString != null) {
      let state = JSON.parse(stateAsString);
      return state
    }
    return null
  },
};