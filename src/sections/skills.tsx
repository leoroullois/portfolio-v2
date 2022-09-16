import Technologies from '@components/technologies';
import Bars from '@components/_common/bars';
import Title from '@components/_common/title';
import Wrapper from '@components/_common/wrapper';
import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';
import {Fade} from 'react-awesome-reveal';

const Skills = () => {
  return (
    <section
      id='skills'
      className={clsx(
        'relative z-30 py-5 bg-slate-900 text-gray-50 mt-[60px]',
        'after:z-10 after:absolute after:inset-0 after:w-0 after:h-0',
        'after:border-0 after:-top-[60px] after:border-b-[60px] after:border-l-[100vw]',
        'after:border-transparent after:border-b-slate-900'
      )}
    >
      <Wrapper className='relative z-20 gap-y-5 flex-col'>
        <Title as='h2'>My skills</Title>
        <h2 className='text-center text-3xl font-serif font-semibold'>
          Which technologies do I use?
        </h2>
        <Bars theme='blue' align='center' />
        <div className='flex flex-col gap-y-8'>
          <Fade triggerOnce cascade damping={0.5}>
            <Technologies category='Web' />
            <Technologies category='API & Database' />
            <Technologies category='Tools & other' />
          </Fade>
        </div>
        <p>
          Visit my GitHub :{' '}
          <Link href='https://www.github.com/leoroullois'>
            <a
              className={clsx(
                'cursor-hover',
                'relative duration-100 z-20 text-pink-500',
                'after:absolute after:left-0 after:-bottom-[3px] after:w-full after:bg-pink-500/10 after:h-[2px] bg-transparent after:z-10 after:duration-100',
                'hover:after:bg-pink-500/10 hover:after:h-[24px]'
              )}
            >
              @leoroullois
            </a>
          </Link>
        </p>
      </Wrapper>
    </section>
  );
};

export default Skills;
