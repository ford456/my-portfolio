

export async function backendFetch(endpoint, options = {}) {
  
  const baseURL =
    process.env.BACKEND_API_URL || "http://localhost:3001";

  return fetch(
    `${baseURL}${endpoint}`,
    {
      ...options,
      headers: {
        ...options.headers,
        Authorization: `Bearer ${process.env.BACKEND_API_KEY}`,
      },
    }
  );
}