import React from 'react';

const Stat = () => {
    return (
        <div>
            <div className='text-center mt-20'>

<p className="text-2xl font-bold">We Are Professional at Our Skills</p>

<p className='mb-10'>
More than 2000+ customers trusted us
 
</p>
            </div> 
            <div>
            <div className="stats shadow grid grid-cols-1 gap-5 lg:grid-cols-4 md:grid-cols-2 items-center  rounded-lg my-8 bg-gray-800">
  
  <div className="stat place-items-center">
    <div className="stat-title">Experience</div>
    <div className="stat-value">23+</div>
    <div className="stat-desc">From November 1999 to present</div>
  </div>
  
  <div className="stat place-items-center">
    <div className="stat-title">Award</div>
    <div className="stat-value text-secondary">102+</div>
    <div className="stat-desc">Award Wins</div>
                    </div>
                    <div className="stat place-items-center">
    <div className="stat-title">Products</div>
    <div className="stat-value ">99%</div>
    <div className="stat-desc ">Perfect Products</div>
  </div>
  
  <div className="stat place-items-center">
    <div className="stat-title">Client</div>
    <div className="stat-value">36k</div>
    <div className="stat-desc">Happy Clients</div>
  </div>
  
</div>
            </div>
        </div>
    );
};

export default Stat;