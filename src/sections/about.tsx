import React, {FC} from 'react';

import Button from '@components/button';
import Bars from '@components/_common/bars';
import Wrapper from '@components/_common/wrapper';
import clsx from 'clsx';
import {BsFillFileEarmarkPdfFill} from 'react-icons/bs';
import {Fade} from 'react-awesome-reveal';
import Link from 'next/link';

const Canvas = React.lazy(() => import('@components/threejs/canvas'));

const About: FC = () => {
  return (
    <section id='about' className='py-5'>
      <Wrapper className='flex-col gap-y-5'>
        <Fade triggerOnce>
          <h2 className='text-3xl font-serif font-semibold'>About me</h2>
          <Bars theme='black' align='left' />
        </Fade>
        <div
          className={clsx(
            'grid gap-5 auto-rows-auto grid-cols-1',
            'sm:grid-cols-3'
          )}
        >
          <div
            className={clsx(
              'flex flex-col justify-around gap-y-5 sm:col-span-2'
            )}
          >
            <Fade triggerOnce cascade>
              <p>
                I am a freelance developer specialized in the creation of React,
                Next.js, Node, JavaScript applications and websites. I have a
                fullstack profile but quite front-end oriented. I&apos;m
                interested in everything an app developer should know: clean
                architecture, information systems security, good code
                practices...
              </p>
              <p>
                I am currently specializing in cybersecurity at ESIEE Paris engineering school, and I am looking for an internship in this field (4 months from May to August 2023). 
              </p>
              <p>
                <Link href="#contact">
                  <a>
                    You can contact me if you want to hire me.
                  </a>
                </Link>
              </p>
              <Button type='primary' href='/cv.pdf'>
                <BsFillFileEarmarkPdfFill className='text-xl mr-6' />
                Téléchargez mon CV !
              </Button>
            </Fade>
          </div>
          <div className='h-96'>
            <Canvas />
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default About;
