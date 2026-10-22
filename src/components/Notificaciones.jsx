import { useState } from "react";
import "./Sprint3.css";

// HU03 - Notificaciones masivas (SIMULADAS, sin notificaciones push reales).
// Incluye el panel del administrador (enviar) y la bandeja del residente (leer).
const DESTINATARIOS = ["Todos los residentes", "Manzana A", "Manzana B", "Manzana C"];

export default function Notificaciones() {
  const [notificaciones, setNotificaciones] = useState([
    {
      id: 1,
      titulo: "Bienvenida",
      mensaje: "Ya puedes consultar tu estado de cuenta desde la app.",
      destino: "Todos los residentes",
      fecha: new Date().toLocaleString("es-MX"),
      leida: false,
    },
  ]);
  const [form, setForm] = useState({ titulo: "", mensaje: "", destino: DESTINATARIOS[0] });
  const [error, setError] = useState("");

  const cambiar = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const enviar = (e) => {
    e.preventDefault();
    if (!form.titulo.trim() || !form.mensaje.trim()) {
      setError("Completa el título y el mensaje.");
      return;
    }
    setError("");
    const nueva = {
      id: Date.now(),
      titulo: form.titulo.trim(),
      mensaje: form.mensaje.trim(),
      destino: form.destino,
      fecha: new Date().toLocaleString("es-MX"),
      leida: false,
    };
    setNotificaciones([nueva, ...notificaciones]);
    setForm({ titulo: "", mensaje: "", destino: DESTINATARIOS[0] });
  };

  const marcarLeida = (id) =>
    setNotificaciones(notificaciones.map((n) => (n.id === id ? { ...n, leida: true } : n)));

  const noLeidas = notificaciones.filter((n) => !n.leida).length;

  return (
    <div className="s3-grid">
      <section className="s3-card">
        <h2>Enviar aviso (administrador)</h2>
        <form onSubmit={enviar} className="s3-form">
          <label>Título
            <input name="titulo" value={form.titulo} onChange={cambiar} />
          </label>
          <label>Mensaje
            <textarea name="mensaje" rows={3} value={form.mensaje} onChange={cambiar} />
          </label>
          <label>Destinatarios
            <select name="destino" value={form.destino} onChange={cambiar}>
              {DESTINATARIOS.map((d) => (
                <option key={d}>{d}</option>
              ))}
            </select>
          </label>
          {error && <p className="s3-error" role="alert">{error}</p>}
          <button type="submit">Enviar aviso</button>
        </form>
        <p className="s3-nota">Notificaciones internas simuladas, sin envío push real.</p>
      </section>

      <section className="s3-card">
        <h2>Bandeja del residente ({noLeidas} sin leer)</h2>
        {notificaciones.length === 0 && <p>No tienes avisos por ahora.</p>}
        <ul className="s3-lista">
          {notificaciones.map((n) => (
            <li key={n.id} className={n.leida ? "s3-leida" : "s3-nueva"}>
              <strong>{n.titulo}</strong>
              <p>{n.mensaje}</p>
              <small>{n.destino} · {n.fecha}</small>
              {!n.leida && (
                <button type="button" onClick={() => marcarLeida(n.id)}>
                  Marcar como leída
                </button>
              )}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
