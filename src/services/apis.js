const BASE_URL = process.env.REACT_APP_BASE_URL

export const endpoints = {
  LOGIN_API: BASE_URL + "/bx_block_login/login",
  CONTACT_US_API: BASE_URL + "/bx_block_contact/contact",
}

export const profileEndpoints = {
  GET_USER_DETAILS_API: BASE_URL + "/bx_block_profile/profiles",
}

export const courseEndpoints = {
  GET_ALL_EVENTS_API: BASE_URL + "/bx_block_event/events",
  EVENTS_DETAILS_API: BASE_URL + "/bx_block_event/events",
}

export const testEndPoints = {
  GET_ALL_TEST_API: BASE_URL + "/bx_block_test/tests",
  GET_ALL_QUESTIONS_API: BASE_URL + "/bx_block_question/questions"
}