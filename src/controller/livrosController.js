import livroModel from "../models/Livro.js";

class livrosControler {
  static GET_Livros = (req, res) => {
    livroModel
      .find()
      .populate("autor")
      .exec((err, livros) => {
        err
          ? res.status(400).send("deu ruim ai filho")
          : res.status(200).send(livros);
      });
  };

  static GET_LivroPorId = (req, res) => {
    let { id } = req.params;

    livroModel
      .findById(id)
      .populate("autor", "nome")
      .exec((err, livros) => {
        err
          ? res.status(404).send(`${err.message} livro não encontrado`)
          : res.status(200).send(livros);
      });
  };

  static GET_LivroPorEditora = (req, res) => {
    const { editora } = req.query

    livroModel.find({'editora': editora}, {}, (err, livros) => {
      err
      ? res.status(404).send(`${err.message} Não existe livro com essa editora no banco de dados`)
      : res.status(200).send(livros);
    })
  }

  static POST_Livro = (req, res) => {
    const NovoLivro = new livroModel(req.body);

    NovoLivro.save((err, livros) => {
      err
        ? res.status(500).send({ Erro: `${err} - deu K.O ai filho` })
        : res.status(201).send(livros);
    });
  };

  static PUT_Livro = (req, res) => {
    livroModel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      (err, livros) => {
        err
          ? res.status(500).send(`${err} deu ruim filho`)
          : res.status(200).send("livro atualizado com sucesso");
      }
    );
  };

  static DELETE_Livro = (req, res) => {
    livroModel.findByIdAndDelete(req.params.id, (err) => {
      err
        ? res.status(500).send(`${err} deu ruim filho`)
        : res.status(200).send("livro deletado com sucesso");
    });
  };
}

export default livrosControler;
