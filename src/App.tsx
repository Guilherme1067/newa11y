import { useState } from 'react'
import './App.css'

function Header() {
  return (
    <div className="header">
      <nav>
        <div className='left-side'>
          <p>Avenue Logo</p>
          <p>Investimentos</p>
          <p>Banking</p>
          <p>Assessoria Avenue</p>
          <p>Atendimento</p>
        </div>

        <div className='right-side'>

          <p>Accessar a conta</p>
          <p><button>Abra sua conta</button></p>
        </div>
      </nav>

    </div>
  )
}
function Modal() {
  return (
    <div className='modal'>
      <p>teste</p>
    </div>
  )
}
function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <>
      {isModalOpen && <Modal />}
      <Header />
      <main className='main-content'>
        <div>
          <h1>Sua vida financeira global e completa</h1>
          <h2>De investimentos a banking, abrimos as portas do<br /> mundo aos brasileiros. Sediada nos Estados <br />Unidos e no Brasil, a Avenue tem soluções que vão <br />do acesso à assessoria.</h2>

          <button onClick={() => setIsModalOpen(true)}>Abra sua conta</button>
        </div>

        <div>
          Foto mulher branca
        </div>
      </main>
    </>
  )
}

export default App
