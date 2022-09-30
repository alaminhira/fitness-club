const getFromDb = () => {
    return JSON.parse(localStorage.getItem('break-time'));
}

const addToDb = duration => {
    const storedDuration = getFromDb() ?? 0;

    localStorage.setItem('break-time', duration);
}

export { getFromDb, addToDb };