const BASE_URL = process.env.REACT_APP_BASE_URL

export const endpoints = {
  LOGIN_API: BASE_URL + "/bx_block_login/login",
  CONTACT_US_API: BASE_URL + "/bx_block_contact/contact",
}

export const courseEndpoints = {
  GET_ALL_COURSE_API: BASE_URL + "/bx_block_event/events",
  COURSE_DETAILS_API: BASE_URL + "/bx_block_event/events",
}
