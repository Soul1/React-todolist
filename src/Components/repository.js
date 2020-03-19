export const repository = {
  saveTodolists(todolists) {
    this._save(todolists, 'todolists')
  },

  getTodolists() {
    let stateAsString = localStorage.getItem('todolists');
    if (stateAsString != null) {
      let state = JSON.parse(stateAsString);
      return state
    }
    return null
  },

  saveTasks(tasks, id) {
    this._save(tasks, 'out-state-' + id)
  },

  getTasks(id) {
    let stateAsString = localStorage.getItem('out-state-' + id);
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