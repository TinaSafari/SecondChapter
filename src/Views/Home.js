import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import ImageOne from '../img/book image 1.jpeg'
import ImageTwo from '../img/book image 2.jpeg'
import ImageThree from '../img/book image 3.jpeg'
import bannerImage from '../book img/billy.jpeg'
import { Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { BooksArray } from '../Components/BooksArray'
import Card from 'react-bootstrap/Card'

function Home() {

    return (
        <div className='home'>
            <div className='missingPerson' >
                <h4 style={{ color: 'red' }}>Have you seen me?</h4>
                <Image style={{ width: '500px', height: '200px', paddingBottom: '10px', paddingTop: '10px' }} src={bannerImage} fluid />
                <h4>Last seen at Kenzie Academy</h4>
                <h4>If so please do not return!</h4>
            </div>
            <div className='homeCarousel'>
                <Carousel fade>
                    <Carousel.Item interval={4000}>
                        <img
                            className="d-block w-100"
                            src={ImageOne}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={4000}>
                        <img
                            className="d-block w-100"
                            src={ImageTwo}
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={4000}>
                        <img
                            className="d-block w-100"
                            src={ImageThree}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
            <h1>Now Trending</h1>
            <hr />

            <div className='bookshelf'>
                {BooksArray.map((book) => {
                    if (book.id <= 4) {
                        return (
                            <Card style={{ width: '15rem', height: '36rem', marginBottom: '20px' }}>
                                {console.log(book.Title)}
                                <Link to={'./SingleBookInfo/' + book.id}><Card.Img key={book.id} variant="top" src={book.imageUrl} style={{ height: '320px' }} /></Link>
                                <Card.Body>
                                    <Card.Title>{book.Title}</Card.Title>
                                    <Card.Text>
                                        Author: {book.Author}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        )
                    }
                    else return
                })
                }
            </div>
        </div>
    )
}

export default Home
