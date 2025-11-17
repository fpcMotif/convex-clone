
import React from 'react';
import type { Tweet } from '../types';

const tweets: Tweet[] = [
    { author: "WebDevCody", handle: "webdevcody", text: "Next + Convex (all in typescript)\n\nVs\n\nAngular (typescript) + Django (python) + Postgres + S3 + Websocket DIY + SQS + IaC + DIY e2e type safety\n\n🤔", link: "#", avatar: "https://www.convex.dev/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwebdevcody.fc820679.jpeg&w=96&q=75" },
    { author: "AndyOz", handle: "andy_austin_dev", text: "@convex_dev Simple. Fast. Realtime.", link: "#", avatar: "https://www.convex.dev/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fandy_austin_dev.61b97228.jpeg&w=96&q=75" },
    { author: "Robin", handle: "robinxpfp", text: "I think @convex_dev might be the best DB I've ever used", link: "#", avatar: "https://www.convex.dev/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frobinxpfp.eb37f15f.jpeg&w=96&q=75" },
    { author: "Colin | Clerk.com", handle: "tweetsbycolin", text: "Happy to see more first-class clerk x convex integration...", link: "#", avatar: "https://www.convex.dev/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftweetsbycolin.32a1a598.jpeg&w=96&q=75" },
    { author: "Guillermo Rauch", handle: "rauchg", text: "😱 @convex_dev is the gift that keeps on giving\n\nCheck it out in combination with @nextjs docs.convex.dev", link: "#", avatar: "https://www.convex.dev/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frauchg.2595b446.jpeg&w=96&q=75" },
    { author: "Timothy Stepro", handle: "tim_stepro", text: "@convex_dev is everything I wanted Firebase to be. Such a great tool. Feels illegal to know about this before others.", link: "#", avatar: "https://www.convex.dev/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftim_stepro.ee0ee470.jpeg&w=96&q=75" },
    { author: "Jason Lengstorf", handle: "jlengstorf", text: "I'm working on a new app build with @convex_dev and I am *very* excited about the tech here...", link: "#", avatar: "https://www.convex.dev/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fjlengstorf.67d9da0f.jpeg&w=96&q=75" },
    { author: "David Kim", handle: "dvddkkim", text: "@convex_dev feels like what I wanted Firebase and MongoDB Realm to be and more. Really enjoying the DX so far!", link: "#", avatar: "https://www.convex.dev/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdvddkkim.cef59034.jpeg&w=96&q=75" },
];

const TweetCard = ({ tweet }: { tweet: Tweet }) => (
    <div className="flex flex-col gap-4 rounded-xl border border-neutral-800 bg-neutral-800 p-3 text-white mb-6 select-none transition-colors hover:border-neutral-600 w-full min-w-72 sm:min-w-80">
        <div className="text-neutral-300 grow whitespace-pre-line leading-snug">{tweet.text}</div>
        <div className="flex items-center gap-3">
            <img alt={`${tweet.author}'s avatar`} loading="lazy" width="40" height="40" decoding="async" className="size-10 rounded-full bg-white object-cover" src={tweet.avatar} />
            <div className="flex flex-col gap-1">
                <span className="font-medium leading-tight">{tweet.author}</span>
                <a href={tweet.link} target="_blank" rel="noopener noreferrer" className="text-sm leading-none text-[#9E81F0] underline-offset-2 hover:underline">@{tweet.handle}</a>
            </div>
        </div>
    </div>
);

const Testimonials = () => {
    return (
        <div className="flex flex-col items-center">
            <div className="mx-auto w-full max-w-[1536px] px-3 sm:px-5 md:px-8 lg:px-12 flex flex-col items-center">
                <div className="rounded border border-neutral-800 px-2 py-1 text-[0.625rem] font-medium uppercase tracking-wider text-neutral-800 mb-2">Customer Love</div>
                <h2 className="relative z-10 mb-3 text-balance text-center text-2xl font-bold leading-none tracking-tighter text-neutral-800 sm:text-4xl">Loved by developers</h2>
                <p className="mb-4 text-balance text-center leading-tight text-neutral-800 sm:mb-8 sm:text-lg">What people building their business on Convex are saying.</p>
            </div>
            <div className="relative flex w-full flex-col items-center px-1.5 md:px-3">
                <div className="col-span-full flex w-full flex-col gap-6 rounded-[0.625rem] bg-neutral-900 px-3 py-4 lg:rounded-2xl lg:px-5 max-w-[1512px]">
                    {/* Mobile: Horizontal Marquee */}
                    <div className="relative overflow-hidden lg:hidden">
                        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-8 bg-gradient-to-r from-neutral-900 to-transparent"></div>
                        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-8 bg-gradient-to-l from-neutral-900 to-transparent"></div>
                        <div className="flex animate-marquee-x">
                            {[...tweets, ...tweets].map((tweet, i) => (
                                <div key={i} className="flex-shrink-0 mx-2"><TweetCard tweet={tweet} /></div>
                            ))}
                        </div>
                    </div>

                    {/* Desktop: Vertical Marquees */}
                    <div className="hidden gap-6 lg:flex h-[60vh] min-h-96">
                        {[tweets.slice(0, 3), tweets.slice(3, 6), tweets.slice(6)].map((columnTweets, colIndex) => (
                            <div key={colIndex} className="relative overflow-hidden flex-1">
                                <div className={`flex h-full flex-col ${colIndex === 1 ? 'animate-marquee-y-reverse' : 'animate-marquee-y'}`}>
                                    {[...columnTweets, ...columnTweets, ...columnTweets, ...columnTweets].map((tweet, tweetIndex) => (
                                        <TweetCard key={`${colIndex}-${tweetIndex}`} tweet={tweet} />
                                    ))}
                                </div>
                                 <div className="pointer-events-none absolute left-0 top-0 z-10 h-12 w-full bg-gradient-to-b from-neutral-900 to-transparent"></div>
                                <div className="pointer-events-none absolute bottom-0 left-0 z-10 h-12 w-full bg-gradient-to-t from-neutral-900 to-transparent"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
