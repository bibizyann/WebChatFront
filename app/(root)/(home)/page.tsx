"use client"

import React, {useEffect, useState} from 'react'

const Home = () => {
    const [dateState, setDateState] = useState(new Date());
    useEffect(() => {
        setInterval(() => setDateState(new Date()), 20000);
    }, []);
    const time = dateState.toLocaleTimeString('ru', { hour: '2-digit', minute: '2-digit' })
    const date = (new Intl.DateTimeFormat('ru', { dateStyle: 'full' })).format(dateState);

    return(
        <section className='flex size-full flex-col gap-10 text-white'>
            <div className="h-[500px] w-full rounded-[20px] bg-business bg-cover">
                <div className="flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11">
                    <h2 className="glassmorphism max-w-[273px] rounded py-2 text-center text-base font-normal">
                        Upcoming Meeting at: 12:30 PM
                    </h2>
                    <div className="flex flex-col gap-2">
                        <h1 className="text-4xl text-end font-extrabold lg:text-7xl">{time}</h1>
                        <p className="text-lg text-end font-medium text-blue-2 lg:text-2xl">{date}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home