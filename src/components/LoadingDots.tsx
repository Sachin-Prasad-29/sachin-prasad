import React, { useState } from 'react';

const LoadingDots = () => {
    const [loaderClass, setLoaderClass] = useState('');
    setTimeout(() => {
        setLoaderClass('hide');
    }, 2000);
    return (
        <div id="loader" className={loaderClass}>
            <span className="dots"></span>
            <span className="dots"></span>
            <span className="dots"></span>
        </div>
    );
};

export default LoadingDots;
