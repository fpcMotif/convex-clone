
import React from 'react';

const AITools = () => {
    return (
        <section className="flex flex-col items-center">
            <div className="mx-auto w-full max-w-[1536px] px-3 sm:px-5 md:px-8 lg:px-12 grid grid-cols-4 gap-3 sm:gap-5 md:gap-8 lg:grid-cols-5 lg:gap-12 xl:grid-cols-7">
                <div className="col-span-full flex flex-col items-start lg:col-span-2 xl:col-span-3">
                    <div className="rounded border border-neutral-800 px-2 py-1 text-[0.625rem] font-medium uppercase tracking-wider text-neutral-800 mb-2">AI Tools</div>
                    <h2 className="relative z-10 mb-3 max-w-2xl text-balance text-2xl font-bold leading-none tracking-tight text-neutral-800 lg:text-4xl">LLMs love Convex</h2>
                    <p className="mb-5 max-w-[40ch] text-pretty leading-tight text-neutral-800 lg:text-lg">With Convex, everything is just TypeScript. This means your favorite AI tools are pre-equipped to generate high quality code.</p>
                    <a className="rounded-full inline-block font-medium transition-colors whitespace-nowrap text-center px-6 py-2 text-sm bg-neutral-800 text-white hover:bg-black lg:text-base" aria-label="Learn more about AI generation" href="#">Learn more</a>
                </div>
                <div className="relative col-span-full lg:col-span-3 xl:col-span-4">
                    <div className="-mx-3 flex h-[264px] flex-col items-end bg-cover bg-no-repeat px-1.5 pt-6 sm:-mx-5 md:-mx-8 md:px-3 lg:mx-0 lg:h-[452px] lg:border-l lg:border-neutral-300 bg-right lg:px-0 lg:pt-28" style={{ backgroundImage: "url('https://www.convex.dev/home/llms-bg-wide.svg')" }}>
                        <div className="z-10 rounded-2xl border border-neutral-300 bg-[#FEF6EB] p-2 w-full max-w-xl">
                            <div className="shadow-lg relative overflow-hidden rounded-lg bg-neutral-800">
                                <textarea name="prompt" placeholder="Build an app like Slack. It should have a sidebar with channels and direct messages where users can..." rows={3} className="w-full resize-none bg-transparent p-4 text-neutral-100 placeholder-neutral-500 focus:outline-none"></textarea>
                                <div className="flex w-full items-center bg-neutral-900 px-4 py-2 md:justify-end">
                                    <a className="group flex h-9 w-full md:w-auto items-center justify-center gap-1 rounded-full bg-neutral-700 pl-4 pr-2 transition-colors hover:bg-neutral-600" href="#">
                                        <div className="font-medium leading-none text-white">Try Convex with</div>
                                        <img alt="Convex Chef" width="72" height="42" decoding="async" data-nimg="1" className="relative -top-2" style={{ color: 'transparent' }} src="https://www.convex.dev/_next/static/media/chef.b48195a6.svg" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AITools;
