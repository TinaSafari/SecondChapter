import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import ImageOne from '../img/img16.jpg'
import ImageTwo from '../img/img8.jpg'
import ImageThree from '../img/img6.jpg'
import ImageFour from '../img/img22.jpg'
import ImageFive from '../img/img17.jpg'
import ImageSix from '../img/img3.jpg'
import ImageSeven from '../img/img9.jpg'
import ImageEight from '../img/img7.jpg'
import { Link } from 'react-router-dom'
import { BooksArray } from '../Components/BooksArray'
import Card from 'react-bootstrap/Card'

function Home() {

    return (
        <div className='home'>
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
                    <Carousel.Item interval={4000}>
                        <img
                            className="d-block w-100"
                            src={ImageFour}
                            alt="Fourth slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={4000}>
                        <img
                            className="d-block w-100"
                            src={ImageFive}
                            alt="Fifth slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={4000}>
                        <img
                            className="d-block w-100"
                            src={ImageSix}
                            alt="sixth slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={4000}>
                        <img
                            className="d-block w-100"
                            src={ImageSeven}
                            alt="seventh slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={4000}>
                        <img
                            className="d-block w-100"
                            src={ImageEight}
                            alt="eight slide"
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
                            <Card style={{ width: '13rem', height: '30rem', marginBottom: '30px', border: "none" }}>
                                {console.log(book.Title)}
                                <Link to={'./SingleBookInfo/' + book.id}><Card.Img key={book.id} variant="top" src={book.imageUrl} style={{ height: '300px' }} /></Link>
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
