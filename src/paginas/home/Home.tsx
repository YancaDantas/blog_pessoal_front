import "./Home.css";
import React from 'react';
import Blog from '../../assets/blog.jpg';
import './Home.css';
import ListaPostagens from '../../assets/components/postagens/listaPostagem/ListaPostagem';
import ModalPostagem from '../../assets/components/postagens/modalPostagem/ModalPostagem';


function Home() {
  return (
      <>
      <div className="bg-red-400 flex justify-center">
        <div className='container grid grid-cols-2 text-white'>
          <div className="flex flex-col gap-4 items-center justify-center py-4">
            <h2 className='text-5xl font-bold'>Seja bem vindo!</h2>
            <p className='text-xl'>Seu espaço para criatividade!</p>

            <div className="flex justify-around gap-4">
            <ModalPostagem />
            <button className='rounded bg-white text-red-800 py-2 px-4'>Ver postagens</button>
          </div>
          </div>

          <div className="flex justify-center ">
            <img src={Blog} alt="" className='w-2/3' />
    
          </div>
        </div>
      </div>
      <ListaPostagens />
    </>
  );
}

export default Home;