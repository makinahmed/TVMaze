import React, { useEffect, useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { addToDb, updateDb } from '../Utilities/fakeDb';


const Booking = () => {
    const [exploreItem, setExploreItem] = useState({})
    const [userInfo, setUserInfo] = useState()
    const { showId } = useParams();

    useEffect(() => {
        fetch("https://api.tvmaze.com/search/shows?q=all")
            .then(res => res.json())
            .then(data => {
                const show = data?.find(item => Number.parseInt(showId) === item.show.id)
                console.log(show);
                setExploreItem(show)
            })
    }, [showId])

    const movieInfo = {
        title: exploreItem?.show?.name,
        runtime: exploreItem?.show?.runtime,
        status: exploreItem?.show?.status,
        language: exploreItem?.show?.language,
        remiered: exploreItem?.show?.premiered,
        genres: exploreItem?.show?.genres[0]
    }

    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newUserInfo = { ...movieInfo, ...userInfo }
        newUserInfo[field] = value;
        setUserInfo(newUserInfo)

    }

    const handleOnclick = () => {
        updateDb(userInfo)
        alert("Stored to localstorage!")
    }
    return (
        <Container style={{ marginTop: '100px' }}>
            <Row>
                <Col xs={12} md={12} lg={6} >
                    <h4 className='my-3 py-0'>Booking Page: {showId}</h4>
                    <p style={{ textAlign: 'justify', lineHeight: '30px' }} className='my-0 py-0'>{exploreItem?.show?.summary}</p>
                </Col>
                <Col>
                    <div style={{ textAlign: 'right' }}>
                        <label htmlFor="title">Title:</label>
                        <input type="text" value={exploreItem?.show?.name} id="title" /> <br /><br />
                        <label htmlFor="title">Runtime:</label>
                        <input type="text" value={exploreItem?.show?.runtime} /><br /><br />
                        <label htmlFor="title">Status:</label>
                        <input type="text" value={exploreItem?.show?.status} /><br /><br />
                        <label htmlFor="title">Language:</label>
                        <input type="text" value={exploreItem?.show?.language} /><br /><br />
                        <label htmlFor="title">Premiered:</label>
                        <input type="text" value={exploreItem?.show?.premiered} /><br /><br />
                        <label htmlFor="title">Genres:</label>
                        <input type="text" value={exploreItem?.show?.genres[0]} /><br /><br />
                        <label htmlFor="title">Name:</label>
                        <input type="name" name="name" onBlur={handleOnBlur} /><br /><br />
                        <label htmlFor="title">Email:</label>
                        <input type="email" name="email" onBlur={handleOnBlur} /><br /><br />
                    </div>
                    <button className='btn btn-secondary' type='submit' style={{ marginLeft: '150px' }} onClick={handleOnclick}>Book Now</button>

                </Col>
            </Row>

        </Container>
    );
};

export default Booking;

/* 

type="password" name="password" onBlur={handleOnBlur} 
*/