import mongoose  from 'mongoose';

const connectDatabase = () => {
  console.log("Espere conectando ao banco de dados")

  mongoose.connect("mongodb+srv://root:root@curitibakicluster.suf46h9.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true }
  ).then(() => console.log("MongoDB Atlas Conectado")).catch((error) => console.log(error));
};

export default connectDatabase;