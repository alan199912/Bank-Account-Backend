const axios = require('axios');
require('dotenv').config();

const getAccounts = async (req, res) => {
  try {
    const response = await axios.get(process.env.ENDPOINT_URL);
    const cuentas = response.data?.cuentas.filter((cuentas) => cuentas.n !== ' ');
    const page = Number(req.query.page) || 0;
    const limit = page === 0 ? 5 : 4;
    const startIndex = page === 0 ? 0 : page * limit + 1;
    const endIndex = startIndex + limit;

    const pagination = {};

    if (endIndex < cuentas.length) {
      pagination.next = {
        page: page + 1,
        limit: limit,
      };
    }

    if (startIndex > 0) {
      pagination.previous = {
        page: page - 1,
        limit: limit,
      };
    }

    const accounts = cuentas.slice(startIndex, endIndex);

    return res.status(200).json({
      status: 'success',
      total: cuentas.length,
      pagination,
      accounts,
    });
  } catch (error) {
    console.log(error);
    return res.status(404).json({
      status: 'fail',
      message: 'There was an error, please try again later',
    });
  }
};

const getAccountByNumberAccount = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({
      status: 'fail',
      message: 'The id is required',
    });
  }

  try {
    const response = await axios.get(process.env.ENDPOINT_URL);
    const cuentas = response.data.cuentas.filter((cuentas) => cuentas.n !== ' ');
    const account = cuentas.find((account) => account.n === id);

    if (!account) {
      return res.status(404).json({
        status: 'fail',
        message: 'Account not found',
      });
    }

    return res.status(200).json({
      status: 'success',
      account,
    });
  } catch (error) {
    console.log(error);
    return res.status(404).json({
      status: 'fail',
      message: 'There was an error, please try again later',
    });
  }
};

module.exports = {
  getAccounts,
  getAccountByNumberAccount,
};
