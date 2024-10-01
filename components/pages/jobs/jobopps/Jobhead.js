import React from 'react'

const Jobhead = ({t}) => {
  return (

    <section id="video-header" className="video-header-top flex h-[40vh] items-center justify-center flex-col text-center pl-5 pr-5 mt-7 mb-[-20px]">
    <h1 className='text-4xl mb-4 font-semibold'>{t.job.h1}</h1>
    <div id="line"></div>
    <p className='text-xl'>{t.job.p}</p>
</section>
  )
}

export default Jobhead