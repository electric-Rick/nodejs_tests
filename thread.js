const { Worker, isMainThread, parentPort } = require('worker_threads');

if (isMainThread) {
  const worker = new Worker(__filename);
  worker.once('message', (message) => {
    console.log(message);  // Imprime mensagem.
  });
  worker.postMessage('Mensagem do Worker');
} else {
  // Quando uma mensagem do pai é recebida, ele posta a mensagem
    parentPort.once('message', (message) => {
    parentPort.postMessage(message);
  });
}