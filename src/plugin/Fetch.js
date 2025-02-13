import React, {useState, useEffect} from 'react';

const Fetch = (url) => {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setData(data))

    },[])
    return {data}
};

export default Fetch;

