import { useEffect } from 'react';
import gsap from 'gsap';
import './Home.css';

const Home = () => {
    useEffect(() => {
        gsap.to('.star', {
            y: "-=40",
            duration: 2,
            repeat: -1,
            yoyo: true,
            stagger: 0.1,
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
            </div>

            <div className='HomeButtons'>
                <div>
                    <button>
                        Start Singing
                    </button>
                    <button>Start Singing</button>
                </div>
                <div>
                    <button>Start Singing</button>
                    <button>Start Singing</button>
                </div>
            </div>
        </div>
    );
}

export default Home;
