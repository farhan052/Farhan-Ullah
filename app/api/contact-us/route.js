import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import fs from "fs/promises";
import path from "path";

export const runtime = "nodejs";

export async function POST(request) {
  try {
    const data = await request.json();
         const date = new Date().toISOString().split("T")[0];
         
//     // Unix time (seconds)
    const unixTime = Math.floor(Date.now() / 1000);
    if (!data?.message) {
      return NextResponse.json(
        { success: false, message: "Message is required" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "farhanullah1023@gmail.com",
        pass: "kdjyzgfrowfeubzm", // 👈 App Password
      },
    });

  let subject ="Service Request form"+data.name
  

  let html = `
             <html>
             <body>
             <tr>
             <td>
             Name
             </td>
             <td>
             ${data.name}
             </td>
             </tr>
             <tr>
             <td>
             Email
             </td>
             <td>
             ${data.email}
             </td>
             </tr>
             <tr>
             <td>
             Email
             </td>
             <td>
             ${data.phone}
             </td>
             </tr>
             <tr>
             <td>
             Message
             </td>
             <td>
             ${data.message}
             </td>
             </tr>
            
             </body>
             </html>
              `

    await transporter.sendMail({
      from: `"Sender Name" <${data.email}>`,
      to: "mfu7379@gmail.com",
      subject: subject,
      text: data.message,
      html: html,
    });

    // upload/{date}
    const dirPath = path.join(process.cwd(), "public/upload", date);

          try {
        // check if directory exists
            await fs.access(dirPath);
            // exists → do nothing
          } catch {
            // does not exist → create
            await fs.mkdir(dirPath, {recursive: true , mode: 0o777 });
          }

    // let  res =await fs.mkdir(dirPath, { recursive: true ,mode: 0o777});
     const fileName = `person-note-${unixTime}.json`;
    const filePath = path.join(dirPath, fileName);

    await fs.writeFile(
      filePath,
      JSON.stringify(
        {
          ...data,
          createdAt: unixTime,
        },
        null,
        2
      ),
      "utf-8"
    );

   return NextResponse.json({
  success: true,
  message: "Thank you for contacting us. We’ll get back to you shortly!",
});
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: "Something went wrong" },
      { status: 500 }
    );
  }
}





// import { NextResponse } from "next/server";
// import fs from "fs/promises";
// import path from "path";
// const nodemailer = require('nodemailer');

// export const runtime = "nodejs";

// export async function POST(request) {
//   try {
//     const data = await request.json();

//     if (!data?.message) {
//       return NextResponse.json(
//         { success: false, message: "Message is required" },
//         { status: 400 }
//       );
//     }

//     // Date folder: YYYY-MM-DD
//     const date = new Date().toISOString().split("T")[0];

//     // Unix time (seconds)
//     const unixTime = Math.floor(Date.now() / 1000);

//     let transporter = nodemailer.createTransport({
//           host: 'smtp.gmail.com', // e.g., 'smtp.gmail.com'
//           port: 465, // Common ports: 587 (STARTTLS) or 465 (SMTPS)
//           secure: true, // Use true for port 465, false for other ports (like 587)
//           auth: {
//             user: 'farhanullah1023@gmail.com', // Your email address
//             pass: 'Farhan@#10' // Your email password or App Password
//           }
//         });

//         let mailOptions = {
//             from: '"Sender Name" <farhanullah1023@gmail.com>', // Sender address
//             to: 'mfu7379@gmail.com, recipient2@example.com', // List of receivers (comma-separated)
//             subject: 'Test Email Subject', // Subject line
//             text: 'Hello world, this is a plain text email!', // Plain text body
//             html: '<b>Hello world</b>, this is an HTML email!' // HTML body (optional)
//           };


//           // Send the email
//       transporter.sendMail(mailOptions, (error, info) => {
//         if (error) {
//           console.error('Error sending email:', error);
//         } else {
//           console.log('Email sent:', info.response);
//         }
//       });


//       return NextResponse.json({
//       success: true,
//       file: `upload`,
//     });


//     // upload/{date}
//     const dirPath = path.join(process.cwd(), "upload", date);
//     let  res =await fs.mkdir(dirPath, { recursive: true });
//     return res;
//       if(res){
//       }
      

//     // person-note-{unix}.json
//     const fileName = `person-note-${unixTime}.json`;
//     const filePath = path.join(dirPath, fileName);

//     await fs.writeFile(
//       filePath,
//       JSON.stringify(
//         {
//           ...data,
//           createdAt: unixTime,
//         },
//         null,
//         2
//       ),
//       "utf-8"
//     );

//     return NextResponse.json({
//       success: true,
//       file: `upload/${date}/${fileName}`,
//     });
//   } catch {
//     return NextResponse.json(
//       { success: false, message: "Somthing error" },
//       { status: 500 }
//     );
//   }
// }
