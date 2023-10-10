//Principio de Lisvok Substitution

// Se debe usar una clase hija y el programa deba seguir funcionando

function makePayment() {
  fetch(URL) //fetch es una funcion que hace una peticion a una url
    .then((res) => res.json()) //res.json() es una funcion que convierte el resultado en un json
    .catch((error) => {
      errorHandler.handle(error);
    }); //catch es una funcion que captura el error
}

const consoleErrorHandler = {
  handle: function (error) {
    console.log(error);
  },
};

const alertErrorHandler = {
  handle: function (error) {
    sendErrrorToServer(error);
  },
};
