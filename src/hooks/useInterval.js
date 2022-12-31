import React, { useCallback, useEffect, useRef } from 'react';

const useInterval = (fn , delay) => {
    const timeout = useRef(null);
    const mountRef = useRef(null);

    const run = useCallback(async() => {
        await fn();
        if(mountRef.current){
            timeout.current = setTimeout(run , delay);
        }
    },[fn, delay]);

    useEffect(()=>{
        mountRef.current = true;
        run();
        return ()=> {
            mountRef.current = false;
            clearTimeout(timeout.current);
        }
    },[run])

}

export default useInterval;