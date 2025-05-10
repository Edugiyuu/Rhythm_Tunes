import './Home.css';
import CustomLink from '../../utils/CustomLink';
import { animations } from './animations';

const Home = () => {
   animations();

    return (
        <div className='Home'>
            <img src="./personaTunes.svg" className='Icon' />

            <div className="stars">
                <img src="/star.svg" className="star star1" />
                <img src="/star.svg" className="star star2" />
                <img src="/star.svg" className="star star3" />
                <img src="/star.svg" className="star star4" />
                <img src="/star.svg" className="star star5" />
                <img src="/star.svg" className="star star6" />
                <img src="/star.svg" className="star star7" />
                <img src="/star.svg" className="star star8" />
                {/* <img src="/purpleStar.svg" className="purpleStar" />
                <img src="/purpleStar.svg" className="purpleStar" /> */}
            </div>

            <div className='HomeButtons'>
                <div>
                    <CustomLink to='/musics' title='SELECT MUSIC' className='Link' />
                    <CustomLink to='/musics' title='BONUS MUSICS' className='Link'/>
                </div>
                <div>
                    <CustomLink to='/musics' title='SELECT MUSIC' className='Link' />
                    <CustomLink to='/musics' title='SELECT MUSIC' className='Link' />
                </div>
            </div>
        </div>
    );
}

export default Home;
