const chalk = require('chalk')
const path = require('path')
const fs = require('fs')

const PACKAGES_DIR = path.resolve(__dirname, '../packages')
const folders = fs.readdirSync(PACKAGES_DIR)
const welcome = chalk.reset.inverse.bold.blue('Packages found in this repo : ')

process.stdout.write(`${welcome}\n`)

folders.forEach((f) => {
  const name = chalk.reset.inverse.bold.green(`   ${f}   `)
  process.stdout.write(`${name}\n`)
})
