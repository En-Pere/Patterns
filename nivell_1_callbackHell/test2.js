const {
  readdir,
  readFile,
  writeFile,
} = require("fs");

const {
  join
} = require("path");

const inbox = join(__dirname, "inbox");
const outbox = join(__dirname, "outbox");
const archivoInbox = join(inbox, "documento");
const archivoOutbox = join(outbox, "documento2");

const reverseText = str =>
  str
  .split("")
  .reverse()
  .join("");


  const leerDirectorio = (inbox) => {
    return new Promise((resolve, reject) => {
      readdir(inbox, (error, files) => {
        if (error) reject("Error: Folder inaccessible");
        resolve("Leyendo el archivo: " + files);
      });
    });
  }

  
  const leerArchivo = () => {
    return new Promise((resolve, reject) => {
      readFile(join(archivoInbox), "utf8", (error, data) => { 
          if (error) reject("Error: File error");
          resolve(data);
      }); 
    });
  }

  async function escribirArchivo() {
    const data = await leerArchivo(inbox);
      writeFile(join(archivoOutbox), reverseText(data), error => {
         if (error) reject("Error: File could not be saved!");
         console.log(`The doc was successfully saved in the outbox!`);
       });
  }
  escribirArchivo();


Promise.all([leerDirectorio(inbox), leerArchivo(inbox)])
  .then(values => {
  console.log(values);
}).catch(reason => {
  console.log(reason)
});

