import React from 'react'
import Link from 'next/link';

const ProjectDatas = [
    {
        id: "01",

        title: "All in Design Website  |  Font-end",
        description: "เป็นเว็บไซต์ที่สร้างขึ้นเพื่อแสดงผลงานนิทรรศการแสดงผลงานศิลปนิพนธ์นิสิตระดับชั้นปีที่ 4 สาขาวิชาคอมพิวเตอร์กราฟิกและมัลติมีเดีย คณะเทคโนโลยีสารสนเทศและการสื่อสาร มหาวิทยาลัยพะเยา ประจำปีการศึกษา 2567 เพื่อใช้ในการแสดงผลงานวิจัยในรูปแบบออนไลน์ โดยเนื้อหาภายในจะเป็นที่มา, วัตถุประสงค์และผู้จัดทำผลงานวิจัย ซึ่งมีการจัดหมวดหมู่อย่างเป็นระเบียบให้สะดวกต่อการค้นหาผลงานวิจัย \n \nซึ่งจุดประสงค์ที่จัดทำเว็บไซต์นี้ขึ้นเพื่อเป็นประโยชน์ต่อการศึกษาและการเก็บรวบรวมผลงานวิจัยของนิสิต",
        img1: "/pj/img/all1.jpeg",
        img2: "",
        img3: "",
        video:"",
        tag: {

            tag1: "Font-end",
            tag2: "UI/UX",

        },
        skill: {
            skill1: "Javascript",
        },
        date: "18/03/2025",
        content: (
            <div>
                <div className='pb-15'>
                    <h2 className='cursor-default text-lg md:text-3xl font-medium mb-5 md:mx-2  whitespace-pre-line' >Web<span className='text-blue-500'>site</span> </h2>
                    <hr className='pb-5' />
                    <Link href="https://all-in-design.vercel.app/" target='_blank' className='hover:text-blue-400 hover:underline hover:underline-offset-8 indent-15'> All in Design </Link>
                </div>


            </div>
        )
    },
    {
        id: "02",

        title: "Cats Fusion | Line Sticker Creator",
        description: " เหล่าแมวพันธุ์ผสม V.1 เป็นสติกเกอร์เคลื่อนไหวมีความน่ารัก โดยมีการออกแบบที่เน้นความเป็นเอกลักษณ์ของแมวพันธุ์ผสมสัตว์อื่นๆ ซึ่งสติ๊กเกอร์นี้เหมาะสำหรับในการประยุกต์ใช้ในสถานการณ์ต่างๆ เช่น การขอบคุณ รับทราบ ตอบรับ เป็นต้น",
        img1: "/pj/img/cat-fusion.jpg",

        img2: "",
        img3: "",
        video:"",
        tag: {

            tag1: "Graphic Design",
            tag2: "Motion Graphic",

        },
        skill: {
            skill1: "Adobe Illustrator",
            skill2: "Adobe After Effects",
        },
        date: "07/02/2025",
        content: (
            <div>
                <h3 className='text-4xl text-center font-bold pb-10'> Video</h3>

                <div className='bg-none max-w-4xl mx-auto rounded-4xl overflow-clip'>
                    <video className='w-full h-auto ' controls controlsList="nodownload"
                                    disablePictureInPicture  src='/pj/VD/Vcat-fusion.mp4' />

                </div>
                <div className='pt-15 indent-36'>
                    <Link href="https://store.line.me/stickershop/product/29442743/th" target='_blank' className='hover:text-blue-400 hover:underline hover:underline-offset-8 indent-15'> <span className=' text-green-400'>LINE STORE</span> เหล่าแมวพันธุ์ผสม V.1 </Link>
                </div>
            </div>
        )
    },
    {
        id: "03",

        title: "Apple 3D model",
        description: "",
        img1: "/pj/img/APP.jpg",

        img2: "",
        img3: "",
        video:"",
        tag: {

            tag1: "3D Modeling",


        },
        skill: {
            skill1: "Blender",

        },
        date: "05/02/2025",
        content: (
            <div>
                <div className='bg-none max-w-4xl max-h-1/2 mx-auto rounded-4xl overflow-clip my-8'>
                    
                <iframe className="w-full h-[200px] sm:h-[500px] md:h-[400px] lg:h-[500px] 2xl:h-[320px]" title="wonder" allow="autoplay; fullscreen; xr-spatial-tracking" src="https://sketchfab.com/models/34f9427a9035409dbd29404c5cd6a108/embed?autospin=1&autostart=1&camera=0&ui_theme=dark"> </iframe>
                </div>
                
                <h3 className='text-4xl text-start font-bold py-5'>Website</h3>
                <hr />
                <div className=''>
                    <Link href="https://skfb.ly/p9t7s" target='_blank' className='hover:text-blue-400 hover:underline hover:underline-offset-8 indent-15'> <span className=' text-blue-400'>P_name_F</span> apple - Download Free 3D model by P_name_F (@PnameF) </Link>
                </div>
            </div>
        )
    },
    {
        id: "04",

        title: "White Bubble | Brand Design",
        description: "เป็นการออกแบบโลโก้และแบรนด์ของ White Bubble ซึ่งเป็นผลิตภัณฑ์ทำความสะอาดใบหน้าโดยผลงานวิจัยของนิสิตคณะเภสัชศาสตร์ สาขาวิทยาศาสตร์เครื่องสำอาง มหาวิทยาลัยพะเยา ซึ่งความหมายของแบรนด์จะสื่อถึงความสะอาด นุ่มเหมือนฟองอากาศ",
        img1: "/pj/img/WB/WB-brand1.jpg",

        tag: {

            tag1: "Graphic Design",
            tag2: "Brand Design",


        },
        skill: {
            skill1: "Adobe Illustrator",

        },
        date: "30/01/2025",
        content: (
            <div className='grid grid-cols-3 gap-5 px-5 overflow-clip'>
                <img src="/pj/img/WB/WB-brand2.jpg" className="col-span-3 rounded-xl 2xl:rounded-4xl w-full h-full" />
                <img src="/pj/img/WB/WB-brand5.jpg" className="rounded-xl 2xl:rounded-4xl w-full h-auto" />
                <img src="/pj/img/WB/WB-brand4.jpg" className="rounded-xl 2xl:rounded-4xl w-full h-auto" />
                <img src="/pj/img/WB/WB-brand3.jpg" className="rounded-xl 2xl:rounded-4xl w-full h-auto" />
            </div>
        )
    },
    {
        id: "05",

        title: "เรามารู้จัก Introvert & Extrovert กันเถอะ | Thesis Project",
        description: "เป็นผลงานวิจัยเกี่ยวกับ Introvert & Extrovert ซึ่งออกแบบให้เป็นภาพกราฟิกเคลื่อนไหวที่ดูน่าสนุกเพลิดเพลินพร้อมกับเสียงบรรยายจาก AI อธิบายเนื้อหาของบุคลิกภาพที่ซับซ้อนของมนุษย์ โดยผลงานวิจัยนี้จะช่วยเสริมสร้างความเข้าใจในตัวเองและคนรอบข้าง เพื่อให้สามารถปรับตัวเข้ากับสังคมได้ดีขึ้นหรือสามารถอยู่ร่วมกันได้อย่างมีความสุข",
        img1: "/pj/img/THESIS.png",
        img2: "",
        img3: "",
        tag: {

            tag1: "Graphic Design",
            tag2: "Motion Graphic",


        },
        skill: {
            skill1: "Adobe Illustrator",
            skill2: "Adobe After Effects",

        },
        date: "15/10/2024",
        content: (
            <div className=''>
                <h3 className='text-4xl text-center font-bold pb-10'> Video</h3>

                <div className='bg-none max-w-4xl max-h-1/2 mx-auto rounded-4xl overflow-clip'>

                    <iframe className='w-full h-[300px] sm:h-[500px] md:h-[400px] lg:h-[500px] 2xl:h-[600px]' src="https://www.youtube.com/embed/9oi3IvZRR80?si=KLwQgqB4f9moMA75" title="YouTube video player" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                </div>
            </div>
        )
    },
    {
        id: "06",

        title: "PnameF Twitch Elements&Scene Theme | Twitch",
        description: "เป็นการออกแบบธีมสำหรับ Twitch ของ PnameF เพื่อใช้ประกอบการสตรีมเกม โดยมีการออกแบบที่เน้นความเป็นเอกลักษณ์ของ PnameF ที่เป็นมนุษย์ครึ่งแมว ดังนั้นจึงเลือกแมวมาเป็นองค์ประกอบหลักของการทำและธีมที่ได้กำหนดไว้นั้นเป็นธีมร้านขนมคาเฟ่ เพราะจะสื่อถึงร้านที่ทุกคนเข้ามาพักผ่อนอยู่ร่วมกับน้องแมวในทุกวัน",
        img1: "/pj/img/PF.png",
        img2: "",
        img3: "",
        tag: {

            tag1: "Motion Graphic",
            tag2: "Drawing",


        },
        skill: {
            skill1: "Procreate",
            skill2: "Adobe After Effects",

        },
        date: "23/03/2024",
        content: (
            <div className=''>
                <h3 className='text-4xl text-center font-bold pb-10'> Video</h3>

                <div className='bg-none max-w-4xl max-h-1/2 mx-auto rounded-4xl overflow-clip'>

                    <iframe className='w-full h-[300px] sm:h-[500px] md:h-[400px] lg:h-[500px] 2xl:h-[600px]' src="https://www.youtube.com/embed/CzHYhPe_i9E?si=Tt082yT1c0r8wknA" title="YouTube video player" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  ></iframe>
                </div>
            </div>
        )
    },
    // {
    //     id: "07",

    //     title: "The CatBeLone Game | Unofficial Teaser",
    //     description: "เป็นผลงานไฟนอลโปรเจกต์รายวิชา Game Design ซึ่ง The CatBeLone เป็นเกมที่ออกแบบโดยเน้นความเป็นเอกลักษณ์ของเมืองบาบีโลนหรือเมืองโอเอซิสทะเลทรายแห่งเทพผู้มีพลังวิเศษ สถาปัตยกรรมแบบยุคเมโซโปเตเมีย ซึ่งตัวละครหลักเ)้นชายหนุ่มที่มาจากอนาคตแต่ได้ย้อนเวลามาในอดีต ด้วยการย้อนเวลามานั้นจะต้องถูกคำสาปให้กลายร่างเป็นแมวสีดำออกผจญภัยในเมืองเพื่อไปต่อสู้กับเทพเจ้าต่างๆเพื่อถอนคำสาปและกลับไปยังอนาคตที่จากมา",
    //     img1: "/pj/img/Cat-belone.png",
    //     img2: "",
    //     img3: "",
    //     tag: {

    //         tag1: "Game Design",
    //         tag2: "3D Modeling",


    //     },
    //     skill: {
    //         skill1: "Adobe Premiere Pro",
    //         skill2: "Adobe After Effects",
    //         skill3: "Maya",

    //     },
    //     date: "14/10/2023",
    //     content: (
    //         <div className=''>
    //             <h3 className='text-4xl text-center font-bold pb-10'> Video</h3>

    //             <div className='bg-none max-w-4xl max-h-1/2 mx-auto rounded-4xl overflow-clip'>

    //             <iframe className='w-full h-[300px] sm:h-[500px] md:h-[400px] lg:h-[500px] 2xl:h-[600px]' src="https://www.youtube.com/embed/KXi5exX3n00?si=3w8-z_7btTtZELm5" title="YouTube video player"  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  ></iframe>
    //             </div>
    //             <h4 className='text-4xl text-center font-bold pb-5 pt-10' >Theme & Concept</h4>
    //             <div className='grid grid-cols-3 gap-5 px-5 '>

    //             <img src="/pj/img/CatBeLone/TheCatBeloneGame_Page_01.png" className=" w-full h-auto rounded-lg 2xl:rounded-3xl" />
    //             <img src="/pj/img/CatBeLone/TheCatBeloneGame_Page_02.png" className=" w-full h-auto rounded-lg 2xl:rounded-3xl" />
    //             <img src="/pj/img/CatBeLone/TheCatBeloneGame_Page_03.png" className=" w-full h-auto rounded-lg 2xl:rounded-3xl" />
    //             <img src="/pj/img/CatBeLone/TheCatBeloneGame_Page_04.png" className=" w-full h-auto rounded-lg 2xl:rounded-3xl" />
    //             <img src="/pj/img/CatBeLone/TheCatBeloneGame_Page_05.png" className=" w-full h-auto rounded-lg 2xl:rounded-3xl" />
    //             <img src="/pj/img/CatBeLone/TheCatBeloneGame_Page_06.png" className=" w-full h-auto rounded-lg 2xl:rounded-3xl" />
    //             <img src="/pj/img/CatBeLone/TheCatBeloneGame_Page_07.png" className=" w-full h-auto rounded-lg 2xl:rounded-3xl" />
    //             <img src="/pj/img/CatBeLone/TheCatBeloneGame_Page_08.png" className=" w-full h-auto rounded-lg 2xl:rounded-3xl" />
    //             <img src="/pj/img/CatBeLone/TheCatBeloneGame_Page_09.png" className=" w-full h-auto rounded-lg 2xl:rounded-3xl" />
    //             <img src="/pj/img/CatBeLone/TheCatBeloneGame_Page_10.png" className=" w-full h-auto rounded-lg 2xl:rounded-3xl" />
    //             <img src="/pj/img/CatBeLone/TheCatBeloneGame_Page_11.png" className=" w-full h-auto rounded-lg 2xl:rounded-3xl" />
    //         </div>
    //         </div>
    //     )
    // },
    {
        id: "08",

        title: "The CS | Short film Teaser",
        description: "เป็นผลงานไฟนอลโปรเจกต์ในรายวิชา Visual Effects ซึ่งการทำตัวอย่างภาพยนตร์สั้นเกี่ยวกับโรงเรียนแห่งหนึ่งที่มีคลาสเรียนที่มีชื่อว่า CS โดยห้องเรียนนี้มีพลังพิเศษแฝงในตัวนักเรียนทุกคนที่อยู่ในคลาสนี้ และไขปริศษาต่าง ๆ เกี่ยวกับโรงเรียนแห่งนี้  \n\n ซึ่งในโปรเจกต์นี้ได้รับหน้าที่เป็นคนตัดต่อและทำเอฟเฟกต์ต่าง ๆ",
        img1: "/pj/img/TheCSPoster.jpg",
        img2: "",
        img3: "",
        tag: {

            tag1: "Video Editor",
            tag2: "Visual Effect",


        },
        skill: {
            skill1: "Adobe Premiere Pro",
            skill2: "Adobe After Effects",


        },
        date: "03/10/2023",
        content: (
            <div className=''>
                <div className='flex flex-col justify-center items-center my-10'>
                    <img src="/pj/img/TheCS.png" className="rounded-xl 2xl:rounded-4xl w-1/2 h-auto" />
                </div>

                <h3 className='text-4xl text-center font-bold pb-10'> Video</h3>

                <div className='bg-none max-w-4xl max-h-1/2 mx-auto rounded-4xl overflow-clip'>

                    <iframe className='w-full h-[300px] sm:h-[500px] md:h-[400px] lg:h-[500px] 2xl:h-[600px]' src="https://www.youtube.com/embed/JTlNCjkpKBk?si=rxag8v-Mnp6cPNkp" title="YouTube video player" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  ></iframe>
                </div>
            </div>
        )
    },
    {
        id: "09",

        title: "Halloween Coloring for kind book",
        description: "เป็นการใช้ AI generated ในโปรแกรม Adobe illustrator ในการ Generate ภาพต่างๆ นำมาจัดทำเป็นหนังสือวาดภาพระบายสีสำหรับเด็กและวางจำหน่ายบนเว็บไซ์ Amezon",
        img1: "/pj/img/Book01.png",
        img2: "",
        img3: "",
        tag: {

            tag1: "Graphic Design",



        },
        skill: {
            skill1: "Adobe Illustrator",



        },
        date: "05/08/2023",
        /*content: (
            <div className=''>
                <h3 className='text-4xl text-center font-bold pb-10'> Video</h3>

                <div className='bg-none max-w-4xl max-h-1/2 mx-auto rounded-4xl overflow-clip'>
                    
                <iframe className='w-full h-[300px] sm:h-[500px] md:h-[400px] lg:h-[500px] 2xl:h-[600px]' src="https://www.youtube.com/embed/JTlNCjkpKBk?si=rxag8v-Mnp6cPNkp" title="YouTube video player"  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  ></iframe>
                </div>
            </div>
        )*/
    },
    {
        id: "10",

        title: "PnameF Shirt Design | Twitch: P_name_F",
        description: "เป็นการออกแบบเสื้อเพื่อวางจำหน่ายบนสตรีม Twitch ช่องของ P_name_F เพื่อหาช่องทางรายได้จากการขายสินค้าให้กับผู้ติดตามที่ต้องการสะสมผลงานของ P_name_F",
        img1: "/pj/img/PF/PF-t01.png",

        tag: {

            tag1: "Drawing",
            tag2: "Graphic Design",


        },
        skill: {
            skill1: "Adobe Photoshop",



        },
        date: "08/05/2023",
        content: (
            <div className='grid grid-cols-3 gap-5 px-5'>
                <img src="/pj/img/PF/PF-t02.jpg" className="col-span-2 row-span-2 object-cover w-full h-full rounded-lg 2xl:rounded-3xl" />
                <img src="/pj/img/PF/PF-t07.jpg" className=" w-full h-auto rounded-lg 2xl:rounded-3xl" />
                <img src="/pj/img/PF/PF-t03.jpg" className=" w-full h-auto rounded-lg 2xl:rounded-3xl" />
                <img src="/pj/img/PF/PF-t04.png" className=" w-full h-auto rounded-lg 2xl:rounded-3xl" />
                <img src="/pj/img/PF/PF-t05.png" className=" w-full h-auto rounded-lg 2xl:rounded-3xl" />
                <img src="/pj/img/PF/PF-t06.png" className=" w-full h-auto rounded-lg 2xl:rounded-3xl" />
            </div>
        )
    },
    {
        id: "12",
        title: "LineGame | Shortfilm",
        description: "เป็นผลงานโปรเจกต์ในรายวิชา ดิจิทัลวีดิโอ ซึ่งจัดทำหนังสั้น เรื่อง LineGame โดยมีเรื่องย่อดังนี้",
        img1: "/pj/img/LineGamePoster.jpeg",

        tag: {

            tag1: "Video Editor",
            tag2: "Camera Man",
            tag3: "Graphic Design",
            tag4: "Photography",



        },
        skill: {
            skill1: "Adobe Premiere Pro",
            skill2: "Adobe Photoshop",
            skill3: "Adobe Illustrator",

        },
        date: "08/03/2023",
        content: (
            <div className=''>
                <div className='flex flex-col justify-center items-center my-10'>
                    <img src="/pj/img/LineGame.png" className="rounded-xl 2xl:rounded-4xl w-1/2 h-auto" />
                </div>
                <h3 className='text-4xl text-start font-bold py-10'> เรื่องย่อ</h3>
                <hr className='pb-5' />
                <p className='indent-15 pb-10'>เป็นเรื่องราวของเอกที่ค่อนข้างเป็นคนที่ติดเกมจนไม่เอาเวลาไปสนใจเพื่อนๆ แม้กระทั่งการเรียนของเขาก็ไม่ค่อยจะสนใจสักเท่าไหร่ ข้อความของเพื่อนๆที่ส่งไปในแชทกลุ่มเขาก็ไม่สนใจ เช้าวันสอบเขากลับเข้าห้องสอบสาย ทำข้อสอบไม่ทันแล้วยังทำไม่ได้อีก อาจารย์จึงให้งานเขามาทำ แต่ก็เป็นเพื่อนๆในกลุ่มที่ช่วยเขาทำจนเสร็จ เพื่อนๆก็ได้นัดกันไปเที่ยวในวันเสาร์ ในวันนั้นเอกก็เล่นเกมจนไม่ได้เอาเวลาไปเที่ยวกับเพื่อน ทำให้เอกคิดอะไรได้บ้างอย่าง เอกจะทำอย่างไรต่อไป โปรดติดตามเรื่อง “เส้นเกม”</p>
                <h3 className='text-4xl text-center  font-bold pb-10'> Video</h3>

                <div className='bg-none max-w-4xl max-h-1/2 mx-auto rounded-4xl overflow-clip'>

                    <iframe className='w-full h-[300px] sm:h-[500px] md:h-[400px] lg:h-[500px] 2xl:h-[600px]' src="https://www.youtube.com/embed/WXUhOURXPi8?si=hFfmN6MJOxaajdDz" title="YouTube video player" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  ></iframe>
                </div>
            </div>
        )
    },
    // {
    //     id: "11",
    //     title: "LineGame | Poster Sortfilm ",
    //     description: " ",
    //     img1: "/pj/img/LineGamePoster.jpeg",

    //     tag: {

    //         tag1: "Graphic Design",
    //         tag2: "Photography",


    //     },
    //     skill: {
    //         skill1: "Adobe Photoshop",
    //         skill2: "Adobe Illustrator",


    //     },
    //     date: "08/03/2023",
    //     /*content: (
    //         <div className=''>
    //             <h3 className='text-4xl text-center font-bold pb-10'> Video</h3>

    //             <div className='bg-none max-w-4xl max-h-1/2 mx-auto rounded-4xl overflow-clip'>

    //             <iframe className='w-full h-[300px] sm:h-[500px] md:h-[400px] lg:h-[500px] 2xl:h-[600px]' src="https://www.youtube.com/embed/JTlNCjkpKBk?si=rxag8v-Mnp6cPNkp" title="YouTube video player"  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  ></iframe>
    //             </div>
    //         </div>
    //     )*/
    // },
    {
        id: "13",
        title: "ครั้งสุดท้าย MV",
        description: "เป็นอีกหนึ่งผลงานโปรเจกต์ในรายวิชา ดิจิทัลวีดิโอ โดยให้จัดทำ Music Video ซึ่งจะต้องจัดทำทั้งทำนองและเนื้อร้องด้วยตนเองจากนั้นมาเลือกภายในกลุ่มให้เหลือเพียง 1 บทเพลงเพื่อนำมาทำ MV ต่อไป จึงได้ออกมาเป็น Music Video ที่ชื่อว่า ครั้งสุดท้าย",
        img1: "/pj/img/ครั้งสุดท้าย.png",

        tag: {

            tag1: "Video Editor",
            tag2: "Camera Man",


        },
        skill: {
            skill1: "Adobe Premiere Pro",



        },
        date: "30/09/2022",
        content: (
            <div className=''>
                <h3 className='text-4xl text-center font-bold pb-10'> Video</h3>

                <div className='bg-none max-w-4xl max-h-1/2 mx-auto rounded-4xl overflow-clip'>

                    <iframe className='w-full h-[300px] sm:h-[500px] md:h-[400px] lg:h-[500px] 2xl:h-[600px]' src="https://www.youtube.com/embed/5XKtcPqrRi0?si=ybfA-lCZ_i9gtB1B" title="YouTube video player" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  ></iframe>
                </div>
            </div>
        )
    },
    {
        id: "14",
        title: "BlueCat | Line Theme",
        description: "เป็นผลงานธีมไลน์ที่ออกแบบให้เหมือนการวาดสีชอล์กที่เขียนอยู่บนกระดานดำ โดยจุดประสงค์เพื่อวางจำหน่ายหารายได้เสริมช่วงปิดเทอมและนำมาใช้เองเนื่องด้วยชอบธีมที่เป็นสีดำไม่แสบตาขณะจ้องหน้าจอนาน ๆ และไม่มีธีมที่ถูกใจ",
        img1: "/pj/img/Cattheme.png",

        tag: {

            tag1: "Graphic Design",
            tag2: "Drawing",


        },
        skill: {
            skill1: "Procreate",
            skill2: "Adobe Photoshop",



        },
        date: "10/06/2022",
        /*content: (
            <div className=''>
                <h3 className='text-4xl text-center font-bold pb-10'> Video</h3>

                <div className='bg-none max-w-4xl max-h-1/2 mx-auto rounded-4xl overflow-clip'>
                    
                <iframe className='w-full h-[300px] sm:h-[500px] md:h-[400px] lg:h-[500px] 2xl:h-[600px]' src="https://www.youtube.com/embed/JTlNCjkpKBk?si=rxag8v-Mnp6cPNkp" title="YouTube video player"  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  ></iframe>
                </div>
            </div>
        )*/
    },
    {
        id: "15",
        title: "Summer New Icecream Banner Design",
        description: "เป็นผลงานการออกแบบแบนเนอร์ผลิตภัณฑ์ไอศกรีม โดยเป็นการใช้ AI Generate ภาพจาก Leonardo ai แล้วจึงมาปรับแต่งและแก้ไของค์ประกอบการจัดวางต่างๆ ให้ดูน่าสนใจมากขึ้น",
        img1: "/pj/img/AIbanner.jpg",

        tag: {

            tag1: "Graphic Design",
            tag2: "Ganerative AI",


        },
        skill: {
            skill1: "Adobe Illustrator",
            skill2: "Adobe Photoshop",
            skill3: "AI Generate",




        },
        date: "22/04/2025",
        /*content: (
            <div className=''>
                <h3 className='text-4xl text-center font-bold pb-10'> Video</h3>

                <div className='bg-none max-w-4xl max-h-1/2 mx-auto rounded-4xl overflow-clip'>
                    
                <iframe className='w-full h-[300px] sm:h-[500px] md:h-[400px] lg:h-[500px] 2xl:h-[600px]' src="https://www.youtube.com/embed/JTlNCjkpKBk?si=rxag8v-Mnp6cPNkp" title="YouTube video player"  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  ></iframe>
                </div>
            </div>
        )*/
    },
    {
        id: "16",

        title: "การออกแบบพัฒนาผลิตภัณฑ์และบรรจุภัณฑ์ วิสาหกิจชุมชนผลิตภัณฑ์แปรรูปจากผ้า วัดศรีอุโมงค์คำ | Local Brand Design",
        description: "เป็นการร่วมมือของชุมชนและทางรายวิชาความคิดสร้างสรรค์ท้องถิ่นกับนวัตกรรมกราฟิกและมัลติมีเดีย สาขาคอมพิวเตอร์กราฟิกและมัลติมีเดีย  มหาวิทยาลัยพะเยา เพื่อพัฒนาและออกแบบอัตลักษณ์แบรนด์ ผลิตภัณฑ์และบรรจุภัณฑ์ โดยได้รับความอนุเคราะห์จากวิสาหกิจชุมชนผลิตภัณฑ์แปรรูปจากผ้า วัดศรีอุโมงค์คำ ให้ช่วยออกแบบผลิตภัณฑ์และบรรจุภัณฑ์ที่เน้นความเป็นเอกลักษณ์ของวัดศรีอุโมงค์คำซึ่งเป็นวัดที่มีชื่อเสียงในจังหวัดพะเยาและมีการท่องเที่ยวเชิงวัฒนธรรมที่น่าสนใจ \nซึ่งวิสาหกิจชุมชนนี้ก่อตั้งเมื่อ 5 ตุลาคม 2565 เกิดขึ้นมาจาก กลุ่มสตรีชุมชนวัดศรีอุโมงค์คำ ต.เวียง อ.เมืองพะเยา  30 กว่าคนที่มีเวลาว่างแล้วรู้สึกสนใจในการปักผ้า จึงคิดที่จะก่อตั้งวิสาหกิจชุมชนนี้ขึ้นมา เนื่องจากคนในกลุ่มทุกคนมีพื้นฐานในการเย็บปัก ถักร้อยกันอยู่แล้ว เลยคิดที่จะผลิตผ้าทำมือแปรรูปเป็นผลิตภัณฑ์ต่างๆออกจำหน่ายสร้างรายได้ให้กับตนเองและกลุ่มรวมถึงชุมชน \n\n สินค้าเป็นสินค้าแฮนด์เมด ส่วนใหญ่จะทำจากผ้าปักแล้วแปรรูป อาทิ พวงกุญแจ กระเป๋าผ้า กระเป๋าตังค์ เวลาในการปักขึ้นอยู่กับขนาดของตัวผ้าและลวดลายที่ได้มา การปักผ้าส่วนใหญ่จะไปทางการปักแบบเรียบง่าย ไม่ซับซ้อน เป็นเส้นง่ายๆ ลวดลายน่ารักๆ เพราะภายในกลุ่มไม่ได้มีพื้นฐานการปักที่เป็นมืออาชีพขนาดนั้น",
        img1: "/pj/img/Kumhug/kum01.jpg",

        tag: {


            tag1: "Graphic Design",
            tag2: "Brand Design",


        },
        skill: {
            skill1: "Adobe Photoshop",
            skill2: "Adobe Illustrator",




        },
        date: "16/02/2024",
        content: (
            <div className='grid grid-cols-3 gap-5 px-5'>
                <div className=' row-span-1 overflow-clip rounded-lg 2xl:rounded-3xl'>
                    <img src="/pj/img/Kumhug/kum02.jpg" className="object-cover object-left h-full w-full" />
                </div>

                <img src="/pj/img/Kumhug/kum03.jpg" className="col-span-2 w-full h-auto rounded-lg 2xl:rounded-3xl" />
                <img src="/pj/img/Kumhug/kum05.jpg" className="col-start-1 row-span-2 col-span-2 object-cover object-[35%_65%] w-full h-full rounded-lg 2xl:rounded-3xl" />
                <img src="/pj/img/Kumhug/kum04.jpg" className=" w-full h-auto rounded-lg 2xl:rounded-3xl" />
                <img src="/pj/img/Kumhug/kum06.jpg" className=" w-full h-auto rounded-lg 2xl:rounded-3xl" />
                <img src="/pj/img/Kumhug/kum07.jpg" className=" w-full h-auto rounded-lg 2xl:rounded-3xl" />
                <img src="/pj/img/Kumhug/kum08.jpg" className=" w-full h-auto rounded-lg 2xl:rounded-3xl" />
                <img src="/pj/img/Kumhug/kum10.jpg" className="row-span-2 object-cover w-full h-full rounded-lg 2xl:rounded-3xl" />
                <img src="/pj/img/Kumhug/kum09.jpg" className=" w-full h-full rounded-lg 2xl:rounded-3xl" />
                <img src="/pj/img/Kumhug/kum11.jpg" className=" w-full h-auto rounded-lg 2xl:rounded-3xl" />
                <img src="/pj/img/Kumhug/kum17.jpg" className="row-span-2 col-span-2 object-cover w-full h-full rounded-lg 2xl:rounded-3xl" />
                <img src="/pj/img/Kumhug/kum16.jpg" className="object-cover w-full h-full rounded-lg 2xl:rounded-3xl" />
                <img src="/pj/img/Kumhug/kum12.jpg" className=" w-full h-full rounded-lg 2xl:rounded-3xl" />
                <img src="/pj/img/Kumhug/kum13.jpg" className=" w-full h-auto rounded-lg 2xl:rounded-3xl" />
                <img src="/pj/img/Kumhug/kum14.jpg" className=" w-full h-auto rounded-lg 2xl:rounded-3xl" />
                <img src="/pj/img/Kumhug/kum15.jpg" className=" w-full h-auto rounded-lg 2xl:rounded-3xl" />
                <img src="/pj/img/Kumhug/kum18.jpg" className=" w-full h-auto rounded-lg 2xl:rounded-3xl" />
                <img src="/pj/img/Kumhug/kum19.jpg" className=" w-full h-auto rounded-lg 2xl:rounded-3xl" />
            </div>
        )
    },
    {
        id: "17",

        title: "ภาพถ่ายงานโปรโมทชมรม Design Media",
        description: "เป็นการถ่ายภาพเพื่อใช้โปรโมทชมรม Design Media ในกิจกรรมเปิดโลกกิจกรรมปี2024 ของมหาวิทยาลัยพะเยาทั้งในช่อง Instagram และ Facebook",
        img1: "/pj/img/DM/DMUP.png",

        tag: {


            tag1: "Photography",



        },
        skill: {
            skill1: "Adobe Photoshop",
            skill2: "Adobe Lightroom"





        },
        date: "03/06/2024",
        content: (

            <div>
                <h2 className='cursor-default text-lg md:text-3xl font-medium mb-5 md:mx-2  whitespace-pre-line' >Social<span className='text-blue-500'> Media</span> </h2>
                <hr />
                <div className='mt-2 flex'>
                    <h3>Instagram:</h3>
                    <Link href="https://www.instagram.com/dmup.club/" target='_blank' className='hover:text-blue-400 hover:underline hover:underline-offset-8 indent-15'>ชมรม Design Me(dia)</Link>
                </div>
                <div className='mt-2 flex'>
                    <h3>Facebook:</h3>
                    <Link href="https://web.facebook.com/dmup.club" target='_blank' className='hover:text-blue-400 hover:underline hover:underline-offset-8 indent-15'>ชมรม Design Me(dia) มหาวิทยาลัยพะเยา</Link>
                </div>
            </div>

            // <div className='grid grid-cols-3 gap-5 px-5'>
            //     <div className=' row-span-1 overflow-clip rounded-lg 2xl:rounded-3xl'>
            //         <img src="/pj/img/Kumhug/kum02.jpg" className="object-cover object-left h-full w-full" />
            //     </div>

            //     <img src="/pj/img/Kumhug/kum03.jpg" className="col-span-2 w-full h-auto rounded-lg 2xl:rounded-3xl" />
            //     <img src="/pj/img/Kumhug/kum05.jpg" className="col-start-1 row-span-2 col-span-2 object-cover object-[35%_65%] w-full h-full rounded-lg 2xl:rounded-3xl" />
            //     <img src="/pj/img/Kumhug/kum04.jpg" className=" w-full h-auto rounded-lg 2xl:rounded-3xl" />
            //     <img src="/pj/img/Kumhug/kum06.jpg" className=" w-full h-auto rounded-lg 2xl:rounded-3xl" />
            //     <img src="/pj/img/Kumhug/kum07.jpg" className=" w-full h-auto rounded-lg 2xl:rounded-3xl" />
            //     <img src="/pj/img/Kumhug/kum08.jpg" className=" w-full h-auto rounded-lg 2xl:rounded-3xl" />
            //     <img src="/pj/img/Kumhug/kum10.jpg" className="row-span-2 object-cover w-full h-full rounded-lg 2xl:rounded-3xl" />
            //     <img src="/pj/img/Kumhug/kum09.jpg" className=" w-full h-full rounded-lg 2xl:rounded-3xl" />
            //     <img src="/pj/img/Kumhug/kum11.jpg" className=" w-full h-auto rounded-lg 2xl:rounded-3xl" />
            //     <img src="/pj/img/Kumhug/kum17.jpg" className="row-span-2 col-span-2 object-cover w-full h-full rounded-lg 2xl:rounded-3xl" />
            //     <img src="/pj/img/Kumhug/kum16.jpg" className="object-cover w-full h-full rounded-lg 2xl:rounded-3xl" />
            //     <img src="/pj/img/Kumhug/kum12.jpg" className=" w-full h-full rounded-lg 2xl:rounded-3xl" />
            //     <img src="/pj/img/Kumhug/kum13.jpg" className=" w-full h-auto rounded-lg 2xl:rounded-3xl" />
            //     <img src="/pj/img/Kumhug/kum14.jpg" className=" w-full h-auto rounded-lg 2xl:rounded-3xl" />
            //     <img src="/pj/img/Kumhug/kum15.jpg" className=" w-full h-auto rounded-lg 2xl:rounded-3xl" />
            //     <img src="/pj/img/Kumhug/kum18.jpg" className=" w-full h-auto rounded-lg 2xl:rounded-3xl" />
            //     <img src="/pj/img/Kumhug/kum19.jpg" className=" w-full h-auto rounded-lg 2xl:rounded-3xl" />
            // </div>
        )
    },
    {
        id: "18",

        title: "งานถ่ายภาพสำหรับงานนิทรรศการ All in Design",
        description: "เป็นการถ่ายภาพเพื่อใช้การจัดทำสูจิบัตรและป้ายโชว์ผลงานและสื่อต่างๆ โดยเป็นการถ่ายภาพภายในสตูดิโอซึ่งมีการจัดแสงและองค์ประกอบต่างๆ ที่ใช้ในภาพรวมทั้งการแต่งตัวแชวแฟนตาซี",
        img1: "/pj/img/all1.jpeg",

        tag: {


            tag1: "Photography",



        },
        skill: {
            skill1: "Adobe Photoshop",
            skill2: "Adobe Lightroom"





        },
        date: "16/08/2024",
        content: (

            <div className='grid grid-cols-3 gap-5 px-5'>
                <div className='col-span-2 row-span-3 overflow-clip rounded-lg 2xl:rounded-3xl'>
                    <img src="/pj/img/Pall1/PF01.jpg" className="object-cover object-center h-full w-full" />
                </div>

                <img src="/pj/img/Pall1/PF02.jpg" className=" w-full h-auto rounded-lg 2xl:rounded-3xl" />
                <img src="/pj/img/Pall1/PF03.jpg" className=" w-full h-full rounded-lg 2xl:rounded-3xl" />
                <img src="/pj/img/Pall1/PF04.jpg" className=" w-full h-auto rounded-lg 2xl:rounded-3xl" />

            </div>
        )
    },
    {
        id: "19",

        title: "การออกแบบพัฒนาอัตลักษณ์แบรนด์วิสาหกิจชุมชนโกโก้ อีซังวาฮัง | Brand Design",
        description: "เป็นส่วนหนึ่งของรายวิชา การสร้างสรรค์อัตลักษณ์แบรนด์ Brand Identity Design โดยได้มีการออกแบบอัตลักษณ์แบรนด์ให้กับวิสาหกิจชุมชนโกโก้ อีซังวาฮัง บ้านศรีดอนชัย อ.เชียงของ จ.เชียงราย เป็นกลุ่มเกษตรกรผู้ปลูกกาแฟ ปลูกโกโก้ เพื่อแปรรูปและจำหน่าย โดยเป็นการผลิตแบบออแกนิคปลูกเองผลิตเองทุกขั้นตอนทำให้เกิดเป็นช็อกโกแลตรสชาติดีเป็นการเพิ่มรายได้ให้กับเกษตรกรเป็นอย่างดี ซึ่งเป็นการทำงานร่วมกันระหว่างนักศึกษาและวิสาหกิจชุมชน โดยมีการออกแบบโลโก้ Brand CI ต่างๆ ให้สอดคล้องกับผลิตภัณฑ์ที่มีการทำการเกษตรปลูกโกโก้และแปรรูปเป็นผลิตภัณฑ์ต่างๆ เช่น ช็อกโกแลต, ผงโกโก้, น้ำโกโก้ เป็นต้น",
        img1: "/pj/img/YD/YD01.jpg",

        tag: {


            tag1: "Graphic Design",
            tag2: "Brand Design",


        },
        skill: {
            skill1: "Adobe Photoshop",
            skill2: "Adobe Illustrator",




        },
        date: "21/02/2024",
        content: (
            <div className='grid grid-cols-3 gap-5 px-5'>
                <div className=' row-span-1 overflow-clip rounded-lg 2xl:rounded-3xl'>
                    <img src="/pj/img/YD/YD02.jpg" className="object-cover object-center h-full w-full" />
                </div>

                <img src="/pj/img/YD/YD03.jpg" className="col-span-2 w-full h-auto rounded-lg 2xl:rounded-3xl" />
                <img src="/pj/img/YD/YD04.jpg" className="col-start-1 row-span-2 col-span-2 object-cover object-[35%_65%] w-full h-full rounded-lg 2xl:rounded-3xl" />
                <img src="/pj/img/YD/YD05.jpg" className=" w-full h-auto rounded-lg 2xl:rounded-3xl" />
                <img src="/pj/img/YD/YD06.jpg" className=" w-full h-auto rounded-lg 2xl:rounded-3xl" />
                <img src="/pj/img/YD/YD07.jpg" className=" w-full h-auto rounded-lg 2xl:rounded-3xl" />
                <img src="/pj/img/YD/YD08.jpg" className=" w-full h-auto rounded-lg 2xl:rounded-3xl" />

            </div>
        )
    },
    {
        id: "20",
        title: "KV Motion DMHT Party  DIAGEO",
        description: "[ฝึกงาน] เป็นผลงานการทำ Key Visual Motion สำหรับงานปาร์ตี้สังสรรค์ DMHT Party ของทางบริษัท DIAGEO โดยเป็นการใช้บริการจัดทำ Event Agency ของบริษัท เดอะ พิกเซลวัน โพรดักชั่น จำกัด \n \n ซึ่งได้จัดทำ Motion Graphic โดยใช้โปรแกรม Adobe After Effects ในการทำงานทั้งหมด โดยมีการใช้เทคนิคการทำ Animation และการจัดวางองค์ประกอบต่างๆ ให้ดูน่าสนใจและมีความเคลื่อนไหวที่สนุกสนาน",
        img1: "/pj/img/Intern/KVDM.jpg",
        video: '/pj/VD/KVDM.mp4',
        tag: {
            tag1: "Motion Graphic",

        },
        skill: {
            skill1: "Adobe After Effects",

        },
        date: "28/01/2025",
        // content: (
        //     <div className='grid grid-cols-3 gap-5 px-5'>
        //         <div className='bg-none max-w-4xl mx-auto rounded-4xl overflow-clip'>
        //             <video className='w-full h-auto ' controls src='/pj/VD/.mp4' /></div>
                

        //     </div>
        // )
    },
    {
        id: "21",
        title: "KV Motion CREW AS ONE Party LinQtec ",
        description: "[ฝึกงาน] เป็นผลงานการทำ Key Visual Motion สำหรับงานปาร์ตี้สังสรรค์ CREW AS ONE Party ของทางบริษัท LinQtec โดยเป็นการใช้บริการจัดทำ Event Agency ของบริษัท เดอะ พิกเซลวัน โพรดักชั่น จำกัด \n \n ซึ่งได้จัดทำ Motion Graphic โดยใช้โปรแกรม Adobe After Effects ในการทำงานทั้งหมด โดยมีการใช้เทคนิคการทำ Animation และการจัดวางองค์ประกอบต่างๆ ให้ดูน่าสนใจและมีความเคลื่อนไหวที่สนุกสนาน",
        img1: "/pj/img/Intern/KVLQ.jpg",
        video: '/gif/KVLT01.mp4',
        tag: {
            tag1: "Motion Graphic",

        },
        skill: {
            skill1: "Adobe After Effects",

        },
        date: "13/01/2025",
        // content: (
        //     <div className='grid grid-cols-3 gap-5 px-5'>
        //         <div className='bg-none max-w-4xl mx-auto rounded-4xl overflow-clip'>
        //             <video className='w-full h-auto ' controls src='/pj/VD/.mp4' /></div>
                

        //     </div>
        // )
    },
    {
        id: "22",
        title: "Logo Motion THE PIXEL ONE PRODUCTION CO.,LTD ",
        description: "[ฝึกงาน] เป็นผลงานการทำ Motion Graphic สำหรับโลโก้ของทางบริษัท เดอะ พิกเซลวัน โพรดักชั่น จำกัด เพื่อใช้ในโอกาสต่าง ๆ เช่น Showreel คลิปนำเสนอผลงานจัดอีเวนท์ต่างๆ \n \n ซึ่งได้จัดทำ Motion Graphic โดยใช้โปรแกรม Adobe After Effects ในการทำงานทั้งหมด โดยมีการใช้เทคนิคการทำ Animation และการจัดวางองค์ประกอบต่างๆ ให้ดูน่าสนใจและมีความเคลื่อนไหวที่สนุกสนาน",
        img1: "/pj/img/Intern/PX.png",
        video: '/pj/VD/PX.mp4',
        tag: {
            tag1: "Motion Graphic",

        },
        skill: {
            skill1: "Adobe After Effects",

        },
        date: "03/02/2025",
        // content: (
        //     <div className='grid grid-cols-3 gap-5 px-5'>
        //         <div className='bg-none max-w-4xl mx-auto rounded-4xl overflow-clip'>
        //             <video className='w-full h-auto ' controls src='/pj/VD/.mp4' /></div>
                

        //     </div>
        // )
    },
    {
        id: "23",
        title: "Logo Motion BoostUp ",
        description: "[ฝึกงาน] เป็นผลงานการทำ Motion Graphic สำหรับโลโก้ของ BoostUp ซึ่งเป็นหนึ่งในเครือของบริษัท เดอะ พิกเซลวัน โพรดักชั่น จำกัด เพื่อใช้ในโอกาสต่าง ๆ เช่น Showreel คลิปนำเสนอผลงานจัดอีเวนท์ต่างๆ \n \n ซึ่งได้จัดทำ Motion Graphic โดยใช้โปรแกรม Adobe After Effects ในการทำงานทั้งหมด โดยมีการใช้เทคนิคการทำ Animation และการจัดวางองค์ประกอบต่างๆ ให้ดูน่าสนใจและมีความเคลื่อนไหวที่สนุกสนาน",
        img1: "/gif/MotionBU.gif",
        video: '',
        tag: {
            tag1: "Motion Graphic",

        },
        skill: {
            skill1: "Adobe After Effects",

        },
        date: "03/02/2025",
        // content: (
        //     <div className='grid grid-cols-3 gap-5 px-5'>
        //         <div className='bg-none max-w-4xl mx-auto rounded-4xl overflow-clip'>
        //             <video className='w-full h-auto ' controls src='/pj/VD/.mp4' /></div>
                

        //     </div>
        // )
    },
    {
        id: "24",
        title: "Handa TheGolden Night 2025 ",
        description: "[ฝึกงาน] เป็นผลงานการทำ Motion Graphic สำหรับงานปาร์ตี้หลังการสัมมนาเปิดตัวรถรุ่นใหม่ของฮอนด้า ซึ่งทางของบริษัท เดอะ พิกเซลวัน โพรดักชั่น จำกัด เป็น organizer ให้กับงานนี้ \n \n ซึ่งได้จัดทำ Motion Graphic โดยใช้โปรแกรม Adobe After Effects ในการทำงานทั้งหมด และ Footage ต่างๆ จัดวางและตัดต่อให้เข้ากับเสียงเพลงที่จะใช้ในการแสดงโชว์เปิดตัวงานปาร์ตี้",
        img1: " /pj/img/Intern/Honda.jpg",
        
        tag: {
            tag1: "Motion Graphic",

        },
        skill: {
            skill1: "Adobe After Effects",

        },
        date: "09/01/2025",
        content: (
            <div className=''>
                <h3 className='text-4xl text-center font-bold pb-10'> Video</h3>

                <div className='bg-none max-w-4xl max-h-1/2 mx-auto rounded-4xl overflow-clip'>
                    
                <iframe className='w-full h-[300px] sm:h-[500px] md:h-[400px] lg:h-[500px] 2xl:h-[600px]' src="https://www.youtube.com/embed/jJ9L6B_VFJk?si=CFyIv4ecm32fN42D" title="YouTube video player"  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  ></iframe>
                </div>
            </div>)
        // content: (
        
        //     <div className='grid grid-cols-3 gap-5 px-5'>
        //         <div className='bg-none max-w-4xl mx-auto rounded-4xl overflow-clip'>
        //             <video className='w-full h-auto ' controls src='/pj/VD/.mp4' /></div>
                

        //     </div>
        // )
    },
    {
        id: "25",
        title: "KV Motion THE INFLUENCER TUEK TUK Party BDMS ",
        description: "[ฝึกงาน] เป็นผลงานการทำ Key Visual Motion สำหรับงานปาร์ตี้สังสรรค์ THE INFLUENCER TUEK TUK Party ของทางบริษัท BDMS โดยเป็นการใช้บริการจัดทำ Event Agency ของบริษัท เดอะ พิกเซลวัน โพรดักชั่น จำกัด \n \n ซึ่งได้จัดทำ Motion Graphic โดยใช้โปรแกรม Adobe After Effects ในการทำงานทั้งหมด โดยมีการใช้เทคนิคการทำ Animation และการจัดวางองค์ประกอบต่างๆ ให้ดูน่าสนใจและมีความเคลื่อนไหวที่สนุกสนาน",
        img1: "/pj/img/Intern/KVBDMS.png",
        video: '/pj/VD/KVBDMS01.mp4',
        video2: '/pj/VD/KVBDMS-hori.mp4',
        tag: {
            tag1: "Motion Graphic",

        },
        skill: {
            skill1: "Adobe After Effects",

        },
        date: "13/01/2025",
        // content: (
        //     <div className='grid grid-cols-3 gap-5 px-5'>
        //         <div className='bg-none max-w-4xl mx-auto rounded-4xl overflow-clip'>
        //             <video className='w-full h-auto ' controls src='/pj/VD/.mp4' /></div>
                

        //     </div>
        // )
    },
    {
        id: "26",
        title: "Motion Graphic work at Maider co.,ltd",
        description: "ออกแบบและจัดทำสื่อภาพเคลื่อนไหว (motion graphic) โดยพัฒนาจากผลงาน Artwork ที่จัดทำโดยฝ่าย Graphic designer พร้อมทั้งดำเนินการปรับขนาดสื่อ (Resize) ให้เหมาะสมกับสัดส่วนและความละเอียดของจอ LED หลากหลายรูปแบบที่ใช้ในการนำเสนอผลงาน \n รับผิดชอบดูแลการอัปโหลดและจัดเรียงสื่อภาพเข้าสู่ระบบควบคุมการแสดงผล เพื่อให้การนำเสนอผ่านจอ LED เป็นไปอย่างมีประสิทธิภาพ",
        img1: "https://img5.pic.in.th/file/secure-sv1/Artboard-17d05cca56af391fc.png",
        
        tag: {
            tag1: "Motion Graphic",

        },
        skill: {
            skill1: "Adobe After Effects",

        },
        date: "31/08/2025",
        content: (
            <div className=''>
                <h3 className='text-4xl text-center font-bold pb-10'> Video</h3>

                <div className='bg-none max-w-4xl max-h-1/2 mx-auto rounded-4xl overflow-clip'>
                    
                <iframe className='w-full h-[300px] sm:h-[500px] md:h-[400px] lg:h-[500px] 2xl:h-[600px]' src="https://www.youtube.com/embed/4bxnyiEwoSE?si=4wM-RMheGvcSRwQQ" title="YouTube video player"  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  ></iframe>
                </div>
            </div>)
        // content: (
        //     <div className='grid grid-cols-3 gap-5 px-5'>
        //         <div className='bg-none max-w-4xl mx-auto rounded-4xl overflow-clip'>
        //             <video className='w-full h-auto ' controls src='/pj/VD/.mp4' /></div>
                

        //     </div>
        // )
    },
    {
        id: "27",
        title: "Rose Advernture | 3D Animation sort film",
        description: "การออกแบบตัวละคร 3D Animation โดยใช้โปรแกรม Maya ในการสร้างโมเดลตัวละครและฉากต่างๆ รวมถึงการทำ Rigging เพื่อให้ตัวละครสามารถเคลื่อนไหวได้อย่างสมจริง จากนั้นจึงนำโมเดลที่ได้ไปทำการจัดแสง (Lighting) และการเรนเดอร์ (Rendering) เพื่อให้ได้ภาพที่มีคุณภาพสูงและเหมาะสมกับการนำเสนอในรูปแบบของสื่อดิจิทัล \n\n การสร้างสรรค์เรื่องราว (Storytelling) ที่น่าสนใจและมีความหมาย โดยเน้นการสื่อสารผ่านภาพและเสียง เพื่อให้ผู้ชมสามารถเข้าใจและรับรู้ถึงความรู้สึกที่ต้องการถ่ายทอดผ่านตัวละครและเหตุการณ์ต่างๆ ในเรื่องราวนั้นๆ",
        img1: "https://img2.pic.in.th/pic/Screenshot-2025-09-01-185509.png",
        
        tag: {
            tag1: "3D Modeling",
            tag2: "Animation",
            tag3: "Video editor",

        },
        skill: {
            skill1: "Maya",

        },
        date: "17/10/2023",
        content: (
            <div className=''>
                <h3 className='text-4xl text-center font-bold pb-10'> Video</h3>

                <div className='bg-none max-w-4xl max-h-1/2 mx-auto rounded-4xl overflow-clip'>
                    
                <iframe className='w-full h-[300px] sm:h-[500px] md:h-[400px] lg:h-[500px] 2xl:h-[600px]' src="https://www.youtube.com/embed/J5SjNjH8Wwk?si=KjIR_Bi9M9RafGiG" title="YouTube video player"  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  ></iframe>
                </div>
                <div className='bg-none max-w-4xl max-h-1/2 mx-auto rounded-4xl overflow-clip mt-8'>
                    
                <iframe className='w-full h-[300px] sm:h-[500px] md:h-[400px] lg:h-[500px] 2xl:h-[600px]' src="https://www.youtube.com/embed/jbW3sSjAAqw?si=xBuDXa5eslV8o1hA" title="YouTube video player"  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  ></iframe>
                </div>
                <div className='flex flex-col sm:flex-row gap-4 px-5 mt-8'>
                <div className='bg-none max-w-4xl max-h-1/2 mx-auto rounded-4xl overflow-clip mt-8'>
                    
                <iframe className="w-fit h-[200px] sm:h-[500px] md:h-[400px] lg:h-[500px] 2xl:h-[320px]" title="Rose" allow="autoplay; fullscreen; xr-spatial-tracking" src="https://sketchfab.com/models/c89b893d51264ebdb45fd4a4b9a95332/embed?autospin=1&autostart=1&preload=1&dnt=1"> </iframe>
                </div>
                <div className='bg-none max-w-4xl max-h-1/2 mx-auto rounded-4xl overflow-clip mt-8'>
                    
                <iframe className="w-fit h-[200px] sm:h-[500px] md:h-[400px] lg:h-[500px] 2xl:h-[320px]" title="wonder" allow="autoplay; fullscreen; xr-spatial-tracking" src="https://sketchfab.com/models/b2e8a33aed21403ebec9e406055d3bc6/embed?autospin=1&autostart=1&preload=1&dnt=1"> </iframe>
                </div>
                </div>
                
            </div>)
        // content: (
        //     <div className='grid grid-cols-3 gap-5 px-5'>
        //         <div className='bg-none max-w-4xl mx-auto rounded-4xl overflow-clip'>
        //             <video className='w-full h-auto ' controls src='/pj/VD/.mp4' /></div>
                

        //     </div>
        // )
    },
    {
        id: "28",
        title: "All in Design | 3D Exhibition",
        description: "การออกแบบผังนิทรรศการรุปแบบ 3D โดยใช้โปนแกรม Blender ในการขึ้นโครงสร้างจัดการวางแผนผังสำหรับจัดงาน เพื่อให้สามารถมองเห็นภาพรวมของงานและสามารถนำไปเป็นสื่อแบบประชาสัมพันธ์ในรูปแบบต่างๆ ได้อย่างมีประสิทธิภาพ",
        img1: "https://img2.pic.in.th/pic/Allin.png",
        
        tag: {
            tag1: "3D Modeling",
            tag2: "Video editor",
            

        },
        skill: {
            skill1: "Blender",

        },
        date: "18/03/2025",
        content: (
            <div className=''>
                <h3 className='text-4xl text-center font-bold pb-10'> Video</h3>

                <div className='bg-none max-w-4xl max-h-1/2 mx-auto rounded-4xl overflow-clip my-8'>
                    
                <iframe className='w-full h-[300px] sm:h-[500px] md:h-[400px] lg:h-[500px] 2xl:h-[600px]' src="https://www.youtube.com/embed/COlSUSWI9Bw?si=y6CrXllcAJx7eqOk" title="YouTube video player"  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  ></iframe>
                </div>
                
                <div className='bg-none max-w-4xl max-h-1/2 mx-auto rounded-4xl overflow-clip my-8'>
                    
                <iframe className="w-full h-[200px] sm:h-[500px] md:h-[400px] lg:h-[500px] 2xl:h-[500px]" title="wonder" allow="autoplay; fullscreen; xr-spatial-tracking" src="https://sketchfab.com/models/6098f16c170a4d038cf8d4d628b023a0/embed?autostart=1&preload=1&dnt=1&camera=0&transparent=1"> </iframe>
                </div>
            </div>)
        // content: (
        //     <div className='grid grid-cols-3 gap-5 px-5'>
        //         <div className='bg-none max-w-4xl mx-auto rounded-4xl overflow-clip'>
        //             <video className='w-full h-auto ' controls src='/pj/VD/.mp4' /></div>
                

        //     </div>
        // )
    },
    {
        id: "29",
        title: "Stand-up Pouch dried orange Product Banner Design",
        description: "เป็นผลงานการออกแบบแบนเนอร์ผลิตภัณฑ์อาหารอบแห้งจากส้ม โดยใช้โปรแกรม Adobe Illustrator และ Adobe Photoshop ในการออกแบบและจัดวางองค์ประกอบต่างๆ ให้ดูน่าสนใจและมีความสอดคล้องกับผลิตภัณฑ์ และยังออกแบบบรรจุภัณฑ์ Stand-up Pouch ในรูปแบบ 3D Mockup เพื่อให้เห็นภาพรวมของผลิตภัณฑ์ได้อย่างชัดเจน",
        img1: "https://img5.pic.in.th/file/secure-sv1/Poster-FB-mockup.md.png",

        tag: {

            tag1: "Graphic Design",
            tag2: "Brand Design",


        },
        skill: {
            skill1: "Adobe Illustrator",
            skill2: "Adobe Photoshop",
            




        },
        date: "28/08/2025",
        /*content: (
            <div className=''>
                <h3 className='text-4xl text-center font-bold pb-10'> Video</h3>

                <div className='bg-none max-w-4xl max-h-1/2 mx-auto rounded-4xl overflow-clip'>
                    
                <iframe className='w-full h-[300px] sm:h-[500px] md:h-[400px] lg:h-[500px] 2xl:h-[600px]' src="https://www.youtube.com/embed/JTlNCjkpKBk?si=rxag8v-Mnp6cPNkp" title="YouTube video player"  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  ></iframe>
                </div>
            </div>
        )*/
    },
]
export default ProjectDatas