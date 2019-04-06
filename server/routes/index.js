const express = require("express");
const router = express.Router();

router.get('/flash', (req, res) => {
	res.end('olaa')
})

module.exports = router