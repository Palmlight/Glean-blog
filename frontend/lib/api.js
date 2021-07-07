import { defaults } from "./constants"

export function getStrapiURL(path = "") {
  return `${defaults.baseUrl || "http://localhost:1337"}${path}`
}

// Helper to make GET requests to Strapi
export async function fetchAPI(path) {
  const requestUrl = getStrapiURL(path)
  const response = await fetch(requestUrl)
  const data = await response.json()
  return data
}
