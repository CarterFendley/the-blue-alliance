import { TOGGLE_CHAT_SIDEBAR_VISIBILITY, TOGGLE_HASHTAG_SIDEBAR_VISIBILITY } from '../constants/ActionTypes'

const defaultState = {
  hashtagSidebar: false,
  chatSidebar: false,
  tickerSidebar: false
}

const toggleChatSidebarVisibility = (state) => {
  return Object.assign({}, state, {
    chatSidebar: !state.chatSidebar
  })
}

const toggleHashtagSidebarVisibility = (state) => {
  return Object.assign({}, state, {
    hashtagSidebar: !state.hashtagSidebar
  })
}

const visibility = (state = defaultState, action) => {
  switch(action.type) {
    case TOGGLE_CHAT_SIDEBAR_VISIBILITY:
    return toggleChatSidebarVisibility(state)
    case TOGGLE_HASHTAG_SIDEBAR_VISIBILITY:
    return toggleHashtagSidebarVisibility(state)
    default:
    return state
  }
}

export default visibility
