import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import SingleShow from '../SingleShow/SingleShow';

const Shows = () => {
    const [shows, setShows] = useState([])
    useEffect(() => {
        fetch("https://api.tvmaze.com/search/shows?q=all")
            .then(res => res.json())
            .then(data => setShows(data))
    }, [])
    return (
        <Container>
            <Row className=''>
                {
                    shows?.map(singleShow => <SingleShow
                        key={singleShow.show.id}
                        singleShow={singleShow}
                    >
                    </SingleShow>)
                }
            </Row>
        </Container>
    );
};

export default Shows;