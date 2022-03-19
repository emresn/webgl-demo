import Link from 'next/link';
import * as React from 'react';
import { RiAlarmWarningFill } from 'react-icons/ri';

export default function NotFoundPage() {
  return (
    <main>
      <section className='bg-white'>
        <div className='flex flex-col items-center justify-center layout min-h-screen text-black text-center'>
          <RiAlarmWarningFill
            size={60}
            className='animate-flicker drop-shadow-glow text-red-500'
          />

          <Link href={'/'}>
            <a>
              <div className='mt-4 md:text-lg'>Back to Home</div>
            </a>
          </Link>
        </div>
      </section>
    </main>
  );
}
