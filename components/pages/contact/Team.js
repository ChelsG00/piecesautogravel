import React from 'react'
import Image from 'next/image'

const Team = ({t}) => {
  return (

    <section className='pl-5 pr-5 pt-24 pb-7 bg-[#f0f0f0]'>
    
    <div className='lg:ml-32 lg:mr-32'>
    <h1 className='text-3xl uppercase pb-2'>{t.contact.meet}</h1>
    <p className='text-xl pb-3 leading-9 lg:w-[70vw]'>{t.contact.textmeet} </p>
    <p className='text-xl pb-3 leading-9'>{t.contact.texttwo}</p>
    <div className="meet-the-team">

      <h2 className='text-3xl mt-7 mb-5'>{t.representatives.mech1}</h2>
      <div className="mb-10">
        <Image src="/img/team-img/team-christian.jpg" width={600} height={600} alt="Picture of a man standing infront of a white and black background" title="Christan Team Picture" className='w-full h-auto lg:w-[500px]'/>
        <h3 className='text-2xl mt-2'>Christian Hamel</h3>
        <p className='text-xl'>{t.representatives.title}</p>
        <a href="tel:450-990-9999" className='block text-xl mt-2 text-[#0b54a2] underline'>450-990-9999</a>
        <a href="tel:450-435-8335" className='block text-xl mt-2 text-[#0b54a2] underline'>450-435-8335 ext 822</a>
        <a href="mailto:christian@pagravel.com" className='block text-xl mt-2 text-[#0b54a2] underline'>Christian@pagravel.com</a>
      </div>

      <h2 className='text-3xl mt-7 mb-5'>{t.representatives.title}</h2>
      <div className='lg:flex'>
      <div className="mb-10 lg:mr-10">
        <Image src="/img/team-img/team-yvon.jpg" width={600} height={600} alt="Picture of a man standing infront of a white and black background" title="Yvon Team Picture" className='w-full h-auto lg:w-[500px]'/>
        <h3 className='text-2xl mt-2'>Yvon Trépanier</h3>
        <p className='text-xl'>{t.representatives.titletwo}</p>
        <a href="tel:450-435-8335" className='block text-xl mt-2 text-[#0b54a2] underline'>450-435-8335 ext 821</a>
        <a href="mailto:gravelrecyclage@videotron.ca" className='block text-xl mt-2 text-[#0b54a2] underline'>Gravelrecyclage@videotron.ca</a>
      </div>

      <div className="mb-10">
        <Image src="/img/team-img/team-patrice.jpg" width={600} height={600} alt="Picture of a man standing infront of a white and black background" title="Patrice Team Picture" className='w-full h-auto lg:w-[500px]'/>
        <h3 className='text-2xl mt-2'>Patrice Ravary</h3>
        <p className='text-xl'>{t.representatives.titlethree}</p>
        <a href="tel:450-435-8335" className='block text-xl mt-2 text-[#0b54a2] underline'>450-435-8335 ext 721</a>
        <a href="mailto:patrice@pagravel.com" className='block text-xl mt-2 text-[#0b54a2] underline'>Patrice@pagravel.com</a>
      </div>
      </div>
      <div className='lg:flex '>
      <div className="mb-10 lg:mr-10">
        <Image src="/img/team-img/team-francis.jpg" width={600} height={600} alt="Picture of a man standing infront of a white and black background" title="Francis Team Picture" className='w-full h-auto lg:w-[500px]'/>
        <h3 className='text-2xl mt-2'>Francis St-Pierre</h3>
        <p className='text-xl'>{t.representatives.titlefour}</p>
        <a href="tel:450-438-3241" className='block text-xl mt-2 text-[#0b54a2] underline'>450-438-3241 ext 823</a>
        <a href="mailto:francis@pagravel.com" className='block text-xl mt-2 text-[#0b54a2] underline'>francis@pagravel.com</a>
      </div>

      <div className="mb-10">
        <Image src="/img/team-img/team-mike.jpg" width={600} height={600} alt="Picture of a man standing infront of a white and black background" title="Mike Team Picture/" className='w-full h-auto lg:w-[500px]'/>
        <h3 className='text-2xl mt-2'>Mike Coulombe</h3>
        <p className='text-xl'>{t.representatives.titlefive}</p>
        <a href="tel:450-438-3241" className='block text-xl mt-2 text-[#0b54a2] underline'>450-438-3241 ext 731</a>
        <a href="mailto:mike@pagravel.com" className='block text-xl mt-2 text-[#0b54a2] underline'>mike@pagravel.com</a>
      </div>
      </div>
      <h2 className='text-3xl'>{t.representatives.operationsh1}</h2>
      <div className="mb-10">
        <Image src="/img/team-img/team-jimmy.jpg" width={600} height={600} alt="Picture of a man standing infront of a white and black background" title="Jimmy Team Picture" className='w-full h-auto lg:w-[500px]'/>
        <h3 className='text-2xl mt-2'>Jimmy Paradis</h3>
        <p className='text-xl'>{t.representatives.optitle}</p>
        <a href="tel:450-438-3241" className='block text-xl mt-2 text-[#0b54a2] underline'>450-438-3241 ext 727 </a>
        <a href="mailto:jimmy@pagravel.com" className='block text-xl mt-2 text-[#0b54a2] underline'>jimmy@pagravel.com</a>
      </div>

      <h2 className='text-3xl'>{t.representatives.administrationh1}</h2>
      <div className='lg:flex'>
      <div className="mb-10 lg:mr-10">
        <Image src="/img/team-img/team-guylaine.jpg" width={600} height={600} alt="Picture of a woman standing infront of a white and black background" title="Guylaine Team Picture" className='w-full h-auto lg:w-[500px]'/>
        <h3 className='text-2xl mt-2'>Guylaine St-Denis</h3>
        <p className='text-xl'>{t.representatives.admintitle}</p>
        <a href="tel:450-435-8335" className='block text-xl mt-2 text-[#0b54a2] underline'>450-435-8335 ext 730</a>
        <a href="mailto:guylaine@pagravel.com" className='block text-xl mt-2 text-[#0b54a2] underline'>Guylaine@pagravel.com</a>
      </div>

      <div className="mb-10">
        <Image src="/img/team-img/team-anick.jpg" width={600} height={600} alt="Picture of a woman standing infront of a white and black background" title="Annick Team Picture" className='w-full h-auto lg:w-[500px]'/>
        <h3 className='text-2xl mt-2'>Annick Taillon</h3>
        <p className='text-xl'>{t.representatives.admintitletwo}</p>
        <a href="tel:450-438-3241" className='block text-xl mt-2 text-[#0b54a2] underline'>450-438-3241 ext 725</a>
        <a href="mailto:garainc@videotron.ca" className='block text-xl mt-2 text-[#0b54a2] underline'>Garainc@videotron.ca</a>
      </div>
      </div>
    </div>
    </div>
  </section>
  )
}

export default Team