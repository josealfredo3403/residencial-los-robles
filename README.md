# Residencial Los Robles - Sprints 1 y 3

Código del proyecto "Aplicación móvil para Residencial Los Robles", desarrollado con React (Vite) como parte de la Actividad 3 (SCRUM) de Proyecto 2.

Tablero de seguimiento (Trello): https://trello.com/invite/b/6a948d8daf0c17c098ad0c6e/ATTId25784f3517795be775a14eea63600ee0CAB72B4/residencial-los-robles

## Historias de usuario implementadas

Todas se implementan con datos simulados (mock).

### Sprint 1

#### HU-1: Estado de cuenta digital
- Muestra el saldo/adeudo actual de la vivienda y su historial de pagos.
- El botón "Pagar cuota" simula el registro de un pago: el saldo se actualiza en tiempo real y el movimiento se agrega al historial de forma inmediata.
- **Relación con el objetivo del proyecto:** sustituye los registros en papel y reduce errores en el seguimiento de adeudos, que era uno de los problemas centrales identificados en Residencial Los Robles.

#### HU-4: Botón de emergencia
- Botón de acceso rápido que, al presionarse, simula el envío de una alerta con la ubicación del residente a seguridad y a un grupo de contactos definidos.
- Cada alerta enviada queda registrada con hora y ubicación en un historial visible.
- **Relación con el objetivo del proyecto:** atiende la ausencia de protocolos digitales de emergencia detectada en el diagnóstico inicial de la colonia.

### Sprint 3

#### HU-2: Pagos en línea (versión simulada)
- Pestaña "Pagos" con formulario de tarjeta de prueba, validación de campos, estado "Procesando" y comprobante con folio.
- No se conecta a una pasarela de pago real.

#### HU-3: Notificaciones masivas (versión simulada)
- Pestaña "Avisos" con panel para enviar avisos por destinatario y bandeja del residente con marca de leído y no leído.
- No se envían notificaciones push reales.

## Ajustes realizados
- HU-2 y HU-3 se habían dejado planificadas en el Sprint 1 porque requieren servicios externos (pasarela de pago y notificaciones push). En el Sprint 3 se implementaron en versión simulada para validar el flujo de usuario y la interfaz.
- La navegación inferior pasó de 2 a 4 pestañas (Estado de cuenta, Pagos, Avisos, Emergencia).

## Cómo ejecutar el proyecto

```bash
npm install
npm run dev
```

Esto levanta un servidor local (Vite) y muestra la app en el navegador.

## Estructura del proyecto

```
src/
  App.jsx                      -> navegación entre pantallas
  components/
    EstadoCuenta.jsx           -> HU-1
    BotonEmergencia.jsx        -> HU-4
    PagoEnLinea.jsx            -> HU-2
    Notificaciones.jsx         -> HU-3
    Sprint3.css                -> estilos de HU-2 y HU-3
  index.css                    -> estilos
```
