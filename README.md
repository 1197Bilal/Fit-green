# Bilal's Life OS 🚀

Un cuadro de mando personal interactivo y sistema operativo de vida desarrollado con **HTML5, Tailwind CSS y JavaScript**.

## 🌟 Características

- **🟢 Base de Datos en la Nube con Google Sheets**:
  - Sincronización automática en tiempo real con tu Google Drive (móvil y PC).
  - Almacena todos tus datos y genera automáticamente pestañas legibles en Google Sheets (*Gastos*, *Ingresos*, *Tareas*, *Hábitos*).
- **📊 Dashboard Resumen**: Vista centralizada de finanzas, hábitos diarios, tareas pendientes y progreso general.
- **💰 Finanzas & Presupuestos**:
  - Registro de ingresos y gastos con cálculo de balance neto y control presupuestario.
  - Techos de gasto por categoría con alertas visuales.
  - Gestión de gastos fijos programados recurrentes.
- **🏋️ Fitness & Rutinas**:
  - Rutinas semanales (Torso, Espalda, Pierna y Cardio) con ejercicios, series, repeticiones y cargas.
  - Registro histórico de entrenamientos y marcas personales (PRs).
- **🎯 Hábitos Diarios**:
  - Matriz semanal interactiva de seguimiento.
  - Control de rachas (*streaks*) y porcentaje de cumplimiento.
- **✅ Tareas & Avisos**:
  - Tareas organizadas por prioridad (Alta, Media, Baja), vencimiento y categorías.
  - Recordatorios y avisos con efecto confeti al completarlas.
- **🛒 Lista de la Compra**:
  - Soporte multi-lista (Supermercado Semanal, Farmacia, etc.).
  - Artículos frecuentes con botón de añadido rápido (+).
  - Cálculo automático del coste total estimado.
- **🏆 Metas & Objetivos**:
  - Barras de progreso dinámicas con controles rápidos (+1, +5, -1) para actualizar el avance.
- **⚙️ Ajustes, Excel & Respaldo**:
  - Exportación directa a **Microsoft Excel (.csv)**.
  - Exportación e importación completa en formato **JSON**.
  - Modo Claro / Modo Oscuro.
  - Persistencia local automática (`localStorage`) cuando no hay conexión.

## 📁 Estructura del Proyecto

```text
bilal-dashboard/
├── index.html                # Estructura principal, modales e indicador de nube
├── app.js                    # Lógica, sincronización de Google Sheets y gráficas
├── style.css                 # Estilos personalizados y modo oscuro
├── data.json                 # Datos iniciales en JSON
├── google-sheets-script.js   # Script para convertir Google Sheets en tu backend
└── README.md                 # Documentación
```

## 🟢 Cómo conectar Google Sheets como Base de Datos

1. Abre [sheets.new](https://sheets.new) en tu navegador para crear una hoja nueva en Google Sheets.
2. En el menú superior, ve a **Extensiones > Apps Script**.
3. Pega el código que está en el archivo [`google-sheets-script.js`](./google-sheets-script.js) y guarda.
4. Pulsa **Implementar > Nueva implementación**, selecciona **Aplicación web** (Ejecutar como: *Yo*, Quién tiene acceso: *Cualquiera*).
5. Copia la URL generada (`.../exec`) y pégala en tu Dashboard en **Ajustes > Base de Datos: Google Sheets**. ¡Y listo! Todo se sincronizará automáticamente.

---
Diseñado y construido para Bilal.
