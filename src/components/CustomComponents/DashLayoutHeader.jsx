
import PropTypes from 'prop-types';
import { useState } from 'react';
import { Input } from '../ui/input';
import { Bell } from 'lucide-react';
import { Moon, Sun } from "lucide-react"
 
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useTheme } from './themeProvider';
const LayoutHeader = () => {
  const [currentDate]= useState(new Date());
  const { setTheme } = useTheme()
  return (
    <div className='flex justify-between px-4 py-2  items-center  w-full h-full' >
      <div className='font-bold  flex items-center space-x-2'>
      </div>
      <div className='flex items-center space-x-2'>
        <Input placeholder='Search'/>
        <Bell size={25}/>
        <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
        {/* <p>{currentDate.toLocaleString()}</p> */}
      </div>
    </div>
  );
}
LayoutHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default LayoutHeader;