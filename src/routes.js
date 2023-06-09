const express = require("express");
const { PrismaClient } = require("@prisma/client");
const { format } = require("date-fns");


const rota = express.Router();
const prisma = new PrismaClient();

// Create
rota.post("/init", async (req, res) => {
  const { name, description } = req.body;
  const date = new Date();

  const rotas = await prisma.rottas.create({
    data: {
      name,
      description,
      date,
    },
  });

  return res.status(201).json(rotas);
});

// Read
rota.get("/init", async (req, res) => {
  const rotas = await prisma.rottas.findMany();
  return res.status(200).json(rotas);
});

// Update
rota.put("/init/:id", async (req, res) => {
  const { id } = req.params;
  const { name, status, description } = req.body;

  const IntId = parseInt(id);

  if (!IntId) {
    return res.status(400).json("Insira o ID");
  }

  const rotas = await prisma.rottas.update({
    where: {
      id: IntId,
    },
    data: {
      name,
      status,
      description,
    },
  });

  return res.status(200).json(rotas);
});

// Delete
rota.delete("/init/:id", async (req, res) => {
  const { id } = req.params;

  const IntId = parseInt(id);

  if (!IntId) {
    return res.status(400).json("Insira o ID");
  }

  await prisma.rottas.delete({ where: { id: IntId } });
  return res.status(200).send();
});

module.exports = rota;
