# vaxic-bpgen
> Generate boilerplate [Vaxic](https://www.npmjs.com/package/vaxic) workspaces in seconds

## Installation
```
[sudo] npm i -g vaxic-bpgen
```

## Usage
`vaxic-bpgen [endpoints...] [-async]`

`endpoints` - a list of endpoints that should be created (ex. `assignments`, `calenders`, etc.)

`-async` - makes the handlers `async` functions

## Examples
`vaxic-bpgen assignments calendars -async`

Generates the file:
```javascript
const Vaxic = require('Vaxic')
const app = new Vaxic()
	
app.add('GET', '/api/assignments', async (req, res) => {
	
})

app.add('POST', '/api/assignments', async (req, res) => {
	
})

app.add('PUT', '/api/assignments', async (req, res) => {
	
})

app.add('DELETE', '/api/assignments', async (req, res) => {
	
})

app.add('GET', '/api/calendars', async (req, res) => {
	
})

app.add('POST', '/api/calendars', async (req, res) => {
	
})

app.add('PUT', '/api/calendars', async (req, res) => {
	
})

app.add('DELETE', '/api/calendars', async (req, res) => {
	
})
```

`vaxic-bpgen models dailyRewards`

Generates the file:
```javascript
const Vaxic = require('Vaxic')
const app = new Vaxic()
	
app.add('GET', '/api/models', (req, res) => {
	
})

app.add('POST', '/api/models', (req, res) => {
	
})

app.add('PUT', '/api/models', (req, res) => {
	
})

app.add('DELETE', '/api/models', (req, res) => {
	
})

app.add('GET', '/api/dailyRewards', (req, res) => {
	
})

app.add('POST', '/api/dailyRewards', (req, res) => {
	
})

app.add('PUT', '/api/dailyRewards', (req, res) => {
	
})

app.add('DELETE', '/api/dailyRewards', (req, res) => {
	
})
```