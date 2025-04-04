"use client"
import { MessagesContext } from '@/context/MessagesContext';
import { UserDetailContext } from '@/context/UserDetailContext';
import { api } from '@/convex/_generated/api';
import Prompt from '@/data/Prompt';
import axios from 'axios';
import { useConvex, useMutation } from 'convex/react';
import { ArrowRight, Loader2Icon } from 'lucide-react';
import Image from 'next/image';
import { useParams } from 'next/navigation'
import React, { useContext, useEffect, useRef, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { useSidebar } from '../sidebar';
import Link from 'next/link';

export const countToken = (inputText) => {
  return inputText.trim().split(/\s+/).filter(word => word).length;
};

function ChatView() {
  const {id} = useParams();
  const convex = useConvex();
  const {userDetail, setUserDetail} = useContext(UserDetailContext)
  const {messages, setMessages} = useContext(MessagesContext);
  const [userInput, setUserInput] = useState('');
  const [loading, setLoading] = useState(false);
  const UpdateMessages = useMutation(api.dash.UpdateMessages);
  const {toggleSidebar} = useSidebar();
  const UpdateTokens = useMutation(api.users.UpdateToken);
  const [showCreditNotification, setShowCreditNotification] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: containerRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [messages, loading]);

  useEffect(() => {
    id && GetDashData();
  }, [id])

  const GetDashData = async () => {
    const result = await convex.query(api.dash.GetDash, { dashId: id });
    setMessages(Array.isArray(result?.messages) ? result.messages : []);
  }

  useEffect(() => {
    if (Array.isArray(messages) && messages.length > 0) {
      const role = messages[messages.length - 1].role;
      if (role === 'user') {
        GetAiResponse();
      }
    }
  }, [messages])

  const GetAiResponse = async () => {
    setLoading(true);
    try {
      const PROMPT = JSON.stringify(messages) + Prompt.CHAT_PROMPT;
      
      const result = await axios.post('/api/ai-chat', { 
        prompt: PROMPT 
      }).catch(error => {
        console.error("Error en la petición:", error.response?.data || error.message);
        throw new Error("Error al conectar con el servidor");
      });
  
      const apiResponse = result.data?.result || "";
      
      let cleanResponse = apiResponse
        .replace(/\"role\":\s*\"assistant\"\,\s*\"content\":\s*\"/gi, '')
        .replace(/^["'{]+|["'}]+$/g, '')
        .replace(/\\n/g, '\n')
        .trim();
  
      if ((cleanResponse.startsWith('{') || cleanResponse.startsWith('['))) {
        try {
          const parsed = JSON.parse(cleanResponse);
          cleanResponse = parsed.content || parsed.response || parsed.message || apiResponse;
        } catch {}
      }
  
      if (!cleanResponse) {
        throw new Error("La respuesta está vacía");
      }
  
      const aiResp = {
        role: 'ai',
        content: cleanResponse
      };
  
      const newMessages = [...(messages || []), aiResp];
      
      setMessages(newMessages);
      await UpdateMessages({
        messages: newMessages,
        dashId: id
      });
      
      // Actualización corregida de tokens
      const tokensUsed = 1; // Define cuántos tokens consumes por solicitud
      setUserDetail(prev => ({
        ...prev,
        token: prev.token - tokensUsed
      }));
      
      await UpdateTokens({
        userId: userDetail?._id,
        token: userDetail.token - tokensUsed
      });
  
    } catch (error) {
      console.error("Error completo:", error);
      setMessages(prev => [...(prev || []), {
        role: 'ai',
        content: "⚠️ Error: " + (error.message || "No se pudo generar la respuesta")
      }]);
    } finally {
      setLoading(false);
    }
  }

  const onGenerate = (input) => {
    if(userDetail?.token < 100){
      setShowCreditNotification(true);
      return;
    }
    setMessages(prev => [...(prev || []), {
      role: 'user',
      content: input
    }]);
    setUserInput('');
  }

  useEffect(() => {
    if(showCreditNotification) {
      const timer = setTimeout(() => {
        setShowCreditNotification(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [showCreditNotification]);

  return (
    <div className='relative h-[85vh] flex flex-col'>
      <div 
        ref={containerRef}
        className='flex-1 overflow-y-scroll scrollbar-hide'
      >
        {Array.isArray(messages) && messages.map((msg, index) => (
          <div 
            key={index}
            className={`p-4 rounded-lg mb-2 flex gap-2 max-w-[80%] ${
              msg.role === 'user' 
                ? 'mr-1 ml-auto bg-neutral-900/70 backdrop-blur-sm border border-white/10 items-center'
                : 'ml-1 mr-auto bg-neutral-950/30 backdrop-blur-sm border border-white/10 items-start'
            }`}
          >
            {msg.role === 'user' ? (
              <>
                <Image 
                  src={userDetail?.picture} 
                  alt='User Image'
                  width={35} 
                  height={35} 
                  className='rounded-full self-start'
                />
                <p className='text-neutral-200'>{msg.content}</p>
              </>
            ) : (
              <>
                <Image 
                  src='/vector.png' 
                  alt='Liftcode AI'
                  width={35} 
                  height={35} 
                  className='mt-1 self-start p-1' 
                />
                <div className='text-neutral-200 px-2 flex flex-col'>
                  <ReactMarkdown
                    components={{
                      ul: ({ node, ordered, ...restProps }) => (
                        <ul 
                          className="list-inside space-y-1.5 pl-3" 
                          {...restProps}
                        />
                      ),
                      li: ({ node, ordered, ...restProps }) => (
                        <li
                          className={`relative ${
                            ordered 
                              ? 'pl-4 list-decimal' 
                              : "before:content-['-'] before:absolute before:-left-4 before:text-neutral-400"
                          }`}
                          {...restProps}
                        />
                      ),
                      p: ({ node, ...props }) => (
                        <p className="leading-relaxed" {...props} />
                      ),
                      code: ({ node, ...props }) => (
                        <code className="bg-neutral-900/70 px-1.5 py-0.5 rounded text-sm" {...props} />
                      )
                    }}
                  >
                    {msg.content}
                  </ReactMarkdown>
                </div>
              </>
            )}
          </div>
        ))}

        {loading && (
          <div className='p-3 rounded-lg mb-2 flex gap-2 items-center mr-1 ml-auto bg-transparent'>
            <Loader2Icon className='animate-spin text-white'/>
            <h3 className='text-white'>Creating...</h3>
          </div>
        )}
      </div>

      <div className='flex gap-2 items-end'>
        <div className='p-5 border border-white/10 rounded-xl w-full mt-3 bg-neutral-900/70 backdrop-blur-sm'>
          <div className='flex gap-2'>
            <textarea 
              placeholder='Ask something'
              value={userInput}
              onChange={(event) => setUserInput(event.target.value)}
              className='outline-none bg-transparent w-full h-32 max-h-52 resize-none text-neutral-200 placeholder:text-neutral-200'
            />
            {userInput && 
              <ArrowRight
                onClick={() => onGenerate(userInput)}
                className='h-8 w-8 p-2 rounded-md bg-black/70 text-neutral-200 cursor-pointer border border-white/10 hover:bg-neutral-900 transition'
              />
            }
          </div>
        </div>
      </div>

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
  )
}

export default ChatView