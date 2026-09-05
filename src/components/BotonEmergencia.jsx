import { useState } from 'react'

const CONTACTOS = ['Caseta de seguridad', 'Presidente de mesa directiva', 'Vecino de la vivienda 11']

export default function BotonEmergencia() {
  const [alertas, setAlertas] = useState([])
  const [enviando, setEnviando] = useState(false)

  function enviarAlerta() {
    setEnviando(true)
    setTimeout(() => {
      const nuevaAlerta = {
        id: alertas.length + 1,
        hora: new Date().toLocaleTimeString('es-MX', { hour: '2-digit', minute: '2-digit' }),
        ubicacion: 'Vivienda 12, Manzana 3',
      }
      setAlertas([nuevaAlerta, ...alertas])
      setEnviando(false)
    }, 900)
  }

  return (
    <section className="pantalla" aria-label="Botón de emergencia">
      <p className="etiqueta-vivienda">Residente: Vivienda 12</p>

      <div className="zona-emergencia">
        <button
          className="boton-emergencia"
          onClick={enviarAlerta}
          disabled={enviando}
        >
          {enviando ? 'Enviando…' : 'Enviar alerta'}
        </button>
        <p className="texto-ayuda">
          Se notificará tu ubicación a seguridad y a tus contactos de emergencia.
        </p>
      </div>

      <h2 className="subtitulo">Se notifica a</h2>
      <ul className="lista-contactos">
        {CONTACTOS.map((contacto) => (
          <li key={contacto}>{contacto}</li>
        ))}
      </ul>

      {alertas.length > 0 && (
        <>
          <h2 className="subtitulo">Alertas enviadas</h2>
          <ul className="lista-alertas">
            {alertas.map((alerta) => (
              <li key={alerta.id} className="alerta">
                <span className="alerta-punto" />
                <div>
                  <p className="alerta-texto">Alerta enviada a las {alerta.hora}</p>
                  <p className="alerta-ubicacion">{alerta.ubicacion}</p>
                </div>
              </li>
            ))}
          </ul>
        </>
      )}
    </section>
  )
}
