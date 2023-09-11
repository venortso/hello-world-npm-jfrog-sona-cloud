const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

const randomShit = 0;

const key = "//envorso.jfrog.io/artifactory/api/npm/hello-world-sonar-npm/:_auth=dml0by5sdW9uZ0BlbnZvcnNvLmNvbTpjbVZtZEd0dU9qQXhPakUzTWpZd01EUTFOREE2ZGpnNVVtNXdTRXBGTjJkVVlqQktaRVoxYWxaR01sZG1hVFJh";