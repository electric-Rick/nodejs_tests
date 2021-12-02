 const { parentPort } = require('worker_threads')
 const { spawn } = require('child_process')
 const start = Date.now()
 const pstree = spawn('htop', []);
      
pstree.stdout.on('data', (data)=>{
  console.log(`stdout: ${data}`);
})


pstree.stderr.on('data', (data)=>{
  console.error(`stderr: ${data}`)
})

pstree.on('close', (code) =>{
  console.log(`processo ps  exited with code: ${code}`)
})

