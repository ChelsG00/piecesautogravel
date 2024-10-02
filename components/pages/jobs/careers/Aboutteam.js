import React from 'react'
import Image from 'next/image'

const Aboutteam = ({t}) => {
  return (

        <section className='relative pt-28 mt-12 pl-5 pr-5 pb-7 text-center bg-[#fbfbfb] lg:pt-[100px] lg:mt-[2rem]'>
        <h1 className='text-[30px] uppercase pb-3 font-bold text-[rgba(40,40,40,0.87)]'>{t.careers.about}</h1>
        <p className='text-xl pb-7 leading-9 text-left w-[80vw] mx-auto lg:text-center lg:pb-0'>{t.careers.text}</p>
        <p className='text-xl pb-7 leading-9 text-left w-[80vw] mx-auto lg:text-center lg:pb-10'>{t.careers.texttwo}</p>
        <button className='text-xl pl-8 pr-8 pb-4 pt-4 rounded-sm bg-[#15212d] text-white mb-32 w-[80vw] mx-auto lg:w-[20vw] lg:bg-white lg:border-black lg:border-[1px] lg:text-black'>{t.careers.button}</button>
        <div className='lg:flex lg:justify-around'>

          <div className='relative mb-6'>
            <Image src="/img/outside-new-building-winter.jpg" width={600} height={600}  alt="A picture of the outside of the new Gravel Auto Parts building" title="New Building" className='w-full h-[300px]'/>
            <div className='absolute top-0 left-0 w-full h-[300px] bg-[#13171cde] text-center flex justify-center items-center lg:bg-[rgba(27,84,145,0.71)]'>
            <h1 className='relative z-20 text-3xl font-semibold text-white'>{t.careers.one}</h1>
            </div>
          </div>

          <div className='relative mb-6'>
            <Image src="/img/team-img/mechanic-1.jpg" width={600} height={600}  alt="A picture of a call representative sitting down looking at his computer" title="Team Rep One" className='w-full h-[300px]'/>
            <div className='absolute top-0 left-0 w-full h-[300px] bg-[#13171cde] text-center flex justify-center items-center lg:bg-[rgba(27,84,145,0.71)]'>
            <h1 className='relative z-20 text-3xl font-semibold text-white'>{t.careers.two}</h1>
          </div>
          </div>

          <div className='relative mb-6'>
            <Image src="/img/customer-service-desk.jpg" width={600} height={600}  alt="A picture of a call representative sitting down looking at his computer" title="Team Rep One" className='w-full h-[300px]'/>
            <div className='absolute top-0 left-0 w-full h-[300px] bg-[#13171cde] text-center flex justify-center items-center lg:bg-[rgba(27,84,145,0.71)]'>
            <h1 className='relative z-20 text-3xl font-semibold text-white '>{t.careers.three}</h1>
          </div>
          </div>

          <Image src="/img/outside-new-building-winter.jpg" width={600} height={600}  alt="A picture of the outside of the new Gravel Auto Parts building" title="New Building" className='hidden' />
          <Image src="/img/team-img/mechanic-1.jpg" width={600} height={600}  alt="A picture of a call representative sitting down looking at his computer" title="Team Rep One" className="hidden"/>
          <Image src="/img/customer-service-desk.jpg" width={600} height={600}  alt="A picture of two desks side by side with computers" title="Front Desk" className="hidden"/>
        </div>
    </section>

  )
}

export default Aboutteam