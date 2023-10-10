// Principio de inversión de dependencias

// Los módulos de alto nivel no deben depender de los módulos de bajo nivel. Ambos deben depender de abstracciones.

// Las abstracciones no deben depender de los detalles. Los detalles deben depender de las abstracciones.

class MyDBConnection {
  connect() {
    // lógica para conectarse a la base de datos
  }
}

class passwordReminder {
  constructor(dbConnection) {
    this.dbConnection = dbConnection;
  }
}
