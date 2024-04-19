import express from "express";
import ffmpeg from "fluent-ffmpeg";
const app = express();
const port = 3000;
app.use(express.json());
app.post("/process-video", (req, res) => {
  const inputFilePath = req.body.inputFilePath;
  const outputFilePath = req.body.outputFilePath;

  if (!inputFilePath || !outputFilePath) {
    res.status(400).send("Bad Request");
  }
  ffmpeg(inputFilePath)
    .outputOptions("-vf", "scale=-1:360")
    .on("end", () => {
      return res.status(200).send(`Process Complete`);
    })
    .on("error", () => {
      res.status(500).send(`Internal Server Error`);
    })
    .save(outputFilePath);
});

app.listen(port, () => {
  console.log(`Server running at ${port}`);
});