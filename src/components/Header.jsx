import Navigation from './Navigation'
import { useState } from 'react'

export default function Header() {
    // currentPage state variable declared for use by Navigation. Default state is 'about' (the home route)
    const [currentPage, setCurrentPage] = useState('About');
    return (
        <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage}/>
    )
}