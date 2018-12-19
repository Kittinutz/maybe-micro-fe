const express = require('express')
const fs = require('fs')
const router = express.Router()
const lazadaScrapper = require('../../web-scrapper/lazada')

router.get('/', function (req, res) {
  res.status(200).json({ message: 'main' })
})

router.get('/hot', function (req, res) {
  res.status(200).json({ message: 'hot' })
})

router.get('/recommended', function (req, res) {
  res.status(200).json({ message: 'recommended' })
})

router.get('/generate', async function (req, res) {
  await lazadaScrapper.scrapLazada()
  const data = JSON.parse(fs.readFileSync('data/lazada-flash-sale.json'))
  res.status(200).json(data)
})

router.get('/data', async function (req, res) {
  const data = JSON.parse(fs.readFileSync('data/lazada-flash-sale.json'))
  res.status(200).json(data)
})


module.exports = router