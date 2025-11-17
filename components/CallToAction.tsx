
import React from 'react';

const CallToAction = () => {
    return (
        <div className="bg-neutral-900" data-header-match="true">
            <div className="mx-auto w-full max-w-[1536px] px-3 sm:px-5 md:px-8 lg:px-12">
                <div className="py-3 sm:py-5 md:py-8 lg:py-12">
                    <div className="relative flex w-full flex-col items-center py-16 lg:py-32">
                        <div className="z-10 mb-4 max-w-[16ch] text-balance text-center text-2xl font-bold leading-none tracking-tight text-white sm:mb-7 sm:text-4xl md:text-6xl lg:mb-9 xl:text-8xl">
                            Get your app up and running in minutes
                        </div>
                        <a className="rounded-full inline-block font-medium transition-colors whitespace-nowrap text-center py-3 z-10 bg-[#D75D32] hover:bg-[#D75D32]/80 px-8 text-xl text-white" href="#">
                            Start building
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CallToAction;
