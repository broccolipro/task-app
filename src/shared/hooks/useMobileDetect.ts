import {useState, useEffect} from 'react';

const useMobileDetect = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mobileAgent = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent
        );
        setIsMobile(mobileAgent);
    }, []);

    return isMobile;
};

export default useMobileDetect;
