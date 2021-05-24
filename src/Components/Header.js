import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import KenzieAdd from '../img/kenzieAdd.jpeg'
import FCCad from '../img/freecodeCampAd.jpeg'
import SNHUad from '../img/snhu.jpeg'

function Header() {
    return (
        <div>
            <Carousel style={{ margin: 'auto', height: '80px', width: '900px' }} >
                <Carousel.Item interval={7000}>
                    <img
                        style={{ height: '80px' }}
                        className="d-block w-100"
                        src={KenzieAdd}
                        alt="Kenzie Academy Ad Banner"
                    />
                    <Carousel.Caption style={{ color: 'black', textAlign: 'left' }}>
                        <a style={{ color: 'grey' }} href='https://www.kenzie.academy/'>
                            <h4> Join Kenzie Academy</h4>
                        </a>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={7000}>
                    <img
                        style={{ height: '80px', width: '40px' }}
                        className="d-block w-100"
                        src={SNHUad}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <a
                            href='https://www.snhu.edu'
                            style={{ color: 'white', textAlign: 'left' }}
                        >
                            <h4>Your future</h4>
                        </a>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={7000}>
                    <img
                        style={{ height: '80px' }}
                        className="d-block w-100"
                        src={FCCad}
                        alt="Free Code Camp Banner"
                    />

                    <Carousel.Caption>
                        <a
                            href='https://www.freecodecamp.org/'
                            style={{ color: 'white' }}
                        >
                            <h3>Learn to code free!</h3>
                        </a>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Header
