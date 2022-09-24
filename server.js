const express = require("express");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const app = express();
app.use(express.json());
var cors = require('cors')

app.use(cors())

app.post("/upload_files", upload.array("files"), (req, res) =>{
    console.log(req.body);
    console.log(req.files);
    res.json({ message: "Successfully uploaded files" });
})
app.listen(8000, () => {
    console.log(`Server started....`);
});