import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'

Vue.use(Vuex)

const state = {
  notes: [],
  activeNote: {}
}

const mutations = {
  ADD_NOTE (state) {
    const newNote = {
      text: 'New note',
      favorite: false
    }
    state.notes.push(newNote)
    state.activeNote = newNote
  },

  EDIT_NOTE (state, text) {
    state.activeNote.text = text
  },

  DELETE_NOTE (state) {
    state.notes.splice(state.notes.indexOf(state.activeNote), 1)
    state.activeNote = state.notes[0] || {}
  },

  TOGGLE_FAVORITE (state) {
    state.activeNote.favorite = !state.activeNote.favorite
  },

  SET_ACTIVE_NOTE (state, note) {
    state.activeNote = note
  }
}

const getters = {
  notes: state => state.notes,
  activeNote: state => state.activeNote,
  activeNoteText: state => state.activeNote.text
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
