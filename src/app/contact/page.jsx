'use client'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// ในไฟล์อื่นที่เรียกใช้งาน
import { RiLoader4Fill } from "react-icons/ri";
import { FaFacebook, FaInstagram, } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";


import React, { useEffect, useState } from 'react';
import AnimatedContent from '../../components/AnimatedContent';
import { Link } from 'next/link';

export default  function Page() {
  
  const initValues = { name: '', email: '', subject: '', message: '' };
  const initState = { values: initValues, isLoading: false };
  const [state, setState] = useState(initState);

  const { values, isLoading } = state;

  const handleChange = (e) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [e.target.name]: e.target.value,
      },
    }));


  const handleSubmit = async (e) => {
    e.preventDefault();

    // ตรวจสอบก่อนว่า กรอกข้อมูลครบมั้ย
    if (!values.name || !values.email || !values.subject || !values.message) {
      toast.warn('โปรดกรอกข้อมูลให้ครบ');
      return; // หยุดการ submit
    }

    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));
    const res = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(values),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });
    const contentType = res.headers.get('content-type');
    try {
      let data = {};

      if (contentType && contentType.includes('application/json')) {
        data = await res.json();
      } else {
        throw new Error('Invalid response format');
      }

      if (res.ok && data.ok) {
        toast.success('Email sent successfully!');
        setState({ values: initValues, isLoading: false });
      } else {
        toast.error(data.message || 'Failed to send email. Please try again.');
        setState((prev) => ({ ...prev, isLoading: false }));
      }
    } catch (error) {
      console.error('Error sending email:', error);
      toast.error('Something went wrong. Try again later.');
      setState((prev) => ({ ...prev, isLoading: false }));
    }
  };
  // grid grid-cols-1 md:grid-cols-2

  return (
    <main className="bg-none w-full h-auto flex justify-center items-center px-10 py-10 overflow-clip">
      <div className="grid grid-cols-1 h-screen xl:grid-cols-2 xl:gap-4 2xl:px-10 pt-20">
        <div className="flex flex-col  items-center justify-center">
          <AnimatedContent
            className=''
            distance={80}
            direction="horizontal"
            reverse={true}
            config={{ tension: 80, friction: 20 }}
            initialOpacity={0}
            animateOpacity
            scale={1.1}
            threshold={0.2}
            delay={300}>
            <form onSubmit={handleSubmit} className="border-gray-900 border-2 scale-50 md:scale-90 2xl:scale-100 rounded-2xl max-h-auto max-w-auto px-15 p-10">
              <h1 className="cursor-default text-center text-6xl font-semibold pb-8">Contact</h1>

              <div className="relative flex flex-col space-y-1 pb-2">
                <label htmlFor="subject">Subject:</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={values.subject}
                  onChange={handleChange}
                  placeholder="Your Title"
                  className="px-4 py-2 border-2 border-blue-100 rounded-xl"
                />
              </div>

              <div className="relative flex flex-row items-center space-x-2 pb-3">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={values.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className="px-4 py-2 border-2 border-blue-100 rounded-xl"
                />
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={values.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="px-4 py-2 border-2 border-blue-100 rounded-xl"
                />
              </div>

              <div className="relative flex flex-col space-y-1">
                <label htmlFor="message">Message:</label>
                <textarea
                  id="message"
                  name="message"
                  cols={10}
                  rows={5}
                  required
                  value={values.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  className="w-full h-auto px-4 py-2 border-2 border-blue-100 rounded-xl"
                />
              </div>

              <div className="flex flex-row justify-center items-center pt-5">
                <button
                  type="submit"
                  disabled={
                    isLoading ||
                    !values.name ||
                    !values.email ||
                    !values.subject ||
                    !values.message
                  }

                  className={`px-4 py-2 rounded-xl text-white ${isLoading
                    ? 'bg-blue-300 outline-2 outline-blue-800 cursor-not-allowed'
                    : 'bg-blue-600 hover:bg-blue-400 cursor-pointer'
                    }`}
                >
                  <div className='flex flex-row' >
                    <RiLoader4Fill className={`${isLoading ? 'flex animate-spin fill-blue-900 w-7 h-7' : ' hidden'}`} />
                    {isLoading ? '' : 'Send'}
                  </div>

                </button>

                
              </div>
              <div className='flex flex-col items-center justify-center mt-5'>
                  <h3>OR</h3>
                  <p className='text-sm pt-2'>send to E-mail: patcharadol.soimanee@gmail.com</p>
                </div>
            </form></AnimatedContent>
          <ToastContainer position="top-right" autoClose={3000} className={"text-black"} />
        </div>
        <AnimatedContent
          className=''
          distance={80}
          direction="horizontal"
          reverse={false}
          config={{ tension: 80, friction: 20 }}
          initialOpacity={0}
          animateOpacity
          scale={1.1}
          threshold={0.2}
          delay={300}>
          <div className='hidden 2xl:flex 2xl:flex-col overflow-clip justify-center items-center'>

            <img src="/mypic.png" alt="mypic" className='brightness-65 max-h-120 mb-5' />

            <ul className='flex flex-row gap-3'>
              <li><a href="https://www.facebook.com/Fxrd.dd/" target='_blank' ><FaFacebook className="text-xl" /></a></li>
              <li><a href="https://www.instagram.com/lumi_nxus" target='_blank' ><FaInstagram className="text-2xl" /></a></li>

            </ul>
          </div>
        </AnimatedContent>
      </div>
    </main>
  );
}
