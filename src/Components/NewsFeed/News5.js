import React from 'react';
import rich from '../assets/bitcoin.png'

const News5 = () => {
    return (
        <div className='mb-8 border rounded-lg p-5'>
            <h1 className='text-3xl font-bold'>Mango Markets Exploiter Eisenberg Arrested in Puerto Rico.</h1>
            <p className=''>Sunday, 3 Jan 2023</p>
            <img src={rich} alt="" className='w-full' />
            <p className='my-5'>
                The investor drained $110 million in cryptocurrencies from the platform.
                Avraham Eisenberg, the crypto investor whose “highly profitable trading strategy” drained DeFi trading platform Mango Markets of crypto worth $110 million, was           arrested Monday in Puerto Rico, court documents said.
                The self-described game theorist admitted his role in draining Mango Markets’ treasury shortly after the incident in mid-October, and may now be the first U.S. resident to face charges for his role in manipulating a decentralized-finance trading platform.
                Eisenberg faces charges of commodities fraud and commodities manipulation, according to a filing unsealed Tuesday. The charges could see punishments ranging from fines to prison time.
                A deposition signed by FBI Special Agent Brandon Racz alleges Eisenberg “willfully and knowingly” manipulated the sale of a commodity – namely futures contracts on Mango Markets.
                “Eisenberg engaged in a scheme involving the intentional and artificial manipulation of the price of perpetual futures contracts on a cryptocurrency exchange called Mango Markets, and other manipulative and deceptive devices and contrivances.”
            </p>
        </div>
    );
};

export default News5;