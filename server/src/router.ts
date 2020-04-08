const express = require('express');
const router = express.Router();

router.get('/', (req: any, res: any) => {
    res.send('server is up and running');
});

export {}
module.exports = router;