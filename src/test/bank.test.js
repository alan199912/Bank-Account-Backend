const supertest = require('supertest');
const app = require('../index');

describe('bank controller', () => {
  test('Should get getAccounts', async () => {
    const expectedResponse = {
      status: 'success',
      total: 12,
      pagination: {
        next: {
          page: 1,
          limit: 5,
        },
      },
      accounts: [
        {
          e: '1',
          n: '872378326701',
          t: '02',
          saldo: '1500',
          moneda: 'u$s',
          tipo_letras: 'CC',
        },
        {
          e: '1',
          n: '872378326702',
          t: '01',
          saldo: '-600',
          moneda: '$',
          tipo_letras: 'Cc',
        },
        {
          e: '1',
          n: '872378326703',
          t: '01',
          saldo: '745',
          moneda: '$',
          tipo_letras: 'CC',
        },
        {
          e: '1',
          n: '872378326704',
          t: '01',
          saldo: '852.36',
          moneda: '$uy',
          tipo_letras: 'CA',
        },
        {
          e: '1',
          n: '872378326705',
          t: '01',
          saldo: '569',
          moneda: '$',
          tipo_letras: 'CC',
        },
      ],
    };

    await supertest(app)
      .get('/api/v1/bank/getAccounts')
      .expect(200)
      .then((response) => {
        expect(response.body).toStrictEqual(expectedResponse);
      });
  });

  test('Should get getAccountByNumberAccount', async () => {
    const expectedResponse = {
      status: 'success',
      account: {
        e: '1',
        n: '872378326701',
        t: '02',
        saldo: '1500',
        moneda: 'u$s',
        tipo_letras: 'CC',
      },
    };

    await supertest(app)
      .get('/api/v1/bank/getAccountByNumberAccount/872378326701')
      .expect(200)
      .then((response) => {
        expect(response.body).toStrictEqual(expectedResponse);
      });
  });
});
