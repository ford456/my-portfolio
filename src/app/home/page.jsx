import HomeClient from "../HomeClient";

// หน้าแรกจริงอยู่ที่ /home (/ ถูก redirect มาที่นี่)
export const metadata = {
    alternates: {
        canonical: "/home",
    },
    openGraph: {
        url: "/home",
    },
};

export default function Home() {
    return <HomeClient />;
}
