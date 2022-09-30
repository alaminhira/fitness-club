import React, { useEffect, useState } from 'react';
import { getFromDb, addToDb } from '../../utilities/fakeDb';

const Sidebar = ({totalDuration, showToast}) => {
    const [breakTimeTotal, setBreakTimeTotal] = useState(0);

    useEffect(() => {
        const storedBreakTime = getFromDb();
        setBreakTimeTotal(storedBreakTime);
    }, [])

    const formatDuration = duration => {
        let timeStr;
        if (duration > 59) {
            const timeDivider = 60; // 1 hour === 60 minute
            const hour = Math.trunc(duration / timeDivider);
            const minute = duration % timeDivider;

            timeStr = minute ? `${hour} Hour ${minute} Minute` : `${hour} Hour`;
        } else {
            timeStr = `${duration} Minute`;
        }

        return timeStr;
    }

    const addToBreakTime = e => {
        const duration = +e.target.innerText.slice(0, -1);
        const totalTime = breakTimeTotal + duration;
        setBreakTimeTotal(totalTime); 
        addToDb(totalTime);
    }

    return (
        <aside className='bg-gray-100 p-4 lg:fixed 2xl:relative sm:w-64 h-full overflow-auto right-0'>
            <div className='flex flex-col'>
                <div className='w-24 h-24 self-center'>
                    <img className='w-full h-full rounded-full' src="https://source.unsplash.com/v2aKnjMbP_k/150x150" alt="Author" />
                </div>
                <p className='my-4'>I'm Alamin Hira, A developer. But I like exercising daily. That's why I follow some of the exercise mostly free hand exercises. And I encourage you to do exercise regularly to keep your body fit.</p>
                <div className='self-end'>
                    <h4>Alamin Hira</h4>
                    <h5>Dhaka, Bangladesh</h5>
                </div>
            </div>
            <div className='mt-10 '>
                <h3 className='text-2xl font-semibold mb-4'>Add A Break</h3>
                <div className='text-center'>
                    <button onClick={addToBreakTime} className='w-10 h-10 rounded-full m-2'>10m</button>
                    <button onClick={addToBreakTime} className='w-10 h-10 bg-teal-400 text-white rounded-full m-2'>20m</button>
                    <button onClick={addToBreakTime} className='w-10 h-10 rounded-full m-2'>30m</button>
                    <button onClick={addToBreakTime} className='w-10 h-10 rounded-full m-2'>40m</button>
                </div>
            </div>
            <div className='mt-10'>
                <h3 className='text-2xl font-semibold mb-4'>Exercise Details</h3>
                <div className='flex justify-between bg-gray-100 p-2 mb-4'>
                    <h5 className='text-lg font-semibold'>Exercise time</h5>
                    <span>{formatDuration(totalDuration)}</span>
                </div>
                <div className='flex justify-between bg-gray-100 p-2'>
                    <p className='text-lg font-semibold'>Break time</p>
                    <span>{formatDuration(breakTimeTotal)}</span>
                </div>
            </div>
            <button onClick={showToast} className='bg-emerald-400 text-white p-2 text-lg font-semibold w-full mt-12'>Activity Completed</button>
        </aside>
    );
};

export default Sidebar;