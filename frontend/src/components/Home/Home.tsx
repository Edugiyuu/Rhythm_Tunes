import { useEffect } from 'react';
import gsap from 'gsap';
import './Home.css';
import CustomLink from '../../utils/CustomLink';

const Home = () => {
    useEffect(() => {
        gsap.to('.star', {
            y: "-=40",
            duration: 2,
            repeat: -1,
            yoyo: true,
            stagger: 0.2,
            ease: "power1.inOut",
        });
        gsap.to('.star', {
            scale: 1.8,
            rotationX: 200,
            rotationY: 200,
            duration: 1.3,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
            stagger: 0.2,
            transformOrigin: "center",
            perspective: 500
        });
        gsap.to('.star', {
            scale: 1.8,
            rotationX: 200,
            rotationY: 200,
            duration: 1.3,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
            stagger: 0.2,
            transformOrigin: "center",
            perspective: 500
        });
        gsap.fromTo(".Link",
            { opacity: 0, scale: 0.7}, 
            { opacity: 1, duration: 0.8, ease:"power3" ,stagger: 0.2, scale: 1, yoyo: true}
        );

    }, []);


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
                    <CustomLink to='/musics' title='SELECT MUSIC' className='Link'/>
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
