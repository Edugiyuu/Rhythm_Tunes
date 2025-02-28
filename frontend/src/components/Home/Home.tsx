import { useEffect } from 'react';
import gsap from 'gsap';
import './Home.css';

const Home = () => {
    useEffect(() => {
        gsap.to('.star', {
            y: "-=40",                // Movimenta a estrela um pouco para cima e para baixo
            duration: 2,            // Tempo da animação
            repeat: -1,               // Repete infinitamente
            yoyo: true,               // Faz voltar ao tamanho original
            stagger: 0.1, 
            ease: "power1.inOut",      
        });
        gsap.to('.star', {
            scale: 1.8,               // Aumenta a estrela
            rotationX: 200,           // Adiciona rotação no eixo X
            rotationY: 200,           // Adiciona rotação no eixo Y
            duration: 1.3,            // Tempo da animação
            repeat: -1,               // Repete infinitamente
            yoyo: true,               // Faz voltar ao tamanho original
            ease: "power1.inOut",       // Suavização da animação
            stagger: 0.2,             // Cada estrela começa um pouco depois da outra
            transformOrigin: "center",// Garante que a rotação ocorra no centro da estrela
            perspective: 500          // Cria a sensação de profundidade
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
