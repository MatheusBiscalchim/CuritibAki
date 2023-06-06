import mongoose from 'mongoose';

const LocalsSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true
  },
  slug: {
    type: String,
    required: true
  },
  tipo: {
    type: String,
    required: true
  },
  sobre: {
    type: String,
    required: true
  },
  horarios: {
    type: String,
    required: true
  },
  ingressos: {
    type: String,
    required: true
  },
  endereco: {
    type: String,
    required: true
  },
  nome: {
    type: String,
    required: true
  },
  foto: {
    type: String,
    required: true
  },
  usuario: {
    type: mongoose.Schema.Types.ObjectId(),
    ref: "Usuario",
    required: true
  },
  curtidas: {
    type: Array,
    required: false
  },
  comentarios: {
    type: Array,
    required: false
  }

});

const Locals = mongoose.Model("Locais", LocalsSchema);

export default Locals;
