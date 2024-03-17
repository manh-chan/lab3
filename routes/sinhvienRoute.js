const express = require('express');
const router = express.Router();
const sinhvien = require('../models/sinhvienModel');

// Route GET (select)
// http://localhost:5000/
router.get('/', async (req, res) => {
    try {
        const sinhviens = await sinhvien.find(); // Lấy toàn bộ sinh viên từ cơ sở dữ liệu
        res.render('sinhviens', { sinhviens: sinhviens }); // Trả về trang ejs với dữ liệu sinh viên
        console.log(sinhviens);
    } catch (error) {
        console.error(error);
        res.json({ error: error });
    }
});

// Route POST (create new sinh vien)
// http://localhost:5000/sinhvien
router.post('/sinhvien', async (req, res) => {
    try {
        const { masv, tensv } = req.body;
        const sinhvien1 = new sinhvien({ masv, tensv });
        await sinhvien1.save();
        res.json(sinhvien1);
        console.log(sinhvien1);
    } catch (error) {
        console.error(error);
        res.json({ error: error });
    }
});

// Route PUT (update)
// http://localhost:5000/sinhvien/:_id
router.put('/sinhvien/:_id', async (req, res) => {
    try {
        const _id = req.params._id;
        const { masv, tensv } = req.body;
        const updateSinhVien = await sinhvien.findByIdAndUpdate(_id, { masv, tensv }, { new: true });
        res.json(updateSinhVien);
        console.log(updateSinhVien);
    } catch (error) {
        console.error(error);
        res.json({ error: error });
    }
});

// Route DELETE (delete)
// http://localhost:5000/sinhvien/:_id
router.delete('/sinhvien/:_id', async (req, res) => {
    try {
        const _id = req.params._id;
        const deleteSinhVien = await sinhvien.findByIdAndDelete(_id);
        res.json(deleteSinhVien);
        console.log(deleteSinhVien);
    } catch (error) {
        console.error(error);
        res.json({ error: error });
    }
});

module.exports = router;
