import { Eye } from "lucide-react";
import { EyeOff } from "lucide-react";

export default function ShowPassword({className ='', setShow, show}) {

  return (
    <div className={className}>
      {show ? (
        <Eye onClick={() => setShow(false)} />
      ) : (
        <EyeOff 
        className='text-cyan-400'
        onClick={() => setShow(true)} />
      )}
    </div>
  );
}
