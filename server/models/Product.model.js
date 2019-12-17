const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    name: {type: String, maxlength:50, required:true},
    category: { type: String, enum: ["LEGO", "Video Juegos", "Puzzle"] },
    subcategory: {
      type: String,
      enum: [
        "500 piezas",
        "1000 piezas",
        "1500 piezas",
        "2000 piezas",
        "más de 2000 piezas",
        "Play Station 4",
        "Xbox One",
        "Nintendo Switch",
        "PC",
        "Accesorio",
        "Architecture",
        "BOOST",
        "BrickHeadz",
        "City",
        "Classic",
        "Creator",
        "DC Super Heroes",
        "Disney",
        "DUPLO",
        "Elves",
        "Fantastic Beasts™",
        "Friends",
        "Frozen II",
        "Harry Potter™",
        "Hidden Side™",
        "Ideas",
        "Juniors",
        "Jurassic World",
        "LEGO Batman",
        "LEGO Originals",
        "LEGO Spider-Man",
        "LEGO Marvel",
        "MINDSTORMS",
        "Minecraft",
        "Minifiguras",
        "NEXO KNIGHTS™",
        "NINJAGO",
        "Overwatch",
        "Power Functions",
        "Powered UPNovedad",
        "Powerpuff Girls",
        "SERIOUS PLAY",
        "Speed Champions",
        "Star Wars",
        "Stranger Things",
        "Technic",
        "THE LEGO BATMAN MOVIE",
        "THE LEGO MOVIE 2",
        "THE LEGO NINJAGO MOVIE™",
        "Toy Story 4",
        "LEGO Trolls World TourNovedad",
        "Unikitty!",
        "Xtra"
      ]
    },
    subsubcategory:{ type: String, enum:["Juego", "Consola", "Joystick", "Headset", "HeadPhone", "VR", "Mouse", "Keyword", "Otro", ""]},
    price: Number,
    negotiable: Boolean,
    description: {type: String, maxlength: 400},
    delivery: Boolean,
    remate: Boolean,
    brand: String,
    modelCode: String,
    creator: { type: Schema.Types.ObjectId, ref: "User" }
  },
  {
    timestamps: true
  }
)

const ProductModel = mongoose.model("Product", productSchema);
module.exports = ProductModel