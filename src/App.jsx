import './App.css'
import Sobre from './components/Sobre'
import MeusProjetos from './components/MeusProjetos'

function App() {
  return (
    <div className="App">
      <header style={{ backgroundColor: '#011C40', color: 'white', padding: '20px', textAlign: 'center' }}>
        <h1>Meu Portfólio Profissional</h1>
        <p>Sistemas | Contabilidade | Social Media</p>
      </header>

      <main>
        {/* Aqui estamos chamando os componentes que você criou */}
        <Sobre />
        <MeusProjetos />
      </main>

      <footer style={{ textAlign: 'center', padding: '20px', fontSize: '0.8rem' }}>
        <p>© 2026 - Desenvolvido em React</p>
      </footer>
    </div>
  )
}

export default App