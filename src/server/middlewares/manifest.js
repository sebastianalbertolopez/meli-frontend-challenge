import path from 'path';
import fs from 'fs';

const manifestMiddleware = (req, res, next) => {
  try {
    req.hashManifest =
      req.hashManifest ??
      JSON.parse(
        fs.readFileSync(path.join(__dirname, '../public/manifest.json')),
      );
  } catch (err) {
    console.log(err);
  }

  next();
};

export default manifestMiddleware;
