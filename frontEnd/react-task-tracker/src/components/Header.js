import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title}) => {
    
    const onClick = () =>{
        console.log('Btn Clicked')
    }

    return (
        <div className='header'>  
        <h1>{title}</h1>
        <Button color='red' text='Hello' onClick={onClick}/>
        </div>
    )
}

Header.defaultProps ={
    title: 'Task Tracker'
}

Header.prototype ={
    title: PropTypes.string.isRequired
}

export default Header
