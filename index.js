#!/usr/bin/env node

const { mkdir, writeFile } = require('fs')
const { join } = require('path')
const cwd = process.cwd()

const endpoints = [...process.argv].splice(2)
let async = endpoints.indexOf('-async')
if (async !== -1) {
	endpoints.splice(async, 1)
	async = 'async '
} else {
	async = ''
}

mkdir(join(cwd, 'site'), (err) => {
	if (err) {
		if (err.errno === -17) {
			console.log('\x1b[30m\x1b[43m[WARN]\x1b[0m \x1b[33mThe "site" directory already exists.\x1b[0m')
		} else {
			console.error('\x1b[30m\x1b[41m[FATAL]\x1b[0m \x1b[31mAn error occured while trying to create the "site" directory:\x1b[0m')
			console.error(err)
			system.exit(-1)
		}
	}
	let fileString = `const Vaxic = require('Vaxic')
const app = new Vaxic()

app.use(Vaxic.static('host'))
	
`
	for (let i = 0; i < endpoints.length; i++) {
		const currentEndpoint = endpoints[i]
		fileString += `app.add('GET', '/api/${currentEndpoint}', ${async}(req, res) => {
	
})

app.add('POST', '/api/${currentEndpoint}', ${async}(req, res) => {
	
})

app.add('PUT', '/api/${currentEndpoint}', ${async}(req, res) => {
	
})

app.add('DELETE', '/api/${currentEndpoint}', ${async}(req, res) => {
	
})

`
	}
	writeFile('site/serve.js', fileString, (err) => {
		if (err) {
			console.error('\x1b[30m\x1b[41m[FATAL]\x1b[0m \x1b[31mAn error occured while trying to write the "site/serve.js" file:\x1b[0m')
			console.error(err)
			system.exit(-1)
		}
	})
})