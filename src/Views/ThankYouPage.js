import React from 'react'
import { Link } from 'react-router-dom'

function ThankYouPage() {
    return (
        <div style={{ paddingTop: '30px', paddingBottom: '30px' }}>
            <h1>Thank you for shopping with us</h1>
            <Link to='/'>Go Back Home</Link>
        </div>
    )
}

export default ThankYouPage
