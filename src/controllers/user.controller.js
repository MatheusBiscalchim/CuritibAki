const soma = (req,res) => {
  const soma = 1002+1;

  res.send({soma: soma});
};

module.exports = { soma };