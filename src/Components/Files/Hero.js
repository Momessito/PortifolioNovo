import { useEffect, useState } from 'react';
import perfil from '../images/perfil.jpeg'
import fundo from '../images/fundo.png'
import './App.css'
function Homes() {
    
        const words = ['& website', '& landing page', '& front-end', '& wordpress', '& mobile', '& ui design', '& design', '& seo'];
        const [currentWordIndex, setCurrentWordIndex] = useState(0);
      
        useEffect(() => {
          const intervalId = setInterval(() => {
            setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
          }, 2000); // Altere este valor para ajustar o tempo de alternância (em milissegundos)
      
          return () => clearInterval(intervalId); // Limpar o intervalo ao desmontar o componente
        }, []);
        const [isScrolled, setIsScrolled] = useState(false);

        useEffect(() => {
          const handleScroll = () => {
            const scrollTop = window.scrollY;
      
            // Defina a altura a partir da qual a barra de navegação deve mudar de cor
            const scrollThreshold = 50;
      
            // Verifique se o usuário rolou além do limite definido
            setIsScrolled(scrollTop > scrollThreshold);
          };
      
          // Adicione um listener de rolagem quando o componente for montado
          window.addEventListener('scroll', handleScroll);
      
          // Limpe o listener quando o componente for desmontado
          return () => {
            window.removeEventListener('scroll', handleScroll);
          };
        }, []);
    return ( 
        <>
       <div className={`navbar ${isScrolled ? 'bg-base-100' : 'bg-muda'}`}>
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">/FM</a>
      </div>
      <div className="flex-none">
        <button className="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
          </svg>
        </button>
      </div>
    </div>
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={perfil} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
    <p className="py-6 text-2x1">Olá , Sejam Bem Vindos ao meu site</p>
      <h1 className="text-5xl font-bold">Eu Sou Felipe Momesso</h1>
      <p className='title-common'>Desenvolvedor Full Stack</p>
      <span className="cd-words-wrapper" style={{ width: '305.406px' }}>
      {words.map((word, index) => (
        <b key={index} className={index === currentWordIndex ? 'is-visible' : 'is-hidden'}>
          {word}
        </b>
      ))}
    </span>
      <button className="btne btn-primary">Get Started</button>
    </div>
  </div>
</div>

<div className="carousel carousel-center rounded-box">
  <div className="carousel-item">
    <img src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" alt="Pizza" />
  </div> 
  <div className="carousel-item">
    <img src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg" alt="Pizza" />
  </div> 
  <div className="carousel-item">
    <img src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg" alt="Pizza" />
  </div> 
  <div className="carousel-item">
    <img src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg" alt="Pizza" />
  </div> 
  <div className="carousel-item">
    <img src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg" alt="Pizza" />
  </div> 
  <div className="carousel-item">
    <img src="https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg" alt="Pizza" />
  </div> 
  <div className="carousel-item">
    <img src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg" alt="Pizza" />
  </div>
</div>
        </>
     );
}

export default Homes;