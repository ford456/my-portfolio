import HomeClient from "./HomeClient";

// ปกติ / ถูก redirect ไป /home ใน next.config.mjs ก่อนถึงหน้านี้
// ไฟล์นี้มีไว้ให้ root route มีหน้าจริง และชี้ canonical ไปที่ /home
export const metadata = {
    alternates: {
        canonical: "/home",
    },
};

export default function RootPage() {
    return <HomeClient />;
}
