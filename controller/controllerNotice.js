module.exports = {
  //esto es una funcion flecha
  getAllNotice: (req, res) => {
    const notice = [
      {
        id: 1,
        name: 'titulo de una noticia',
        body: 'cuerpo de la noticia'
      }
    ]
    res.json(notice)
  },
  getByIdNotice: (req, res) => {
    const notice = [
      {
        id: 1,
        name: 'titulo de una noticia',
        body: 'cuerpo de la noticia'
      }
    ]
    res.json(notice)
  },
  create: (req, res) => {
    res.json(notice)
  },
  updata: function (req, res) {}
}
