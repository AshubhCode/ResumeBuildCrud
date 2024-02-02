const express = require("express");
const router = express.Router();

const Resume = require("../models/resume.model");
const { generateCrudMethods } = require("../services/app");

const resumeCrud = generateCrudMethods(Resume);
const { validateDbId, raiseRecord404Error } = require("../middlewares/app");

router.get("/", async (req, res, next) => {
  try {
    const data = await resumeCrud.getAll();
    res.send(data);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", validateDbId, async (req, res, next) => {
  try {
    const data = await resumeCrud.getById(req.params.id);
    if (data) {
      res.send(data);
    } else {
      raiseRecord404Error(req, res);
    }
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const data = await resumeCrud.create(req.body);
    res.status(201).json(data);
  } catch (error) {
    next(error);
  }
});

router.put("/:id", validateDbId, async (req, res, next) => {
  try {
    const data = await resumeCrud.update(req.params.id, req.body);
    if (data) {
      res.send(data);
    } else {
      raiseRecord404Error(req, res);
    }
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", validateDbId, async (req, res, next) => {
  try {
    const data = await resumeCrud.delete(req.params.id);
    if (data) {
      res.send(data);
    } else {
      raiseRecord404Error(req, res);
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
