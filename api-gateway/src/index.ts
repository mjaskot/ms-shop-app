require("dotenv").config();
import app from "./app";

const port = process.env.PORT;

if (!port) {
  throw new Error("'Port' value is missing from environmental variables");
}

const bootstrap = async () => {
  try {
    app.listen(port, () => console.log(`Server listening on port ${port}`));
  } catch (err) {
    console.log(err);
  }
};

bootstrap();
