import React from 'react';
import bitcoin from '../assets/bitcoin2.png';

const News4 = () => {
    return (
        <div className='mb-8 border rounded-lg p-5'>
            <h1 className='text-3xl font-bold'>Bitcoin Miners’ Revenue Hits $9.55 Billion in 2022.</h1>
            <p className=''>Sunday, 3 Jan 2023</p>
            <img src={bitcoin} alt="" className='w-full' />
            <p className='my-5'>
                2022 has been a rough and tough year for investors, traders, cryptocurrency businesses, and miners in general. The prolonged bear market, exacerbated by a series of catastrophic events, posed a threat to miners.
                Miners were dealing with a variety of issues, including defaulted loans, quarterly losses, and soaring bitcoin hash rates that reached all-time highs. All these factors were affecting the profitability of the miners and were causing sell pressure.
                The situation was aggravated when cryptocurrency prices, including Bitcoin’s, plummeted. Bitcoin, which was hovering around $48,000 last year, hit a low of $15,590 by the end of 2022. According to the data collected from The Block, bitcoin miners’ revenue hit $9.55 billion in 2022.
                Bitcoin miners’ revenue dropped in 2022
                Bitcoin, which is trading at $16,721 at press time, has been on a downward spiral alongside other cryptocurrencies. The falling cryptocurrency prices had a major effect on the income and profits of miners. Even though the $9.55 billion in revenue in 2022 seems like a large number, it is comparatively lower than that of 2021.

                Over the course of 2021, bitcoin miners made more thqan $15 billion in revenue, according to the data from the block. This was actually considered to be a 206% year-over-year increase.

            </p>
        </div>
    );
};

export default News4;