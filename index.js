const { Worker, workerData, isMainThread } = require('worker_threads')
const request = require('request')
const { spawn } = require('child_process')

const arr_commands = [{'pstree':spawn('pstree', ['-o pid, tid, command',])},]
const pstree = spawn('pstree', ['-help']);




function startWorker(path, cb) {
	const worker = new Worker(path, { workerData: null })
	worker.on('message', (msg) => {
		cb(null, msg)
	})
	worker.on('error', cb)
	worker.on('exit', (code) => {
		if(code != 0)
	    console.error(new Error(`Worker finalizado com exit code = ${code}`))
   })
	return worker
}



if(isMainThread){


pstree.stdout.on('data', (data)=>{
	console.log(`stdout: ${data}`);
})
pstree.stderr.on('data', (data)=>{
	console.error(`stderr: ${data}`)
})

pstree.on('close', (code) =>{
	console.log(`child process exited with code: ${code}`)
})
} else {
// Inicia o worker em outra thread

	startWorker(__dirname + '/worker-code.js', (err, result) => {
	if(err) return console.error(err)
 	 console.log("** COMPUTAÇÃO PESADA FINALIZADA **")
	 console.log(`Duração = ${(result.end - result.start) / 1000} segundos`)

})

}







// Continua com o a execução na thread principal

