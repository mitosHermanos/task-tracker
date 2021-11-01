import PropTypes from 'prop-types'
import Button from './Button'
import { useLocation } from 'react-router-dom'


const Header = ({ title, onAdd, showAdd }) => { // moze i -> const Header = ({ title }) => 
    const location = useLocation()


    return (
        <header className='header'>
            <h1>{title}</h1> {/* onda ide -> <h1>{title}</h1> 
                                        ako koristimo css unutrar js style={{color: 'red', backgroundColor: 'black'}}
                                        ili koristimo const headingStyle dole napravljen  style={headingStyle}*/} 
            {location.pathname === '/' && (
             <Button 
             color={showAdd ? 'red' : 'green'}
             text={showAdd ? 'Close' : 'Add'} 
             onClick={onAdd}/>)}
        </header>               
    )
}

Header.defaultProps = { // ako prosledimo props ovo se override
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string,
}

const headingStyle = {
    color: 'red', 
    backgroundColor: 'black'
}

export default Header
