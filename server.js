import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = 3001;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dataFile = path.join(__dirname, "data", "properties.json");

app.use(express.json());

function ensureDataFile() {
  const dir = path.dirname(dataFile);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  if (!fs.existsSync(dataFile)) {
    fs.writeFileSync(dataFile, JSON.stringify([], null, 2));
  }
}

const defaultProperties = [
  { id: 1, title: "Light-filled Victorian family home", location: "Chiswick, London W4", city: "London", price: 1250000, type: "Detached", beds: 4, baths: 3, image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85", gallery: ["https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85","https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=85","https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=85"], description: "A beautifully considered Victorian home blending original character with calm, contemporary interiors. The open-plan kitchen leads to a landscaped south-facing garden.", features: ["South-facing garden","Bespoke kitchen","Period features","Excellent transport links"], added: "2026-09-14" },
  { id: 2, title: "Contemporary riverside apartment", location: "Salford Quays, Manchester M50", city: "Manchester", price: 395000, type: "Flat", beds: 2, baths: 2, image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1400&q=85", gallery: ["https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1400&q=85","https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=900&q=85"], description: "An elegant apartment with floor-to-ceiling windows and far-reaching water views, close to MediaCityUK.", features: ["Private balcony","Concierge","Secure parking","Residents’ lounge"], added: "2026-09-16" },
  { id: 3, title: "Character cottage near the city", location: "Redland, Bristol BS6", city: "Bristol", price: 575000, type: "Terraced", beds: 3, baths: 2, image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1400&q=85", gallery: ["https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1400&q=85","https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=85"], description: "A warm period cottage on a quiet residential street, thoughtfully updated throughout.", features: ["Recently renovated","Wood-burning stove","Home office","Private courtyard"], added: "2026-09-12" },
  { id: 4, title: "Design-led townhouse with terrace", location: "Hove, East Sussex BN3", city: "Brighton", price: 825000, type: "Townhouse", beds: 4, baths: 2, image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1400&q=85", gallery: ["https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1400&q=85"], description: "A striking townhouse with flexible living spaces and a sunlit roof terrace moments from the seafront.", features: ["Roof terrace","Sea views","Flexible workspace","Chain free"], added: "2026-09-10" },
  { id: 5, title: "Peaceful stone-built country home", location: "Harrogate, North Yorkshire HG3", city: "Harrogate", price: 695000, type: "Detached", beds: 4, baths: 2, image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1400&q=85", gallery: ["https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1400&q=85"], description: "A handsome stone-built home with beautifully proportioned rooms and mature gardens.", features: ["0.4 acre plot","Double garage","Countryside views","Utility room"], added: "2026-09-08" },
  { id: 6, title: "Smart city apartment in Georgian quarter", location: "Liverpool L1", city: "Liverpool", price: 285000, type: "Flat", beds: 2, baths: 1, image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1400&q=85", gallery: ["https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1400&q=85"], description: "A polished city apartment pairing modern design with a highly convenient central location.", features: ["City centre","High ceilings","Secure entry","No onward chain"], added: "2026-09-05" },
];

function readProperties() {
  ensureDataFile();
  try {
    const data = JSON.parse(fs.readFileSync(dataFile, "utf8"));
    return Array.isArray(data) && data.length ? [...defaultProperties, ...data] : defaultProperties;
  } catch {
    return defaultProperties;
  }
}

function writeProperties(listing) {
  ensureDataFile();
  const all = readProperties();
  const custom = all.filter((item) => item.isCustom);
  const updated = [...custom, listing];
  fs.writeFileSync(dataFile, JSON.stringify(updated, null, 2));
  return readProperties();
}

app.get("/api/properties", (req, res) => {
  res.json(readProperties());
});

app.post("/api/properties", (req, res) => {
  const listing = req.body;
  if (!listing || !listing.title) {
    return res.status(400).json({ message: "Invalid listing" });
  }
  const stored = writeProperties(listing);
  return res.status(201).json(stored);
});

app.listen(PORT, () => {
  console.log(`Property API running on http://localhost:${PORT}`);
});
