import { Link } from 'react-router-dom';
import React from 'react';

function Navbar() {
  return (
    <div className='w-full bg-red-900 text-white flex justify-center py-4'>
      <div className="container flex justify-between text-lg items-center">
        <div className='text-2xl font-bold uppercase'>
          <Link to="/" className="hover:underline">Blog Pessoal</Link>
        </div>

        <div className='flex gap-4 items-center'>
          <Link to="/postagens" className='hover:underline'>Postagens</Link>
          <Link to="/temas" className='hover:underline'>Temas</Link>
          <Link to="/cadastrar-tema" className='hover:underline'>Cadastrar tema</Link>
          <Link to="/perfil" className='hover:underline'>Perfil</Link>
          <Link to="/sair" className='hover:underline'>Sair</Link>

          <div className="flex flex-grow justify-end">
            <input
              type="text"
              placeholder="Pesquisar..."
              className="text-black bg-white px-4 py-2 rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;


        
  

