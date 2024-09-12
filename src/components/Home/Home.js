import React from 'react';
import './Home.css';

function Home() {
  return (
    <main className="home">
      <h2>Faça seu login</h2>
      <label htmlFor="nome">Digite o nome do usuário</label>
      <input id="nome" type="email" />
    </main>
  );
}

export default Home;
