import { Eye } from "lucide-react";
import { EyeOff } from "lucide-react";
import { useContext } from 'react';
import { AppContext } from '../context/contextsCreation';

export default function ShowPassword({className =''}) {
  const { showPassword, setShowPassword } = useContext(AppContext)

  return (
    <div className={className}>
      {showPassword ? (
        <Eye 
        className='text-white'
        onClick={() => setShowPassword(false)} />
      ) : (
        <EyeOff 
        className='text-cyan-400'
        onClick={() => setShowPassword(true)} />
      )}
    </div>
  );
}
