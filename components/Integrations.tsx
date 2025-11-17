
import React from 'react';
import { ExternalLinkIcon } from './Icons';

const frameworks = [
  { name: 'React', logo: 'https://www.convex.dev/home/frameworks-react.svg', link: '#' },
  { name: 'React Native', logo: 'https://www.convex.dev/home/frameworks-react-native.svg', link: '#' },
  { name: 'Python', logo: 'https://www.convex.dev/home/frameworks-python.svg', link: '#' },
  { name: 'Next.js', logo: 'https://www.convex.dev/home/frameworks-next.svg', link: '#' },
  { name: 'TanStack Start', logo: 'https://www.convex.dev/home/frameworks-tanstack.svg', link: '#' },
  { name: 'Rust', logo: 'https://www.convex.dev/home/frameworks-rust.svg', link: '#' },
  { name: 'Remix', logo: 'https://www.convex.dev/home/frameworks-remix.svg', link: '#' },
  { name: 'Vue', logo: 'https://www.convex.dev/home/frameworks-vue.svg', link: '#' },
  { name: 'Svelte', logo: 'https://www.convex.dev/home/frameworks-svelte.svg', link: '#' },
];

const Integrations = () => {
  return (
    <div className="mx-auto w-full max-w-[1536px] px-3 sm:px-5 md:px-8 lg:px-12 grid grid-cols-4 gap-3 sm:gap-5 md:gap-8 lg:grid-cols-5 lg:gap-12 xl:grid-cols-7">
      <div className="col-span-full flex flex-col items-start sm:col-span-3 lg:col-span-2 xl:col-span-3">
        <div className="rounded border border-neutral-800 px-2 py-1 text-[0.625rem] font-medium uppercase tracking-wider text-neutral-800 mb-2">Integrations</div>
        <h2 className="mb-3 text-pretty text-2xl font-bold leading-none tracking-tighter text-neutral-800 sm:text-4xl">Convex loves your favorite frameworks</h2>
        <p className="mb-5 text-balance leading-tight text-neutral-800 sm:text-lg">Connect your backend to your client libraries and frameworks</p>
        <a className="rounded-full inline-block font-medium transition-colors whitespace-nowrap text-center px-6 py-2 text-sm bg-neutral-800 text-white hover:bg-black lg:text-base" href="#">Learn more</a>
      </div>
      <div className="col-span-full py-3 lg:col-span-3 xl:col-span-4">
        <div className="flex flex-col gap-4 lg:gap-8">
            <div className="grid grid-cols-3 justify-between gap-4">
                {frameworks.map(fw => (
                    <a key={fw.name} href={fw.link} className="group flex items-center gap-1 lg:grow lg:rounded-lg lg:border lg:border-transparent lg:p-1 lg:pr-2 lg:transition-colors lg:hover:border-neutral-300 lg:hover:bg-white/80">
                        <img alt={`${fw.name} logo`} loading="lazy" width="48" height="48" decoding="async" className="size-8 sm:size-10" src={fw.logo} />
                        <div className="flex flex-col gap-1">
                            <span className="text-sm font-medium leading-none md:text-base">{fw.name}</span>
                            <div className="hidden text-xs text-neutral-500 transition-all lg:block opacity-0 group-hover:opacity-100">
                                Quickstart guide <ExternalLinkIcon className="inline-block relative -top-0.5" />
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default Integrations;
