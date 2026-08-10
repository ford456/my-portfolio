export async function backendFetch(endpoint, options = {}) {
  return fetch(
    `${process.env.BACKEND_API_URL}${endpoint}`|| "http://localhost:3001",
    {
      ...options,
      headers: {
        ...options.headers,
        Authorization: `Bearer ${process.env.BACKEND_API_KEY}`,
      },
    }
  );
}