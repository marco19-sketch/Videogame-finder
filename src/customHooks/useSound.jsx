import { useRef, useCallback } from 'react';

export default function useSound(src) {
    const ref = useRef(null);
    
    const play = useCallback(() => {
        if (ref.current) {
            ref.current.currentTime = 0;
            ref.current.play().catch(console.warn);
        }
    }, []);

    const AudioElement = <audio ref={ref} src={src} />;

    return [play, AudioElement];
}