
import React, { useState } from 'react';
import { Logo, MenuIcon, ChevronDownIcon, GitHubIcon, ExternalLinkIcon } from './Icons';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 transition-all duration-100 bg-[#1D1D1D] lg:bg-transparent text-white">
      {/* Mobile Header */}
      <div className="flex h-16 items-center justify-between px-3 transition-colors sm:px-5 md:px-8 lg:hidden">
        <a aria-label="Convex logo" href="#">
          <Logo className="fill-white" />
        </a>
        <button className="flex items-center" aria-label="Open the menu" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <MenuIcon className="h-6 w-6 text-white" />
        </button>
      </div>

      {/* Desktop Header */}
      <div className="mx-auto w-full max-w-[1536px] px-3 sm:px-5 md:px-8 lg:px-12 h-20 flex-row items-center hidden lg:flex" role="navigation">
        <a aria-label="Convex logo" className="mr-6 focus-visible:outline-white" href="#">
          <Logo className="fill-white hover:fill-neutral-300" />
        </a>
        <div className="flex grow items-center" role="menu">
          {/* Navigation items would go here */}
          <a className="p-3 font-medium text-white hover:text-neutral-300 focus-visible:outline-white" href="#">Product</a>
          <a className="p-3 font-medium text-white hover:text-neutral-300 focus-visible:outline-white" href="#">Developers</a>
          <a className="p-3 font-medium text-white hover:text-neutral-300 focus-visible:outline-white" href="https://stack.convex.dev/">Blog</a>
          <a className="p-3 font-medium text-white hover:text-neutral-300 focus-visible:outline-white" href="https://docs.convex.dev/">Docs</a>
          <a className="p-3 font-medium text-white hover:text-neutral-300 focus-visible:outline-white" href="#">Pricing</a>
        </div>
        <div className="flex gap-3 items-center">
            <a className="flex h-11 items-center justify-center gap-1 text-nowrap rounded-full transition-colors bg-white/5 text-white hover:bg-white/10 focus-visible:outline-white pl-4 pr-5" href="https://github.com/get-convex/convex-backend" target="_blank" rel="noopener noreferrer">
                <GitHubIcon className="relative h-6 w-6 text-white -left-1" />
                <div className="flex-col flex">
                    <span className="text-sm font-medium leading-none">GitHub</span>
                    <span className="text-xs leading-tight text-neutral-400">15,966 stars</span>
                </div>
            </a>
            <a className="flex h-11 items-center text-nowrap rounded-full px-5 text-sm font-medium leading-none transition-colors bg-white/5 text-white hover:bg-white/10 focus-visible:outline-white" href="#">Log in</a>
        </div>
      </div>
      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-16 left-0 w-full bg-[#1D1D1D] p-4 flex flex-col items-start space-y-2">
            <a className="py-2 text-white" href="#">Product</a>
            <a className="py-2 text-white" href="#">Developers</a>
            <a className="py-2 text-white" href="https://stack.convex.dev/">Blog</a>
            <a className="py-2 text-white" href="https://docs.convex.dev/">Docs</a>
            <a className="py-2 text-white" href="#">Pricing</a>
            <a className="py-2 text-white" href="#">Log in</a>
        </div>
      )}
    </header>
  );
};

export default Header;
