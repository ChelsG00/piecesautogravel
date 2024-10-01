import React from 'react'
import Image from 'next/image'

const Sponsors = ({t}) => {
  return (
    <section className="bg-[rgb(250,250,250)] pt-12 pb-12 pl-5 pr-5 text-center flex justify-center items-center" id="img-sponsors">

<ul className='lg:flex lg:justify-between lg:w-full lg:items-center pr-5 pl-5'>
              <li>
                  <a href="https://arpac.org/en/" target="_blank">
                      <Image src="/img/logo-arpac.png" width={600} height={600}  alt="Arpac logo, a green recycling icon wrapping a black car" title="Arpac Logo" className='max-w-[200px] pt-6 pb-6 mx-auto w-[100px]'/>
                  </a>
              </li>
              <li>
                  <a href="https://ecopieces.ca/en/" target="_blank">
                      <Image src="/img/logo-ecopieces.svg" width={600} height={600}  alt="Ecopieces logo, a green car with a green leaf as the front door" title="Ecopieces Logo" className='max-w-[200px] pt-6 pb-6 mx-auto w-[200px]' />
                  </a>
              </li>
              <li>
                  <a href="https://gara.ca/myaccount.asp" target="_blank">
                      <Image src="/img/logo-gara.svg" width={600} height={600}  alt="Gara logo, a black car facing left with a red bar curving from the front to the end" title="Gara Logo" className='max-w-[200px] pt-6 pb-6 mx-auto w-[200px]'/>
                  </a>
              </li>
              <li>
                  <a href="http://carec.ca/carec-en-homepage.html" target="_blank">
                      <Image src="/img/logo-arc.png" width={600} height={600}  alt="ARC logo, a red maple lead surrounded by the arc logo" title="ARC Logo" className='max-w-[200px] pt-6 pb-6 mx-auto w-[100px]'/>
                  </a>
              </li>
              <li>
                  <a href="https://www.amvoq.ca/" target="_blank">
                      <Image src="/img/logo-amvoq.png" width={600} height={600}  alt="Amvoq logo, a dark blue steering wheel to the left of the letters AMVOQ" title="AMVOQ logo" className='max-w-[200px] pt-6 pb-6 mx-auto w-[150px]'/> 
                  </a>
              </li>
              <li id="bottom-img">
                  <a href="https://www.qrpcanada.ca/" target="_blank">
                      <Image src="/img/qrp-transparent.svg" width={600} height={600}  alt="QRP logo, quality Recycled Parts, a white maple lead in the center of the letter Q.The QRP logo is green" title="QRP logo" className='max-w-[200px] pt-6 pb-6 mx-auto w-[170px]'/>
                  </a>
              </li>
          </ul>

    </section>
  )
}

export default Sponsors