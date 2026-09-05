import { useState } from 'react'
import EstadoCuenta from './components/EstadoCuenta.jsx'
import BotonEmergencia from './components/BotonEmergencia.jsx'

export default function App() {
  const [pestana, setPestana] = useState('cuenta')

  return (
    <div className="fondo">
      <div className="telefono">
        <header className="encabezado">
          <span className="encabezado-eyebrow">Residencial</span>
          <h1>Los Robles</h1>
        </header>

        <main className="contenido">
          {pestana === 'cuenta' ? <EstadoCuenta /> : <BotonEmergencia />}
        </main>

        <nav className="tabs">
          <button
            className={pestana === 'cuenta' ? 'tab activa' : 'tab'}
            onClick={() => setPestana('cuenta')}
          >
            <span className="tab-icono">$</span>
            Estado de cuenta
          </button>
          <button
            className={pestana === 'emergencia' ? 'tab activa' : 'tab'}
            onClick={() => setPestana('emergencia')}
          >
            <span className="tab-icono">!</span>
            Emergencia
          </button>
        </nav>
      </div>
    </div>
  )
}
