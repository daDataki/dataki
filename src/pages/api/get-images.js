import fs from "fs";
import path from "path";

export default function handler(req, res) {
  const imagesDir = path.join(process.cwd(), "public/images"); // Ruta a la carpeta de imágenes
  const files = fs.readdirSync(imagesDir);
  const images = files.map((file) => `/images/${file}`); // Formatea las rutas de las imágenes
  res.status(200).json(images); // Devuelve un array con las rutas
}
