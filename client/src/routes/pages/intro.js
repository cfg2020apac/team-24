import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import CurrentUserContext from '../../context/current-user.context'

const IntroPage = () => {
    const [currentUser, setCurrentUser] = useContext(CurrentUserContext)
    return (
        <>
            <h1>Gettting Started</h1>
            <p>Get to know more about us, and how you can become a volunteer here</p>
            {
                currentUser.token?(
                    <></>
                ):(
                    <p>You need to <Link to="/signup">Sign Up</Link> first!</p>
                )
            }
        </>
    )
}

export default IntroPage