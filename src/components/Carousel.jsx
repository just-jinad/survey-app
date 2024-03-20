import React from 'react'
import { Carousel } from 'flowbite-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Karousel = () => {
  return (
    <>
            


         <div className="flex justify-center mt-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full p-4">
        <div className="h-auto sm:h-full">
          <Carousel className="w-full h-96 md:h-full" style={{height:'50vh'}}>
            <div>
              <img src="https://i.pinimg.com/564x/b2/cd/b2/b2cdb2827da8af8f147adbf0992cc4b3.jpg" alt="..." />
            </div>
            <div>
              <img src="https://i.pinimg.com/564x/b1/66/6e/b1666ec9e6c972e36ce2218c1ddc7ed6.jpg" alt="..." />
            </div>
            <div>
              <img src="https://i.pinimg.com/originals/36/1d/b0/361db086b88b75fa12fbf6761fac2591.gif" alt="..." />
            </div>
            <div>
              <img src="https://i.pinimg.com/564x/20/43/f1/2043f1d13ac0653ccace0a94d3fd6971.jpg" alt="..." />
            </div>
          </Carousel>
        </div>
        <div className="text-center h-full flex flex-col justify-center"  data-aos="fade-up" data-aos-duration="1000">
          <h2 className="text-3xl font-bold mb-4">Lorem Ipsum</h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet risus vitae fermentum consectetur.
            Nulla facilisi. Vestibulum maximus libero id fringilla condimentum. Nulla facilisi.
          </p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Karousel