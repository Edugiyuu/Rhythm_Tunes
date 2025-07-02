import './Home.css';
import CustomLink from '../../utils/CustomLink';
import { animations, LogoAnimation } from './animations';
/* import TV from '../3dModel/3dModel'; */
const Home = () => {
   animations();
   LogoAnimation();

    return (
        <div className='Home'>
            <img src={`${import.meta.env.BASE_URL}imgs/Logos/PersonaTunes.svg`} className='Icon'/>

            <div className="stars">
                <img src={`${import.meta.env.BASE_URL}/star.svg`} className="star star1" />
                <img src={`${import.meta.env.BASE_URL}/star.svg`} className="star star2" />
                <img src={`${import.meta.env.BASE_URL}/star.svg`} className="star star3" />
                <img src={`${import.meta.env.BASE_URL}/star.svg`} className="star star4" />
                <img src={`${import.meta.env.BASE_URL}/star.svg`} className="star star5" />
                <img src={`${import.meta.env.BASE_URL}/star.svg`} className="star star6" />
                <img src={`${import.meta.env.BASE_URL}/star.svg`} className="star star7" />
                <img src={`${import.meta.env.BASE_URL}/star.svg`} className="star star8" />
                {/* <img src="/purpleStar.svg" className="purpleStar" />
                <img src="/purpleStar.svg" className="purpleStar" /> */}
            </div>

            <div className='HomeButtons'>
                <div>
                    <CustomLink to='/musics' title='SELECT MUSIC' className='Link' />
                    <CustomLink to='/work-in-progress' title='BONUS MUSICS' className='Link'/>
                </div>
                <div>
                    <CustomLink to='/patch-notes' title='PATCH NOTES' className='Link' />
                    <CustomLink to='/work-in-progress' title='THE PROJECT' className='Link' />
                </div>
            </div>
        </div>
    );
}

export default Home;
