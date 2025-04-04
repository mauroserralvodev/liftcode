"use client";
import SignInDialog from '@/components/ui/custom/SignInDialog';
import { MessagesContext } from '@/context/MessagesContext';
import { UserDetailContext } from '@/context/UserDetailContext';
import { api } from '@/convex/_generated/api';
import Lookup from '@/data/Lookup';
import { useMutation } from 'convex/react';
import { ArrowRight, Loader2 } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useContext, useState, useEffect } from 'react';

function Page() {
    const [userInput, setUserInput] = useState();
    const { messages, setMessages } = useContext(MessagesContext);
    const { userDetail, setUserDetail } = useContext(UserDetailContext);
    const [openDialog, setOpenDialog] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const CreateDash = useMutation(api.dash.CreateDash);
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [showCreditNotification, setShowCreditNotification] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const onGenerate = async (input) => {
        if (userDetail?.token < 100) {
            setShowCreditNotification(true);
            return;
        }
        setLoading(true);
        if (!userDetail?.name) {
            setOpenDialog(true);
            setLoading(false);
            return;
        }
        
        const msg = {
            role: 'user',
            content: input
        };
        setMessages([...messages, msg]);

        const dashId = await CreateDash({
            user: userDetail._id,
            messages: [msg]
        });
        
        router.push('/dash/' + dashId);
        setLoading(false);
    };

    useEffect(() => {
        if (showCreditNotification) {
            const timer = setTimeout(() => {
                setShowCreditNotification(false);
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [showCreditNotification]);

    return (
        <>
            {isMobile ? (
                <div className="py-36 h-screen bg-neutral-950 w-full mx-auto">
                    <Link href="/" className="mb-6 px-10 flex items-center justify-center">
                        <img src="logo.png" className="w-48 sm:w-64" alt="Logo" />
                    </Link>
                    <h2 className="text-xl px-10 font-medium text-white text-center">
                        This page is only available in the desktop version, sorry for the inconvenience.
                    </h2>
                    <div className="flex justify-center items-center mt-10">
                        
                        <a
                            className="border border-neutral-700 bg-white/95 text-black px-3 py-2 rounded-lg mr-2 inline-flex items-center gap-x-2"
                            href="https://brinpage.com"
                        >
                            Discover more
                            <svg
                                className="shrink-0 size-4"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="m9 18 6-6-6-6" />
                            </svg>
                        </a>
                    </div>
                </div>
            ) : (
                <div className="relative h-[50rem] sm:h-[59rem] w-full flex items-center justify-center">
                    <div className="flex flex-col items-center py-24 px-56 gap-2 max-w-6xl mx-auto rounded-[2rem] backdrop-blur-sm">
                        <Link href="/" className="flex text-lg items-center text-white mb-6">
                            <img src="logow.png" className="w-48 sm:w-64" alt="Logo" />
                        </Link>
                        <div className="p-5 border border-white/30 rounded-xl w-full mt-3 bg-neutral-200/20 min-w-[38rem]">
                            <div className="flex gap-2">
                                <textarea
                                    placeholder={Lookup.INPUT_PLACEHOLDER}
                                    onChange={(event) => setUserInput(event.target.value)}
                                    className="outline-none bg-transparent w-full h-32 max-h-52 resize-none text-neutral-200 placeholder:text-neutral-200"
                                />
                                {userInput && (
                                    <ArrowRight 
                                        onClick={() => onGenerate(userInput)}
                                        className="h-8 w-8 p-2 rounded-md bg-white/70 text-neutral-800 cursor-pointer border border-white/10 hover:bg-white/20 transition"
                                    />
                                )}
                            </div>
                        </div>
                        <p className="mb-10 text-neutral-200 mt-2 text-sm text-left">
                            By using Liftcode AI you accept the{" "}
                            <a href="/terms" className="hover:underline hover:text-neutral-900">
                                terms and conditions
                            </a>{" "}
                            of the platform.
                        </p>
                    </div>

                    <SignInDialog openDialog={openDialog} closeDialog={(v) => setOpenDialog(v)}/>

                    {loading && (
                        <div className="p-10 bg-neutral-900 opacity-70 absolute top-0 rounded-lg w-full h-full flex items-center justify-center">
                            <Loader2 className="animate-spin h-10 w-10 text-white" />
                            <h2 className="text-white ml-3">Generating code...</h2>
                        </div>
                    )}

                    {showCreditNotification && (
                        <div className="fixed top-4 right-4 bg-red-600/90 text-white px-6 py-3 rounded-lg backdrop-blur-sm flex items-center gap-4 animate-fade-in">
                            <div>
                                <p className="font-medium">Insufficient credits!</p>
                                <p className="text-sm">You need at least 100 credits to proceed.</p>
                                <Link href="/pricing" className="text-sm underline mt-1 inline-block hover:text-blue-200">
                                    Purchase more credits →
                                </Link>
                            </div>
                            <button 
                                onClick={() => setShowCreditNotification(false)}
                                className="hover:bg-white/10 p-1 rounded-full"
                            >
                                ×
                            </button>
                        </div>
                    )}
                </div>
            )}
        </>
    );
}

export default Page;