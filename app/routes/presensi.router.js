const presensiController = require("../controllers/presensi.controller");
const router = require("express").Router();

router.post("/", presensiController.create);
router.get("/", presensiController.index);
router.delete("/:id", presensiController.destroy);
router.put("/:id", presensiController.update);
router.get("/:id", presensiController.show);

module.exports = router;
