/**
 * ====================================================================
 * BILAL'S LIFE OS - GOOGLE APPS SCRIPT BACKEND
 * ====================================================================
 * 
 * Instrucciones de instalación:
 * 1. Entra en https://sheets.new para crear una hoja de Google Sheets en blanco.
 * 2. Nómbrala como "Bilal Life OS DB".
 * 3. En el menú superior haz clic en: Extensiones > Apps Script.
 * 4. Borra el código que haya y PEGA TODO ESTE ARCHIVO.
 * 5. Haz clic en "Guardar" (icono de disquete).
 * 6. Haz clic en el botón azul superior: Implementar > Nueva implementación.
 * 7. En el icono de engranaje (Tipo), selecciona: "Aplicación web".
 * 8. Configura:
 *    - Descripción: "Life OS API"
 *    - Ejecutar como: "Yo" (tu cuenta)
 *    - Quién tiene acceso: "Cualquiera" (Anyone)
 * 9. Haz clic en "Implementar", autoriza los permisos con tu cuenta de Google.
 * 10. Copia la "URL de la aplicación web" (termina en /exec) y pégala
 *     en tu Dashboard (en Ajustes > Sincronización Google Sheets).
 */

function doGet(e) {
  try {
    var rawSheet = getOrCreateSheet("_DB_RAW");
    var dataStr = rawSheet.getRange(1, 1).getValue();

    if (!dataStr) {
      return ContentService.createTextOutput(JSON.stringify({ empty: true }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    return ContentService.createTextOutput(dataStr)
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ error: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doPost(e) {
  try {
    var jsonString = e.postData.contents;
    if (!jsonString) {
      return ContentService.createTextOutput(JSON.stringify({ error: "No data provided" }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    var state = JSON.parse(jsonString);

    // 1. Guardar copia raw para la web
    var rawSheet = getOrCreateSheet("_DB_RAW");
    rawSheet.getRange(1, 1).setValue(jsonString);

    // 2. Generar pestañas visuales legibles para ver en Google Sheets
    populateGastosSheet(state.expenses || []);
    populateIngresosSheet(state.incomes || []);
    populateTareasSheet(state.tasks || []);
    populateHabitosSheet(state.habits || []);

    return ContentService.createTextOutput(JSON.stringify({ status: "success", timestamp: new Date() }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ error: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function getOrCreateSheet(sheetName) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(sheetName);
  if (!sheet) {
    sheet = ss.insertSheet(sheetName);
  }
  return sheet;
}

function populateGastosSheet(expenses) {
  var sheet = getOrCreateSheet("Gastos");
  sheet.clear();
  sheet.appendRow(["ID", "Fecha", "Concepto", "Categoría", "Importe (€)", "Fijo", "Notas"]);
  sheet.getRange(1, 1, 1, 7).setFontWeight("bold").setBackground("#fee2e2");

  if (expenses.length > 0) {
    var rows = expenses.map(function(e) {
      return [e.id, e.date, e.concept, e.category, e.amount, e.isFixed ? "SÍ" : "NO", e.notes || ""];
    });
    sheet.getRange(2, 1, rows.length, 7).setValues(rows);
  }
}

function populateIngresosSheet(incomes) {
  var sheet = getOrCreateSheet("Ingresos");
  sheet.clear();
  sheet.appendRow(["ID", "Fecha", "Concepto", "Importe (€)", "Recurrente", "Notas"]);
  sheet.getRange(1, 1, 1, 6).setFontWeight("bold").setBackground("#dcfce7");

  if (incomes.length > 0) {
    var rows = incomes.map(function(i) {
      return [i.id, i.date, i.concept, i.amount, i.isRecurring ? "SÍ" : "NO", i.notes || ""];
    });
    sheet.getRange(2, 1, rows.length, 6).setValues(rows);
  }
}

function populateTareasSheet(tasks) {
  var sheet = getOrCreateSheet("Tareas");
  sheet.clear();
  sheet.appendRow(["ID", "Título", "Fecha Límite", "Hora", "Prioridad", "Categoría", "Completada"]);
  sheet.getRange(1, 1, 1, 7).setFontWeight("bold").setBackground("#e0e7ff");

  if (tasks.length > 0) {
    var rows = tasks.map(function(t) {
      return [t.id, t.title, t.dueDate, t.dueTime || "", t.priority, t.category, t.completed ? "SÍ" : "NO"];
    });
    sheet.getRange(2, 1, rows.length, 7).setValues(rows);
  }
}

function populateHabitosSheet(habits) {
  var sheet = getOrCreateSheet("Hábitos");
  sheet.clear();
  sheet.appendRow(["ID", "Hábito", "Meta Semanal", "Total Días Completados"]);
  sheet.getRange(1, 1, 1, 4).setFontWeight("bold").setBackground("#fef3c7");

  if (habits.length > 0) {
    var rows = habits.map(function(h) {
      return [h.id, h.name, h.frequencyDaysPerWeek + "d/semana", (h.completedDates || []).length];
    });
    sheet.getRange(2, 1, rows.length, 4).setValues(rows);
  }
}
