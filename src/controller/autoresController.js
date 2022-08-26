import autorModel from "../models/Autores.js";

class autoresControler {
  static GET_Autores = (req, res) => {
    autorModel.find((err, autores) => {
      err
        ? res.status(400).send("deu ruim ai filho")
        : res.status(200).send(autores);
    });
  };

  static GET_Autor = (req, res) => {
    let { id } = req.params;

    autorModel.findById(id, (err, autores) => {
      err
        ? res.status(400).send(`${err.message} Autor não encontrado`)
        : res.status(200).send(autores);
    });
  };

  static POST_Autor = (req, res) => {
    const novoAutor = new autorModel(req.body);

    novoAutor.save((err, autores) => {
      err
        ? res.status(500).send({ Erro: `${err} - deu K.O ai filho` })
        : res.status(201).send(autores);
    });
  };

  static PUT_Autor = (req, res) => {
    autorModel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      (err, autores) => {
        err
          ? res.status(500).send(`${err} deu ruim filho`)
          : res.status(200).send("Autor atualizado com sucesso");
      }
    );
  };

  static DELETE_Autor = (req, res) => {
    autorModel.findByIdAndDelete(req.params.id, (err) => {
      err
        ? res.status(500).send(`${err} deu ruim filho`)
        : res.status(200).send("Autor deletado com sucesso");
    });
  };
}

export default autoresControler;
