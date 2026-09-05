# Residencial Los Robles — Sprint 1

Código del Sprint 1 del proyecto "Aplicación móvil para Residencial Los Robles", desarrollado con React (Vite) como parte de la Actividad 3 (SCRUM) de Lenguajes de Programación Back End.

## Historias de usuario implementadas

Este Sprint 1 implementa, con datos simulados (mock), las dos historias de usuario de mayor prioridad y mayor impacto directo en el residente:

### HU-1: Estado de cuenta digital
- Muestra el saldo/adeudo actual de la vivienda y su historial de pagos.
- El botón "Pagar cuota" simula el registro de un pago: el saldo se actualiza **en tiempo real** y el movimiento se agrega al historial de forma inmediata.
- **Relación con el objetivo del proyecto:** sustituye los registros en papel y reduce errores en el seguimiento de adeudos, que era uno de los problemas centrales identificados en Residencial Los Robles.

### HU-4: Botón de emergencia
- Botón de acceso rápido que, al presionarse, simula el envío de una alerta con la ubicación del residente a seguridad y a un grupo de contactos definidos.
- Cada alerta enviada queda registrada con hora y ubicación en un historial visible.
- **Relación con el objetivo del proyecto:** atiende la ausencia de protocolos digitales de emergencia detectada en el diagnóstico inicial de la colonia.

Las historias HU-2 (pagos con pasarela real) y HU-3 (notificaciones masivas) quedaron planificadas en el Sprint Backlog pero su integración con servicios externos (pasarela de pago, servicio de notificaciones push) no se implementó con datos reales en este Sprint, tal como se documenta en la calendarización.

## Cómo ejecutar el proyecto

```bash
npm install
npm run dev
```

Esto levanta un servidor local (Vite) y muestra la app en el navegador.

## Estructura del proyecto

```
src/
  App.jsx                     -> navegación entre pantallas
  components/
    EstadoCuenta.jsx          -> HU-1
    BotonEmergencia.jsx       -> HU-4
  index.css                   -> estilos
```

## Cómo subir este proyecto a GitHub

```bash
git init
git add .
git commit -m "Sprint 1: Estado de cuenta y Botón de emergencia"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/residencial-los-robles.git
git push -u origin main
```

(Reemplaza `TU-USUARIO` por tu usuario de GitHub, después de crear el repositorio vacío en github.com.)
