'use client'
import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AnimatedContent from '../AnimatedContent';

import { MdMailOutline } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram, FaLinkedinIn, FaBehance } from "react-icons/fa";
import { RiLoader4Fill } from "react-icons/ri";
import { IoLocationOutline } from "react-icons/io5";


export default function Contactsection() {

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

    const Allstype = "px-4 py-2 border-2 border-white rounded-xl"
    return (
        <section className="py-section-gap-mobile md:py-section-gap-desktop md:px-[25px] bg-deep-navy text-white relative overflow-hidden">
            <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter relative z-10 transition-all duration-1000 opacity-100 translate-y-0">
                <div className='grid grid-cols-1 md:grid-cols-2 gap-16'>
                    <div>
                        <span
                            className='font-label-caps text-label-caps text-electric-blue mb-4 block uppercase'>
                            Contact Me</span>
                        <AnimatedContent
                            distance={30}
                            direction="vertical"
                            reverse={false}
                            config={{ tension: 100, friction: 50 }}
                            initialOpacity={0}
                            animateOpacity
                            scale={1}
                            threshold={0.2}
                            delay={200}

                        >
                            <h2
                                className='font-display-hero-mobile text-display-hero-mobile md:text-headline-lg font-bold mb-6'>
                                Let's Create <span className='text-electric-blue'>Something Amazing</span>  Together.</h2>
                        </AnimatedContent>
                        <AnimatedContent
                            distance={30}
                            direction="vertical"
                            reverse={false}
                            config={{ tension: 100, friction: 50 }}
                            initialOpacity={0}
                            animateOpacity
                            scale={1}
                            threshold={0.2}
                            delay={300}

                        >
                            <p className='font-body-lg text-body-lg text-soft-gray mb-12 opacity-80'>
                                I'm currently available for freelance projects and full-time opportunities. Drop me a line and let's start a conversation about your vision.</p>
                        </AnimatedContent>
                        <div className='space-y-6 flex flex-col'>
                            <AnimatedContent
                                distance={30}
                                direction="vertical"
                                reverse={false}
                                config={{ tension: 100, friction: 50 }}
                                initialOpacity={0}
                                animateOpacity
                                scale={1}
                                threshold={0.2}
                                delay={500}

                            >
                                <a className='flex items-center gap-4 text-white group '
                                    href='mailto:patcharadol.soimanee@gmail.com'>
                                    <span className="w-12 h-12 rounded-full bg-white/10 group-hover:bg-electric-blue group-hover:scale-110 flex items-center justify-center duration-300 ease-in-out ">
                                        <MdMailOutline className='text-2xl' />
                                    </span>
                                    <div className='flex flex-col'>
                                        <p
                                        className="font-label-caps text-label-caps text-soft-gray uppercase tracking-widest opacity-60">
                                        Email Me</p>
                                    <span className="font-body-md group-hover:text-electric-blue duration-300">patcharadol.soimanee@gmail.com</span>
                                    </div>
                                    
                                </a>
                            </AnimatedContent>
                            <AnimatedContent
                                distance={30}
                                direction="vertical"
                                reverse={false}
                                config={{ tension: 100, friction: 50 }}
                                initialOpacity={0}
                                animateOpacity
                                scale={1}
                                threshold={0.2}
                                delay={500}

                            >
                                <div className='flex items-center gap-4 text-white group '
                                    >
                                    <span className="w-12 h-12 rounded-full bg-white/10 group-hover:bg-electric-blue group-hover:scale-110 flex items-center justify-center duration-300 ease-in-out ">
                                        <IoLocationOutline className='text-2xl' />
                                    </span>
                                    <div className='flex flex-col'>
                                        <p
                                        className="font-label-caps text-label-caps text-soft-gray uppercase tracking-widest opacity-60">
                                        Base in</p>
                                    <span className="font-body-md group-hover:text-electric-blue duration-300">Bangkok, Thailand</span>
                                    </div>
                                    
                                </div>
                            </AnimatedContent>
                            <AnimatedContent
                                distance={30}
                                direction="vertical"
                                reverse={false}
                                config={{ tension: 100, friction: 50 }}
                                initialOpacity={0}
                                animateOpacity
                                scale={1}
                                threshold={0.2}
                                delay={600}

                            >
                                <div className='flex items-center gap-6 pt-4 duration-300'>
                                    <a className='w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-electric-blue hover:border-electric-blue transition-all' href='https://www.facebook.com/Fxrd.dd/' target='_blank' rel='noopener noreferrer'>
                                        <FaFacebookF className='text-lg' />
                                    </a>
                                    <a className='w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-electric-blue hover:border-electric-blue transition-all' href='https://www.instagram.com/friendaly.stu' target='_blank' rel='noopener noreferrer'>
                                        <FaInstagram className='text-lg' />
                                    </a>
                                    <a className='w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-electric-blue hover:border-electric-blue transition-all' href='https://www.linkedin.com/in/patcharadol-soimanee' target='_blank' rel='noopener noreferrer'>
                                        <FaLinkedinIn className='text-lg' />
                                    </a>
                                    <a className='w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-electric-blue hover:border-electric-blue transition-all' href='https://www.behance.net/Patcharadol' target='_blank' rel='noopener noreferrer'>
                                        <FaBehance className='text-lg' />
                                    </a>

                                </div>
                            </AnimatedContent>
                        </div>
                    </div>
                    {/* Form contact */}
                    <AnimatedContent
                        distance={80}
                        direction="vertical"
                        reverse={false}
                        config={{ tension: 100, friction: 50 }}
                        initialOpacity={0}
                        animateOpacity
                        scale={1}
                        threshold={0.2}
                        delay={300}

                    >
                        <form onSubmit={handleSubmit} className=" p-8 md:p-12 scale-80 md:scale-90 2xl:scale-100 outline-2 outline-white/10 shadow-2xl rounded-2xl max-h-auto max-w-auto ">

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
                                    className={Allstype}
                                />
                            </div>

                            <div className="relative grid md:grid-cols-1 lg:grid-cols-2 items-center space-y-2 md:space-y-0 md:gap-4 py-2">
                                <div className="gap-2 flex items-center">
                                    <label htmlFor="name">Name:</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        value={values.name}
                                        onChange={handleChange}
                                        placeholder="Your Name"
                                        className={`w-full ${Allstype}`}
                                    />
                                </div>
                                <div className="gap-2 flex items-center">
                                    <label htmlFor="email">Email:</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        value={values.email}
                                        onChange={handleChange}
                                        placeholder="Your Email"
                                        className={`w-full ${Allstype}`}
                                    />
                                </div>
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
                                    className={`w-full h-auto ${Allstype}`}
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

                                    className={`px-4 py-2 rounded-xl font-medium text-white ${isLoading
                                        ? 'bg-blue-300 outline-2 outline-blue-800 cursor-not-allowed'
                                        : 'bg-blue-400 hover:bg-blue-600 cursor-pointer'
                                        }`}
                                >
                                    <div className='flex flex-row' >
                                        <RiLoader4Fill className={`${isLoading ? 'flex animate-spin fill-blue-900 w-7 h-7' : ' hidden'}`} />
                                        {isLoading ? '' : 'SUBMIT'}
                                    </div>

                                </button>


                            </div>

                        </form>
                    </AnimatedContent>
                    <ToastContainer position="top-right" autoClose={3000} className={"text-black absolute"} />
                </div>
            </div>
        </section>
    )
}
