import { useState } from "react";
import "./Sprint3.css";

// HU02 - Pagos en línea (pasarela SIMULADA, sin cobro real).
// Props opcionales para integrarlo con tu estado actual:
//   saldo        -> número con el adeudo actual
//   onPagoExitoso(pago) -> se llama al aprobar el pago, para actualizar saldo e historial
export default function PagoEnLinea({ saldo = 1200, onPagoExitoso }) {
  const [adeudo, setAdeudo] = useState(saldo);
  const [form, setForm] = useState({ titular: "", tarjeta: "", vence: "", cvv: "" });
  const [estado, setEstado] = useState("inicial"); // inicial | procesando | aprobado | error
  const [comprobante, setComprobante] = useState(null);
  const [mensaje, setMensaje] = useState("");

  const cambiar = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const validar = () => {
    if (!form.titular.trim()) return "Escribe el nombre del titular.";
    if (!/^\d{16}$/.test(form.tarjeta.replace(/\s/g, ""))) return "La tarjeta debe tener 16 dígitos.";
    if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(form.vence)) return "La vigencia debe tener el formato MM/AA.";
    if (!/^\d{3}$/.test(form.cvv)) return "El CVV debe tener 3 dígitos.";
    if (adeudo <= 0) return "No tienes adeudos pendientes.";
    return "";
  };

  const pagar = (e) => {
    e.preventDefault();
    const error = validar();
    if (error) {
      setMensaje(error);
      setEstado("error");
      return;
    }
    setMensaje("");
    setEstado("procesando");

    // Simulación de la pasarela: tarda 1.5 s y aprueba el pago.
    setTimeout(() => {
      const pago = {
        folio: "PAG-" + Date.now().toString().slice(-6),
        fecha: new Date().toLocaleString("es-MX"),
        monto: adeudo,
        tarjeta: "**** **** **** " + form.tarjeta.replace(/\s/g, "").slice(-4),
      };
      setComprobante(pago);
      setAdeudo(0);
      setEstado("aprobado");
      if (onPagoExitoso) onPagoExitoso(pago);
    }, 1500);
  };

  if (estado === "aprobado" && comprobante) {
    return (
      <section className="s3-card">
        <h2>Pago aprobado</h2>
        <p>Folio: <strong>{comprobante.folio}</strong></p>
        <p>Fecha: {comprobante.fecha}</p>
        <p>Monto pagado: ${comprobante.monto.toFixed(2)}</p>
        <p>Tarjeta: {comprobante.tarjeta}</p>
        <p className="s3-nota">Pasarela simulada: no se realizó ningún cobro real.</p>
      </section>
    );
  }

  return (
    <section className="s3-card">
      <h2>Pagar cuota</h2>
      <p>Adeudo actual: <strong>${adeudo.toFixed(2)}</strong></p>

      <form onSubmit={pagar} className="s3-form">
        <label>Titular
          <input name="titular" value={form.titular} onChange={cambiar} />
        </label>
        <label>Número de tarjeta
          <input name="tarjeta" value={form.tarjeta} onChange={cambiar} placeholder="4242 4242 4242 4242" inputMode="numeric" />
        </label>
        <label>Vigencia
          <input name="vence" value={form.vence} onChange={cambiar} placeholder="MM/AA" />
        </label>
        <label>CVV
          <input name="cvv" value={form.cvv} onChange={cambiar} inputMode="numeric" maxLength={3} type="password" />
        </label>

        {mensaje && <p className="s3-error" role="alert">{mensaje}</p>}

        <button type="submit" disabled={estado === "procesando"}>
          {estado === "procesando" ? "Procesando..." : "Pagar ahora"}
        </button>
      </form>
      <p className="s3-nota">Pasarela simulada para pruebas. Se conectará a un proveedor real en una fase posterior.</p>
    </section>
  );
}
