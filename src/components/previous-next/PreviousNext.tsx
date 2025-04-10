'use client';


import './PreviousNext.css'

interface PreviousNextProps {
  className?: string;
  previousUrl?: string;
  nextUrl?: string;
  backUrl?: string;
}

export default function PreviousNext({ className, previousUrl = "/", nextUrl = "/",backUrl="/#work" }: PreviousNextProps) {
  const navigateTo = (url: string) => {
    window.location.href = url;
  };

  return (
    <div className="flex justify-between w-full py-12">
      <h2 className={`font-antonio font-light text-back-case uppercase cursor-pointer ${className}`} onClick={() => navigateTo(backUrl)}>
        back to <br /> more cases
      </h2>
      <div className={`flex justify-end items-end text-pre-next font-bold gap-6 w-1/2 font-Poppins ${className}`}>
        <h4 className="uppercase cursor-pointer" onClick={() => navigateTo(previousUrl)}>Previous</h4>
        <h4 className="uppercase cursor-pointer" onClick={() => navigateTo(nextUrl)}>Next</h4>
      </div>
    </div>
  );
}

