'use client';

import { useEffect } from 'react';
import Aos from 'aos';

import HomeExercience from '@/features/home/HomeExercience';
import HomeProfile from '@/features/home/HomeProfile';
import HomePtProgram from '@/features/home/HomePtProgram';
import HomeSearch from '@/features/home/HomeSearch';
import HomeTrainingProgram from '@/features/home/HomeTrainingProgram';

export default function HomePage() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <HomeSearch />
      <HomeExercience />
      <HomePtProgram />
      <HomeTrainingProgram />
      <HomeProfile />
    </>
  );
}
