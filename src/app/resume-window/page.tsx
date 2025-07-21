'use client'

import dynamic  from 'next/dynamic';
import Resume from './resume';

// this is flagging an error because the file we are accessing is empty
const resume = dynamic(() => import('./resume'), { ssr: false }); 

export default function ResumeViewer() {
    return (
        <div>
            <Resume/>            
        </div>

    )


}