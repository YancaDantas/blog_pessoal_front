import "./Home.css";
import Blog from '../../assets/blog.jpg';
import React, { useContext } from 'react';
import { UserContext } from '../../contexts/UserContexts';
import { Link } from 'react-router-dom';

function Home() {
  const { nome } = useContext(UserContext);

  return (
    <div className="flex flex-col items-center bg-beige-800 min-h-[83vh] py-4 px-8">
      <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl">
        {/* Seção da Imagem */}
        <div className="flex-1 flex items-center justify-center lg:justify-start">
          <img src={Blog} alt="Imagem do blog" className="w-full max-w-md h-auto" />
        </div>

        {/* Seção de Informações */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left lg:ml-8">
          <div className="mb-8">
            <h1 className="text-5xl color-texts mb-4">Blog Pessoal</h1>
            <h2 className="color-texts mb-8">Seu espaço para Criatividade!</h2>
          </div>
          
          <div className="flex flex-col items-center lg:items-start">
            <h2 className="text-slate-900 text-5xl mb-4">Seja bem-vindo!</h2>
            <Link
              to="/login"
              className="rounded bg-red-900 hover:bg-indigo-800 text-white py-2 px-4 flex justify-center"
            >
              Voltar
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

