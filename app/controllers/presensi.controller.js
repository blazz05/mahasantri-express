const { where } = require("sequelize");
const db = require("../models");
const Presensi = db.presensis;

exports.index = (req, res) => {
  Presensi.findAll().then((data) => {
    res.json({
      message: "Data presensi ditemukan",
      data: data,
    });
  });
};

exports.create = (req, res) => {
  const presensi = {
    nama: req.body.nama,
    status: req.body.status,
  };

  Presensi.create(presensi)
    .then((data) => {
      res.json({
        message: "Data presensi berhasil ditambahkan",
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message || "Gagal ditambahkan",
      });
    });
};

exports.destroy = (req, res) => {
  const id = req.params.id;
  Presensi.destroy({
    where: { id: id },
  })
    .then((data) => {
      res.json({
        message: "Data presensi berhasil dihapus",
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message || "Data presensi gagal di hapus",
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;
  Presensi.update(req.body, {
    where: { id: id },
  })
    .then((data) => {
      res.json({
        message: "Data presensi berhasil diperbarui",
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message || "Data presensi gagal di perbarui",
      });
    });
};

exports.show = (req, res) => {
  const id = req.params.id;
  Presensi.findByPk(id)
    .then((data) => {
      res.json({
        message: "Data presensi ditemukan",
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message || "Data presensi tidak ditemukan",
      });
    });
};
