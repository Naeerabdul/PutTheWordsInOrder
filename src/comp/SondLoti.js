import React from 'react';
import Lottie from 'react-lottie';
import animationData from './animation.json';
const LottieAnimation = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };
    return (<div className='my-4'>
    <Lottie
                options={defaultOptions}
                height={120}
                width={120}
                eventListeners={[
                    {
                        eventName: 'complete',
                    },
                    {
                        eventName: 'click',
                    },
                ]}
            />
        </div>
        );
    };
    export default LottieAnimation;
