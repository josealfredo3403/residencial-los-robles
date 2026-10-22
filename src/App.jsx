jsx
import { useState } from 'react'
import EstadoCuenta from './components/EstadoCuenta.jsx'
import BotonEmergencia from './components/BotonEmergencia.jsx'
import PagoEnLinea from './components/PagoEnLinea.jsx'
import Notificaciones from './components/Notificaciones.jsx'

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
          {pestana === 'cuenta' && <EstadoCuenta />}
          {pestana === 'pagos' && <PagoEnLinea saldo={1200} />}
          {pestana === 'avisos' && <Notificaciones />}
          {pestana === 'emergencia' && <BotonEmergencia />}
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
            className={pestana === 'pagos' ? 'tab activa' : 'tab'}
            onClick={() => setPestana('pagos')}
          >
            <span className="tab-icono">💳</span>
            Pagos
          </button>
          <button
            className={pestana === 'avisos' ? 'tab activa' : 'tab'}
            onClick={() => setPestana('avisos')}
          >
            <span className="tab-icono">🔔</span>
            Avisos
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
