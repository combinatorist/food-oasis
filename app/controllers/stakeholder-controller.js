const stakeholderService = require("../services/stakeholder-service");

const search = (req, res) => {
  let categoryIds = req.query.categoryIds;
  if (!categoryIds) {
    categoryIds = ["1", "2", "3", "4", "5", "6"];
  } else if (typeof categoryIds == "string") {
    categoryIds = [categoryIds];
  }
  const params = { ...req.query, categoryIds };
  stakeholderService
    .search(params)
    .then((resp) => {
      res.send(resp);
    })
    .catch((err) => {
      res.status("404").json({ error: err.toString() });
    });
};

const getById = (req, res) => {
  const { id } = req.params;
  stakeholderService
    .selectById(id)
    .then((resp) => {
      res.send(resp);
    })
    .catch((err) => {
      res.status("500").json({ error: err.toString() });
    });
};

const post = (req, res) => {
  stakeholderService
    .insert(req.body)
    .then((resp) => {
      res.json(resp);
    })
    .catch((err) => {
      res.status("500").json({ error: err.toString() });
    });
};

const put = (req, res) => {
  stakeholderService
    .update(req.body)
    .then((resp) => {
      res.sendStatus(200);
    })
    .catch((err) => {
      res.status("500").json({ error: err.toString() });
    });
};

const remove = (req, res) => {
  const { id } = req.params;
  stakeholderService
    .remove(id)
    .then((resp) => {
      res.sendStatus(200);
    })
    .catch((err) => {
      res.status("500").json({ error: err.toString() });
    });
};

const verify = (req, res) => {
  stakeholderService
    .verify(req.body)
    .then((resp) => {
      res.sendStatus(200);
    })
    .catch((err) => {
      res.status("500").json({ error: err.toString() });
    });
};

const assign = (req, res) => {
  stakeholderService
    .assign(req.body)
    .then((resp) => {
      res.sendStatus(200);
    })
    .catch((err) => {
      res.status("500").json({ error: err.toString() });
    });
};

const claim = (req, res) => {
  stakeholderService
    .claim(req.body)
    .then((resp) => {
      res.sendStatus(200);
    })
    .catch((err) => {
      res.status("500").json({ error: err.toString() });
    });
};

const approve = (req, res) => {
  stakeholderService
    .approve(req.body)
    .then((resp) => {
      res.sendStatus(200);
    })
    .catch((err) => {
      res.status("500").json({ error: err.toString() });
    });
};

const reject = (req, res) => {
  stakeholderService
    .reject(req.body)
    .then((resp) => {
      res.sendStatus(200);
    })
    .catch((err) => {
      res.status("500").json({ error: err.toString() });
    });
};

module.exports = {
  search,
  getById,
  post,
  put,
  remove,
  verify,
  assign,
  claim,
  approve,
  reject,
};
