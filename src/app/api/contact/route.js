// app/api/contact/route.js

import { NextResponse } from 'next/server';
import { transporter, generateMailOptions } from '../../../../config/nodemailer';

export async function POST(req) {
    
    const { name, email, subject, message } = await req.json();
    const year = new Date().getFullYear();
    const htmlContent = `
   <!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title></title>
    <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
    <style>
        body {
            background-color: #f3f4f6;
            font-family: IBM Plex Sans Thai, sans-serif;
            margin: 0;
            padding: 0;
        }

        .container {
            max-width: 700px;
            margin: 40px auto;
            background-color: #ffffff;
            border-radius: 8px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
            overflow: hidden;
        }

        .header {
          background-color: #3b82f6;
          color: #ffffff;
          text-align: center;
          padding: 20px 0;
          
        }

        .header h1 {
            margin: 0;
            font-size: 24px;
            font-weight: bold;
        }

        .content {
            padding: 24px;
        }

        .content p {
            font-size: 16px;
            color: #374151;
            margin-bottom: 16px;
            
        }

        .logo {
            height: 50px;
            width: auto;
            margin-bottom: 16px
        }

        .content h1 {
            font-size: 18px;
            color: #4b5563;
            margin-top: 16px;
        }

        .content h3 {
            font-size: 18px;
            color: #4b5563;
            margin-top: 16px;
        }

        .content table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 16px;
        }

        .content th, .content td {
            border: 1px solid #ffffff00;
            padding: 10px;
            text-align: left;
            font-size: 15px;
            text-indent: 50px
        }

        .content th {
            background-color: #f9fafb;
            font-weight: bold;
        }

        .footer {
            background-color: #e5e7eb;
            color: #6b7280;
            text-align: center;
            padding: 16px;
            font-size: 14px;
        }

        strong {
            font-weight: bold;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header flex flex-col">
            <img src="https://res.cloudinary.com/donnu2idb/image/upload/v1786804572/web-app-manifest-512x512_drqpcu.png" alt="Logo" class="logo">
            <h1>Response from Portfolio</h1>
        </div>
        <div class="content">
            <h1>จาก <strong>${name} &lt;${email}&gt;</strong>,</h1>
            <h3>หัวข้อ: ${subject}</h3>

            <!-- ตัวอย่างตาราง -->
            <table>

                <tr>
                    
                    <td>${message}</td>
                </tr>
            </table>

            <p>Best regards,<br>${name}</p>
        </div>
        <div class="footer">
            © ${year} Patcharadol Portfolio. All rights reserved.
        </div>
    </div>
</body>
</html>
  `;

    const mailOptions = generateMailOptions({
        from: email,
        subject: `Response: ${subject} by ${name}`,
        html: htmlContent,
        
    });


    try {
        
        const info = await transporter.sendMail({
            ...mailOptions,
            // subject: `${subject} by ${name}`,
            // html: htmlContent,
        });
        console.log('Email sent:', info.messageId);
        return NextResponse.json({ ok: true });
    } catch (error) {
        console.error('Send error:', error);
        return NextResponse.json({ ok: false, message: error.message }, { status: 500 });
    }
}
