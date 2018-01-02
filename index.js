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
			// TODO make orange
			console.log('[WARN] "site" directory already exists.')
		} else {
			// TODO make red
			console.error('[FATAL] an error occured while trying to create the "site" directory:')
			console.error(err)
			system.exit(-1)
		}
	}
	let fileString = `const Vaxic = require('Vaxic')
const app = new Vaxic()
	
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
			// TODO make red
			console.error('[FATAL] an error occured while trying to write the "site/serve.js" file:')
			console.error(err)
			system.exit(-1)
		}
	})
})