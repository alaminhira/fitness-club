import React from 'react';

const FAQ = () => {
    return (
        <div>
            <div className='my-8 bg-gray-100 p-4'>
                <h3 className='text-2xl font-semibold mb-5'>How does react work?</h3>
                <p>React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes.</p>
            </div>
            <div className='my-8 bg-gray-100 p-4'>
                <h3 className='text-2xl font-semibold mb-5'>What are the difference between props and state?</h3>
                <div>
                    <p>Tthe differences between props and state are: </p>
                    <ul className='list-disc pl-5 mt-2'>
                        <li>React state is mutable (both read and write) whereas Props are immutable (read only)</li>
                        <li>The data is passed from one component to another whereas The state is a local data storage that is local to the component and data is passed withen the component only</li>
                        <li>State is local to a component and cannot be used in other component whereas Prop allows child components to read values from parent components.</li>
                    </ul>
                </div>
            </div>
            <div className='my-8 bg-gray-100 p-4'>
                <h3 className='text-2xl font-semibold mb-5'>what are the other usage of useEffect() other than loading data</h3>
                <div>
                    <p>There are som other usage of useEffect() other than loading data. Such as</p>
                    <ul className='list-disc pl-5 mt-2'>
                        <li>Running once on mount: fetch API data</li>
                        <li>Running on state change: validating input field</li>
                        <li>Running on state change: live filtering</li>
                        <li>Running on state change: trigger animation on new array value</li>
                        <li>Running on props change: update paragraph, or other data on fetched API data update</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default FAQ;