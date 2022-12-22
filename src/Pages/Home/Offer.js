import React from 'react';
import logo1 from '../../../src/assets/offerlogo/logo3.png'
import logo2 from '../../../src/assets/offerlogo/clock.png'
import logo3 from '../../../src/assets/offerlogo/secuirity.png'
import logo4 from '../../../src/assets/offerlogo/logo4.png'

const Offer = () => {
    return (
        <div data-aos="fade-up"
        data-aos-duration="1000">
            <div className='text-center mt-32'>
                <p className="text-2xl font-bold">Extra Facilities</p>
                <p className='mb-16'>Some Extra Facilities here that help you to choose PickFood</p>
            </div>
            <div className='grid grid-cols-1 gap-5 lg:grid-cols-4 md:grid-cols-2 items-center  rounded-lg my-8 '>
                <div className='border rounded-lg p-8 '>
                    <div className='flex items-center'>
                        <img src={logo1} alt="" height={80} width={100} />
                        <p className='pl-2 text-xl font-bold'>Fast Delivery</p>
                    </div>
                </div>
                <div className='border rounded-lg p-8'>
                    <div className='flex items-center'>
                        <img src={logo2} alt="" height={70} width={87} />
                        <p className='pl-2 text-xl font-bold'>24/7 Services</p>
                    </div>
                </div>
                <div className='border rounded-lg p-8'>
                    <div className='flex items-center'>
                        <img src={logo3} alt="" height={80} width={105} />
                        <p className='pl-2 text-xl font-bold'>Secure Payment</p>
                    </div>
                </div>
                <div className='border rounded-lg p-8'>
                    <div className='flex items-center'>
                        <img src={logo4} alt="" height={80} width={60} />
                        <p className='pl-2 text-xl font-bold'>Online Delivery</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Offer;