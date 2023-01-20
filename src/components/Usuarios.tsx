import React, { useState, useEffect } from "react";
import { get, set } from 'idb-keyval';

const Usuarios = () => {

  const [isUser, setIsUser] = useState(false);

  const iniciarSesion = () => {
    set('usuario', !isUser)
      .then(() => setIsUser(!isUser))
      .catch((error) => console.log('Something went wrong'));
  }

  useEffect(() => {
    get('usuario').then((usuario) => {
      if (usuario !== undefined) setIsUser(usuario);
    })
  }, []);

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-12 text-center">
          {isUser ?
            <>
              <h1 className="my-2">Bienvenido!!</h1>
              <button className="btn btn-info my-2" onClick={iniciarSesion}>Salir</button>
            </>
            :
            <>
              <h1 className="my-2 ">:(</h1>
              <button className="btn btn-info my-2" onClick={iniciarSesion}>Entrar</button>
            </>
          }
        </div>
      </div>
    </div>
  );
}

export default Usuarios;