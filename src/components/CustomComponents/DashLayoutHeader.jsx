
import PropTypes from 'prop-types';
import { useState } from 'react';
import { Input } from '../ui/input';
import { Bell } from 'lucide-react';

const LayoutHeader = () => {
  const [currentDate]= useState(new Date());

  return (
    <div className='flex justify-between px-4 py-2  items-center bg-[white] w-full h-full' >
      <div className='font-bold  flex items-center space-x-2'>
      </div>
      <div className='flex items-center space-x-2'>
        <Input placeholder='Search'/>
        <Bell size={25}/>
        {/* <p>{currentDate.toLocaleString()}</p> */}
      </div>
    </div>
  );
}
LayoutHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default LayoutHeader;