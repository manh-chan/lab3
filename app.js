const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const sinhvienRoute = require('./routes/sinhvienRoute');

const app = express(); // Tạo đối tượng mới
// Kết nối MongoDB
mongoose.connect('mongodb+srv://pG29k8AHa0No1Euo:pG29k8AHa0No1Euo@cluster0.gmafrgs.mongodb.net/db1', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Kết nối thành công với MongoDB");
}).catch((err) => {
    console.error(err);
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use('/', sinhvienRoute); // Sử dụng route

// Đặt định dạng view engine là ejs
app.set('view engine', 'ejs');

// Tạo cổng
const PORT = process.env.PORT || 5000;

// Lắng nghe các kết nối trên cổng đã chỉ định
app.listen(PORT, () => {
    console.log(`Server đang chạy ở cổng ${PORT}`);
});
