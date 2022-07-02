const Paleta = require('../models/Paleta');

/* const findAllPaletas = async (req, res) => {
   const allPaletas = await Paleta.find();
   return allPaletas;
};
 */
/* const findByIdPaleta = async (id) => {
   return await Paleta.findById(id);
}; */
const findAllPaletas = async (req, res) => await Paleta.find();

const findByIdPaleta = async (id) => await Paleta.findById(id);

const createPaleta = async (newPaleta) => await Paleta.create(newPaleta);

const updatePaleta = async (id, editPaleta) =>
   await Paleta.findByIdAndUpdate(id, editPaleta).setOptions({
      returnOriginal: false,
   });

const deletePaleta = async (id) => await Paleta.findByIdAndDelete(id);

module.exports ={
  findAllPaletas,
  findByIdPaleta,
  createPaleta,
  updatePaleta,
  deletePaleta,
}