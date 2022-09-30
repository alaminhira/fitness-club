import React from 'react';

const ExerciseCard = ({details, addToExTime}) => {
    const {title, image, duration, unit} = details;

    return (
        <div className="card bg-gray-100 p-2 rounded">
            <h3 className='text-xl font-semibold mb-2'>{title}</h3>
            <img className='max-w-full' src={image} alt={title} />
            <div className='flex justify-between items-center mt-5'>
                <h4>Duration: {duration + unit}</h4>
                <button className='bg-teal-500 text-white px-4 py-1 rounded hover:bg-teal-600' onClick={() => addToExTime(duration)}>Add</button>
            </div>
        </div>
    );
};

export default ExerciseCard;