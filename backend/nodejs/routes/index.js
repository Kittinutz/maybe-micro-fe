const express = require('express')
const router = express.Router()
const lazadaRoutes = require('./lazada')

router.get('/', (req, res) => {
	res.status(200).json({ message: 'This is api.' })
})

router.use('/lazada', lazadaRoutes)

module.exports = router