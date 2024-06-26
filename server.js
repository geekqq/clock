const express = require("express");
const app = express();

app.use(express.static("public"));
const port = process.env.PORT || 3006;
app.listen(port, () => {
    console.log(`Server is running on port ${port}!`);
})