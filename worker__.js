 const { parentPort } = require('worker_threads')
 const { spawn } = require('child_process')
 const start = Date.now()
 const pstree = spawn('htop', ['']);
console.log('Eu executei...')


      
pstree.stdout.on('data', (data)=>{
  console.log(`stdout: ${data}`);
})
pstree.stderr.on('data', (data)=>{
  console.error(`stderr: ${data}`)
})

pstree.on('close', (code) =>{
  console.log(`child process exited with code: ${code}`)
})



 


/*
const {
  Worker,
  isMainThread,
  setEnvironmentData,
  getEnvironmentData,
} = require('worker_threads');

if (isMainThread) {
  setEnvironmentData('Hello', 'World!');
  const worker = new Worker(__filename);
} else {
  console.log(getEnvironmentData('Hello'));  // Prints 'World!'.
}
*/

