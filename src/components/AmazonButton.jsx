import getAmazonLink from '../lib/getAmazonLink';
import { AiFillAmazonCircle } from "react-icons/ai";
import useNavSound from '../customHooks/useNavSound';

export default function AmazonButton({title }) {
    const amazonUrl = getAmazonLink(title );

    const playNav = useNavSound();

    return (
      <div>
        <a
          href={amazonUrl}
          rel="noopener noreferrer"
          target="_blank"
          aria-label={`Buy ${title} on Amazon`}
          className="relative text-yellow-300 font-bold flex items-center p-0 rounded-xl
             after:content-[''] after:absolute after:left-0 after:bottom-0 
             after:h-[2px] after:bg-yellow-300 after:w-0 
             after:transition-all after:duration-300 
             hover:after:w-full"
          //   className=" bg-gradient-to-tr from-yellow-300 to-yellow-500 text-black font-bold flex items-center p-2 rounded-xl"
          onClick={() => {
            console.log(`Amazon link clicked for ${title}`);
            playNav();
          }}>
          <AiFillAmazonCircle className="text-2xl mr-1" />
          Buy on Amazon
        </a>
      </div>
    );
}