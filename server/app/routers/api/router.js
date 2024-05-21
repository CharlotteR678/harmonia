const express = require("express");

const router = express.Router();

const { sayWelcome } = require("../../controllers/sayActions");

router.get("/", sayWelcome);

/* ************************************************************************* */

// Import And Use Routers Here

/* ************************************************************************* */
const programsRouter = require("./programs/router");

const itemsRouter = require("./items/router");

const categoryRouter = require("./catActions/router");

router.use("/items", itemsRouter);
router.use("/programs", programsRouter);
router.use("/categories", categoryRouter);
/* ************************************************************************* */


module.exports = router;