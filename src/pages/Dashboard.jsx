import React, { useState } from 'react';
import ComponentWrapper from '../components/shared/Wrappers/ComponentWrapper';
import LeftNavigation from '../components/shared/LeftNavigation/LeftNavigation';
import SmallScreenLeftNavigation from '../components/shared/LeftNavigation/SmallScreenLeftNavigation';
import Dashboard from '../components/dashboard/Dashboard/Dashboard';
import Fleet from '../components/dashboard/Fleet/Fleet';

const DashboardPage = () => {
  const [selectedOption, setSelectedOption] = useState('dashboard');

  return (
    <ComponentWrapper>
      <div className='w-full grid min-h-screen grid-cols-1 lg:grid-cols-[274px,1fr] justify-start'>
        {/* left navigation ============>  */}
        <LeftNavigation
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        />
        {/* right portion ===========>  */}
        <div className='rightPor bg-black-off/5 h-full px-0 md:px-8 xl:px-14'>
          <SmallScreenLeftNavigation />
          <div className='pt-2 lg:pt-12 pb-8 lg:pb-12'>
            {/* main dashboard =====>  */}
            {selectedOption === 'dashboard' && <Dashboard />}
            {selectedOption === 'Fleet' && <Fleet />}
          </div>
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default DashboardPage;
