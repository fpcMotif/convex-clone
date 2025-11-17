
import React from 'react';
import { Logo, ExternalLinkIcon } from './Icons';

const Footer = () => {
    const socialLinks = [
        { name: 'Twitter', link: '#' },
        { name: 'Discord', link: '#' },
        { name: 'YouTube', link: '#' },
        { name: 'Luma', link: '#' },
        { name: 'LinkedIn', link: '#' },
        { name: 'GitHub', link: '#' },
    ];

    return (
        <div className="bg-neutral-900 pb-8 pt-12 text-white">
            <div className="mx-auto w-full max-w-[1536px] px-3 sm:px-5 md:px-8 lg:px-12 grid grid-cols-4 gap-3 sm:gap-5 md:gap-8 lg:grid-cols-5 lg:gap-12 xl:grid-cols-7 gap-y-12 md:gap-y-12 lg:gap-y-16">
                <a className="col-span-full xl:col-span-1" href="#">
                    <Logo className="w-[7rem] fill-white" />
                </a>

                <div className="col-span-2 flex flex-col gap-5 lg:col-span-1">
                    <span className="text-sm leading-tight tracking-wide text-neutral-400">Product</span>
                    <a href="#" className="text-[0.9375rem] leading-tight transition-colors hover:text-neutral-300">Sync</a>
                    <a href="#" className="text-[0.9375rem] leading-tight transition-colors hover:text-neutral-300">Realtime</a>
                    <a href="#" className="text-[0.9375rem] leading-tight transition-colors hover:text-neutral-300">Auth</a>
                    <a href="#" className="text-[0.9375rem] leading-tight transition-colors hover:text-neutral-300">Open source</a>
                    <a href="#" className="text-[0.9375rem] leading-tight transition-colors hover:text-neutral-300">AI coding</a>
                    <a href="#" className="text-[0.9375rem] leading-tight transition-colors hover:text-neutral-300">Pricing</a>
                </div>

                <div className="col-span-2 flex flex-col gap-5 lg:col-span-1">
                    <span className="text-sm leading-tight tracking-wide text-neutral-400">Developers</span>
                    <a href="#" className="flex items-center text-[0.9375rem] leading-tight transition-colors hover:text-neutral-300">Docs <ExternalLinkIcon className="ml-1 h-3 w-3 text-neutral-400"/></a>
                    <a href="#" className="flex items-center text-[0.9375rem] leading-tight transition-colors hover:text-neutral-300">Blog <ExternalLinkIcon className="ml-1 h-3 w-3 text-neutral-400"/></a>
                    <a href="#" className="text-[0.9375rem] leading-tight transition-colors hover:text-neutral-300">Components</a>
                    <a href="#" className="text-[0.9375rem] leading-tight transition-colors hover:text-neutral-300">Templates</a>
                    <a href="#" className="text-[0.9375rem] leading-tight transition-colors hover:text-neutral-300">Changelog</a>
                </div>
                
                 <div className="col-span-2 flex flex-col gap-5 lg:col-span-1">
                    <span className="text-sm leading-tight tracking-wide text-neutral-400">Company</span>
                     <a href="#" className="text-[0.9375rem] leading-tight transition-colors hover:text-neutral-300">About us</a>
                     <a href="#" className="text-[0.9375rem] leading-tight transition-colors hover:text-neutral-300">Jobs</a>
                     <a href="#" className="text-[0.9375rem] leading-tight transition-colors hover:text-neutral-300">Security</a>
                </div>

                <div className="col-span-2 flex flex-col gap-5 lg:col-span-1 lg:col-start-5 xl:col-span-2 xl:col-start-6">
                    <span className="text-sm leading-tight tracking-wide text-neutral-400">Social</span>
                    {socialLinks.map(link => (
                         <a key={link.name} href={link.link} className="flex items-center text-[0.9375rem] leading-tight transition-colors hover:text-neutral-300">{link.name} <ExternalLinkIcon className="ml-1 h-3 w-3 text-neutral-400"/></a>
                    ))}
                </div>
                 <div className="col-span-full flex flex-col gap-4 xl:col-span-2 xl:col-start-6">
                    <span className="text-sm leading-tight tracking-wide text-neutral-400">A Trusted Solution</span>
                    <ul className="flex flex-col gap-4">
                        <li className="flex gap-1 text-[0.9375rem] font-medium text-neutral-400"><strong className="text-white">SOC 2</strong> Type II Compliant</li>
                        <li className="flex gap-1 text-[0.9375rem] font-medium text-neutral-400"><strong className="text-white">HIPAA</strong> Compliant</li>
                        <li className="flex gap-1 text-[0.9375rem] font-medium text-neutral-400"><strong className="text-white">GDPR</strong> Verified</li>
                    </ul>
                </div>
                <div className="col-span-full text-neutral-400">© {new Date().getFullYear()} Convex, Inc.</div>
            </div>
        </div>
    );
};

export default Footer;
