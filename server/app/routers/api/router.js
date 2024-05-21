const express = require("express");

const router = express.Router();

const { sayWelcome } = require("../../controllers/sayActions");

router.get("/", sayWelcome);

/* ************************************************************************* */

// Import And Use Routers Here

/* ************************************************************************* */
const programsRouter = require("./programs/router");

const itemsRouter = require("./items/router");

router.use("/items", itemsRouter);
router.use("/programs", programsRouter);
/* ************************************************************************* */


module.exports = router;