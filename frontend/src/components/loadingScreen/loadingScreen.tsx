import { useEffect, useState } from 'react'
import './loadingScreen.css'

const loadingScreen = () => {
    var [carregou, setCarregou] = useState('Loading...')
    useEffect(() => {
        setTimeout(() => {
            console.log('loadingScreen')
            setCarregou("Loaded")
        }, 5000)
    }, [])

  return (
    <div className='loadingScreen'>
        <div className='loadingScreenBox'>
            <img src="https://media.tenor.com/t_-AWtE0mtIAAAAi/persona-vibing.gif" />
            <p>{carregou}</p>
        </div>
    </div>
  )
}

export default loadingScreen