
import React, { useState } from 'react';
import { CopyIcon } from './Icons';

type Tab = 'code' | 'sync' | 'builtins';

const CodePreview = () => (
    <div className="h-full w-full rounded-lg bg-[#141414] overflow-hidden">
        <div className="flex h-8 shrink-0 items-center gap-1.5 border-b border-b-neutral-800 px-3">
            <div className="size-[10px] rounded-full bg-neutral-700"></div>
            <div className="size-[10px] rounded-full bg-neutral-700"></div>
            <div className="size-[10px] rounded-full bg-neutral-700"></div>
        </div>
        <pre className="text-xs p-4 text-white overflow-x-auto">
            <code>{`
export const setComplete = mutation({
  args: { id: v.id("todos") },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.id, {
      // Try checking a todo--nothing happens!
      // Change this to 'true' and try again.
      completed: false,
    });
  },
});`}
            </code>
        </pre>
    </div>
);

const AppPreview = () => (
    <div className="h-full w-full rounded-lg bg-white overflow-hidden p-4">
        <h2 className="text-2xl font-bold mb-4">My Todos</h2>
        <ul className="space-y-2">
            <li className="flex items-center"><input type="checkbox" className="mr-2" /> Buy milk</li>
            <li className="flex items-center"><input type="checkbox" className="mr-2" /> Walk the dog</li>
            <li className="flex items-center"><input type="checkbox" className="mr-2" checked readOnly/> Finish project</li>
        </ul>
    </div>
);


const Hero = () => {
  const [activeTab, setActiveTab] = useState<Tab>('code');

  return (
    <>
      {/* Mobile View */}
      <div className="flex flex-col items-center lg:hidden">
        <div className="mx-auto w-full max-w-[1536px] px-3 sm:px-5 md:px-8 lg:px-12 flex flex-col items-center pb-6 pt-8 bg-[#444C38]">
          <div className="max-w-md text-white">
            <h1 className="mb-9 text-pretty text-3xl font-medium leading-[1.175em] tracking-tight sm:text-center sm:text-4xl md:text-5xl">The backend platform that keeps your app in sync</h1>
            <a className="rounded-full inline-block font-medium transition-colors whitespace-nowrap text-center px-9 py-3 text-base bg-neutral-100 text-neutral-800 hover:bg-neutral-300 mb-3 w-full" href="#">Start building</a>
            <div className="flex w-full items-center rounded-xl border border-[#A8A89A] bg-[#DE5D32] p-3">
              <div className="grow truncate font-mono text-sm leading-none text-white">npm create convex</div>
              <button className="ml-5 text-white transition-colors hover:text-neutral-200" title="Copy to clipboard">
                <CopyIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col gap-2 px-1.5 sm:gap-6 md:px-3 -mt-4">
            <section className="bg-[#444C38] rounded-[0.625rem] text-white p-4">
                <h2 className="text-2xl font-bold mb-2">Everything is code</h2>
                <p className="mb-4">From database schemas to queries, from auth to APIs, express every part of your backend in pure TypeScript.</p>
                <div className="flex flex-col gap-0.5 rounded-lg bg-black p-0.5">
                    <CodePreview />
                    <AppPreview />
                </div>
            </section>
             <section className="bg-[#DE5D32] rounded-[0.625rem] text-white p-4">
                <h2 className="text-2xl font-bold mb-2">Always in sync</h2>
                <p className="mb-4">Convex libraries guarantee that your app always reflects changes to your frontend code, backend code, and database state in real time.</p>
            </section>
            <section className="bg-neutral-800 rounded-[0.625rem] text-white p-4">
                <h2 className="text-2xl font-bold mb-2">Backend built-ins</h2>
                <p className="mb-4">Create cron jobs, kick off backend AI workflows, leverage built-in auth, and more.</p>
            </section>
        </div>
      </div>
      
      {/* Desktop View */}
      <div className="hidden lg:flex flex-col items-center px-3">
        <div className="flex w-full max-w-[1512px] flex-row gap-8 overflow-hidden rounded-2xl bg-[#444C38] p-9 pt-24 xl:gap-12">
          <div className="flex w-64 shrink-0 flex-col items-start xl:w-80">
            <h1 className="mb-6 text-[2.25rem] font-medium leading-none tracking-tight text-white">The backend platform that keeps your app in sync</h1>
            <a className="rounded-full inline-block font-medium transition-colors whitespace-nowrap text-center text-base bg-neutral-200 text-neutral-800 hover:bg-white mb-3 px-5 py-2" href="#">Start building</a>
            <div className="flex w-full items-center rounded-xl border border-[#A8A89A] bg-[#DE5D32] p-3">
              <div className="grow truncate font-mono text-sm leading-none text-white">npm create convex</div>
              <button className="ml-5 text-white transition-colors hover:text-neutral-200" title="Copy to clipboard">
                <CopyIcon className="h-5 w-5" />
              </button>
            </div>
            <div className="mt-auto pb-3 w-full">
                <div onClick={() => setActiveTab('code')} className={`border-t transition-colors cursor-pointer ${activeTab === 'code' ? 'border-white text-white' : 'border-white/30 text-neutral-400 hover:text-white'}`}>
                    <h3 className="py-4 text-xl font-medium">Everything is code</h3>
                </div>
                <div onClick={() => setActiveTab('sync')} className={`border-t transition-colors cursor-pointer ${activeTab === 'sync' ? 'border-white text-white' : 'border-white/30 text-neutral-400 hover:text-white'}`}>
                    <h3 className="py-4 text-xl font-medium">Always in sync</h3>
                </div>
                <div onClick={() => setActiveTab('builtins')} className={`border-t border-b transition-colors cursor-pointer ${activeTab === 'builtins' ? 'border-white text-white' : 'border-white/30 text-neutral-400 hover:text-white'}`}>
                    <h3 className="py-4 text-xl font-medium">Backend built-ins</h3>
                </div>
            </div>
          </div>
          <div className="relative h-[45rem] grow rounded-2xl bg-[#D75D32]/20 shadow-inner">
            <div className={`absolute inset-2.5 transition-opacity duration-500 ease-in-out ${activeTab === 'code' ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                 <div className="grid h-full grid-cols-2 gap-2.5">
                    <CodePreview />
                    <AppPreview />
                 </div>
            </div>
             <div className={`absolute inset-2.5 transition-opacity duration-500 ease-in-out flex items-center justify-center ${activeTab === 'sync' ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <p className="text-white text-2xl">Always in sync demo</p>
            </div>
             <div className={`absolute inset-2.5 transition-opacity duration-500 ease-in-out flex items-center justify-center ${activeTab === 'builtins' ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <p className="text-white text-2xl">Backend built-ins demo</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
