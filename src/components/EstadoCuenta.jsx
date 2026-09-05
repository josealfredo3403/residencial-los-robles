import { useState } from 'react'

const HISTORIAL_INICIAL = [
  { id: 1, concepto: 'Cuota de mantenimiento - Julio', monto: 450, fecha: '05 jul 2026', estado: 'Pagado' },
  { id: 2, concepto: 'Cuota de mantenimiento - Agosto', monto: 450, fecha: '05 ago 2026', estado: 'Pagado' },
]

export default function EstadoCuenta() {
  const [historial, setHistorial] = useState(HISTORIAL_INICIAL)
  const [adeudo, setAdeudo] = useState(450)

  const saldoAlDia = adeudo === 0

  function registrarPago() {
    if (adeudo === 0) return
    const nuevoMovimiento = {
      id: historial.length + 1,
      concepto: 'Cuota de mantenimiento - Septiembre',
      monto: adeudo,
      fecha: new Date().toLocaleDateString('es-MX', { day: '2-digit', month: 'short', year: 'numeric' }),
      estado: 'Pagado',
    }
    setHistorial([nuevoMovimiento, ...historial])
    setAdeudo(0)
  }

  return (
    <section className="pantalla" aria-label="Estado de cuenta">
      <p className="etiqueta-vivienda">Vivienda 12 · Manzana 3</p>

      <div className={saldoAlDia ? 'tarjeta-saldo al-dia' : 'tarjeta-saldo'}>
        <span className="tarjeta-saldo-label">
          {saldoAlDia ? 'Cuenta al día' : 'Adeudo actual'}
        </span>
        <span className="tarjeta-saldo-monto">
          ${adeudo.toLocaleString('es-MX')}
        </span>
        {!saldoAlDia && (
          <button className="boton-pagar" onClick={registrarPago}>
            Pagar cuota de septiembre
          </button>
        )}
      </div>

      <h2 className="subtitulo">Historial de pagos</h2>
      <ul className="lista-historial">
        {historial.map((mov) => (
          <li key={mov.id} className="movimiento">
            <div>
              <p className="movimiento-concepto">{mov.concepto}</p>
              <p className="movimiento-fecha">{mov.fecha}</p>
            </div>
            <div className="movimiento-derecha">
              <span className="movimiento-monto">${mov.monto}</span>
              <span className="movimiento-estado">{mov.estado}</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
