import React from 'react';
import ExerciseCard from '../ExerciseCard/ExerciseCard';
import FAQ from '../FAQ/FAQ';
import Header from '../Header/Header';

const Main = ({exercises, addToExTime}) => {
    return (
        <main className='col-span-3'>
            <Header />
            <section className='mt-32'>
                <h1 className='text-4xl font-semibold text-center mb-12'>Exercises that will keep you fit</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-8">
                    {
                        exercises.map(exercise => <ExerciseCard details={exercise} addToExTime={addToExTime} key={exercise.id} />)
                    }
                </div>
            </section>
            <section className='mt-16'>
                <h1 className='text-4xl font-semibold text-center mb-12'>FAQ of Interview</h1>
                <FAQ />
            </section>
        </main>
    );
};

export default Main;