"use client"
import React, { useEffect, useState, useContext } from 'react'
import dynamic from 'next/dynamic'
import Lookup from '@/data/Lookup';
import { MessagesContext } from '@/context/MessagesContext';
import Prompt from '@/data/Prompt';
import axios from 'axios';
import { useConvex, useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { useParams } from 'next/navigation';
import { Loader2Icon } from 'lucide-react';
import { countToken } from './ChatView';
import { UserDetailContext } from '@/context/UserDetailContext';

// Carga componentes de Sandpack solo en cliente
const SandpackProvider = dynamic(
  () => import("@codesandbox/sandpack-react").then((mod) => mod.SandpackProvider),
  { ssr: false }
);

const SandpackLayout = dynamic(
  () => import("@codesandbox/sandpack-react").then((mod) => mod.SandpackLayout),
  { ssr: false }
);

const SandpackCodeEditor = dynamic(
  () => import("@codesandbox/sandpack-react").then((mod) => mod.SandpackCodeEditor),
  { ssr: false }
);

const SandpackPreview = dynamic(
  () => import("@codesandbox/sandpack-react").then((mod) => mod.SandpackPreview),
  { ssr: false }
);

const SandpackFileExplorer = dynamic(
  () => import("@codesandbox/sandpack-react").then((mod) => mod.SandpackFileExplorer),
  { ssr: false }
);

function CodeView() {
  const { id } = useParams();
  const { userDetail, setUserDetail } = useContext(UserDetailContext)
  const [activeTab, setActiveTab] = useState('code');
  const [files, setFiles] = useState(Lookup?.DEFAULT_FILE)
  const { messages, setMessages } = useContext(MessagesContext);
  const UpdateFiles = useMutation(api.dash.UpdateFiles);
  const convex = useConvex();
  const [loading, setLoading] = useState(false);
  const UpdateTokens = useMutation(api.users.UpdateToken);

  useEffect(() => {
    id && GetFiles();
  }, [id])

  const GetFiles = async () => {
    setLoading(true);
    const result = await convex.query(api.dash.GetDash, {
      dashId: id
    });
    const mergedFiles = { ...Lookup.DEFAULT_FILE, ...result?.fileData }
    setFiles(mergedFiles);
    setLoading(false);
  }

  useEffect(() => {
    if (messages?.length > 0) {
      const role = messages[messages?.length - 1].role;
      if (role === 'user') {
        GenerateAiCode();
      }
    }
  }, [messages])

  const GenerateAiCode = async () => {
    setLoading(true);
    const PROMPT = JSON.stringify(messages) + " " + Prompt.CODE_GEN_PROMPT;
    const result = await axios.post('/api/gen-ai-code', {
      prompt: PROMPT
    });
    
    const aiResp = result.data;
    const mergedFiles = { ...Lookup.DEFAULT_FILE, ...aiResp?.files }
    setFiles(mergedFiles);
    
    await UpdateFiles({
      dashId: id,
      files: aiResp?.files
    });

    const token = Number(userDetail?.token) - Number(countToken(JSON.stringify(aiResp)));

    setUserDetail(prev=>({
      ...prev,
      token:token
    }))
    await UpdateTokens({
      userId: userDetail?._id,
      token: token
    })

    setActiveTab('code')
    setLoading(false);
  }

  return (
    <div className='relative'>
      <div className='bg-neutral-900/70 backdrop-blur-sm border-white/10 w-full p-2 border rounded-lg mb-3 flex justify-between items-center'>
        {/* Botones izquierda (Code y Preview) */}
        <div className='flex items-center text-white flex-wrap shrink-0 bg-transparent p-1 gap-2 rounded-lg'>
          <h2
            onClick={() => setActiveTab('code')}
            className={`text-sm cursor-pointer p-1 px-2 ${activeTab == 'code' && 'text-black bg-white rounded-lg'}`}>
            Code
          </h2>
          <h2
            onClick={() => setActiveTab('preview')}
            className={`text-sm cursor-pointer p-1 px-2 ${activeTab == 'preview' && 'text-black bg-white rounded-lg'}`}>
            Preview
          </h2>
        </div>

        {/* Botones derecha (Export y Deploy) */}
        <div className='flex items-center text-white flex-wrap shrink-0 bg-transparent p-1 gap-2 rounded-lg'>
          <h2
            className="text-sm cursor-pointer p-1 px-2 hover:bg-white/10 rounded-lg transition-colors">
            Export
          </h2>
          <h2
            className="text-sm cursor-pointer p-1 px-2 hover:bg-white/10 rounded-lg transition-colors">
            Deploy
          </h2>
        </div>
      </div>

      {files && (
        <SandpackProvider
          files={files}
          template="react"
          theme={'dark'}
          customSetup={{
            dependencies: {
              ...Lookup.DEPENDANCY
            }
          }}
          options={{
            externalResources: ['https://cdn.tailwindcss.com/']
          }}
        >
          <SandpackLayout>
            {activeTab == 'code' ? (
              <>
                <SandpackFileExplorer style={{ height: '78vh' }} />
                <SandpackCodeEditor style={{ height: '78vh', width:'200vh' }} />
              </>
            ) : (
              <SandpackPreview style={{ height: '78vh', width:'200vh' }} showNavigator={true} />
            )}
          </SandpackLayout>
        </SandpackProvider>
      )}

      {loading && (
        <div className='p-10 bg-neutral-900 opacity-70 absolute top-0 rounded-lg w-full h-full flex items-center justify-center'>
          <Loader2Icon className='animate-spin h-10 w-10 text-white' />
          <h2 className='text-neutral-500 ml-3'>Generating code...</h2>
        </div>
      )}
    </div>
  )
}

export default CodeView