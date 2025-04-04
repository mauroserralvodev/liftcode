import { UserDetailContext } from '@/context/UserDetailContext';
import { useSidebar } from '../sidebar';
import Link from 'next/link';
import Image from 'next/image';
import { useContext } from 'react';

function InsideHeader() {
  const { toggleSidebar } = useSidebar();
  const { userDetail } = useContext(UserDetailContext);

  return (
    <header className="sticky top-0 h-14 w-full border-b border-white/10 bg-neutral-900/80 backdrop-blur-sm z-20">
      <div className="flex items-center justify-between h-full px-4">
        {/* Logo izquierda */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Logo"
            width={140}
            height={0}
            className=" object-contain"
            priority
          />
        </Link>

        {/* Foto de usuario derecha */}
        {userDetail?.picture && (
          <div 
            className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
            onClick={toggleSidebar}
          >
            <Image
              src={userDetail.picture}
              alt="User profile"
              width={40}
              height={40}
              className="h-8 w-8 rounded-full border-2 border-white/20"
            />
          </div>
        )}
      </div>
    </header>
  );
}

export default InsideHeader;