import fs from "fs";
import path from "path";

const allowedFormats = ['png', 'svg'];

export default function getImages() {
  const imagesDir = path.join(process.cwd(), "public/img-svg"); // Ruta a la carpeta de imágenes
  const files = fs.readdirSync(imagesDir);
  // Ordena los archivos alfabéticamente
  const sortedFiles = files.sort((a, b) => a.localeCompare(b));
  const images = sortedFiles.map((file) => `/img-svg/${file}`); // Formatea las rutas de las imágenes
  return images.filter(image =>
    allowedFormats.includes(image.split('.').at(1) || 'noimage'));
}

