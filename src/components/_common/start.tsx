import clsx from 'clsx';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { IoArrowUp } from 'react-icons/io5';

const Start = () => {
  const [displayed, setDisplayed] = useState(false);

  useEffect(() => {
    const scrollListener = () => {
      const scrolled = document.documentElement.scrollTop;
      const pageHeight = window.innerHeight;

      if(scrolled >= pageHeight) {
        setDisplayed(true);
      } else {
        setDisplayed(false);
      }
    };

    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener("scroll", scrollListener);
    }
  }, []);

  return (
    <Link href="/">
      <a className={clsx("cursor-hover", 'fixed z-40 bottom-4 right-4 h-12 w-12 flex justify-center items-center rounded-full bg-pink-500/20 border-2 border-pink-500 duration-300', {
        "opacity-0 pointer-events-none": !displayed,
        "opacity-100": displayed,
      })}>
        <IoArrowUp className='text-xl text-pink-500'/>
      </a>
    </Link>
  )
}

export default Start;
