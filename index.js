const uri = './maquina.json'
const leerArchivo = require("fs").readFileSync(uri);
const archivo = JSON.parse(leerArchivo, "utf-8");

const maquinaTuring = (archivo, cinta, final, estado) => {
  let i = 0;
  try {
    while (estado != final) {
      let celula = cinta[i];
      let actual = celula ? archivo[estado][celula] : archivo[estado].B;

      if (!actual) return console.info(" -------- Entrada Rechazada ------- ");

      cinta.splice(i, 1, actual.w);
      i += actual.m;
      estado = actual.n;
      ( actual.m ? 1 : -1)
      console.info("Nodo : ", estado, "SobreEscribe : ", actual.w, "Movimiento: ",);
    }
    return cinta;
  } catch (err) {
    console.error(err);
  }
};

function Main() {
  let entradasCinta = ['0','0','1','1'] ;
  let estadoFinal='q4';
  let estadoInicial = 'q0';
  let res = maquinaTuring(
    archivo,
    entradasCinta,
    estadoFinal,
    estadoInicial
  );
  console.log(res);
}

Main();

