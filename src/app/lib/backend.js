

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
        // Next.js ใช้ headers เป็นส่วนหนึ่งของ cache key
        // เลขนี้เปลี่ยนทุกครั้งที่ build/deploy ใหม่ จึงไม่ใช้ cache เก่าจาก deploy ก่อน
        "x-deploy-version": process.env.DEPLOY_VERSION,
      },
    }
  );
}