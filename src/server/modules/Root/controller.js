const express = require('express');
const router = express.Router();

class RootRouter  {
    constructor() {
        this.router = router;
    }
}

module.exports = RootRouter;