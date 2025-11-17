
import React from 'react';

const ProductDiagram = () => {
    return (
        <div className="flex flex-col items-center px-1.5 md:px-3">
            <section className="bg-[#292929] flex w-full max-w-[1512px] flex-col items-center rounded-[0.625rem] bg-cover bg-center bg-no-repeat p-1.5 sm:p-3.5 md:p-5 lg:rounded-2xl lg:p-9" style={{backgroundImage: "url('https://www.convex.dev/home/diagram-bg-wide.png')"}}>
                <div className="rounded border px-2 py-1 text-[0.625rem] font-medium uppercase tracking-wider my-2 border-white text-white lg:mt-0">Product</div>
                <h2 className="mb-3 text-balance text-2xl font-bold leading-none tracking-tight text-white sm:text-4xl">Not just a database</h2>
                <p className="mb-5 max-w-[25ch] text-balance text-center leading-tight text-neutral-400 sm:text-lg">Everything your product deserves to build, launch, and scale.</p>
                <a className="rounded-full inline-block font-medium transition-colors whitespace-nowrap text-center px-9 py-3 text-base bg-[#82C4E0] hover:bg-[#6BB6E5] mb-3 text-neutral-800" href="#">Learn more</a>
                <img alt="Illustration of Convex features" loading="lazy" width="808" height="456" decoding="async" data-nimg="1" className="mb-2 hidden lg:block" src="https://www.convex.dev/_next/image?url=%2Fhome%2Fdiagram-content-wide.png&w=1920&q=75" />
                <img alt="Illustration of Convex features" loading="lazy" width="380" height="486" decoding="async" data-nimg="1" className="mb-5 lg:hidden" src="https://www.convex.dev/_next/image?url=%2Fhome%2Fdiagram-content-narrow.png&w=750&q=75" />
            </section>
        </div>
    );
};

export default ProductDiagram;
