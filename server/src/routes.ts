import express from 'express';
import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';

const routes = express.Router();

const classesController = new ClassesController();
const connectionsController = new ConnectionsController();

routes.post('/classes', classesController.create);
routes.get('/classes', classesController.index);

routes.post('/connections', connectionsController.create);
routes.get('/connections', connectionsController.index);

export default routes;







// ROTAS

// route params: identifica qual recurso atualizar ou deletar
// query params: paginação, filtros, ordenação...

// app.get('/users', (req, res) => {
//   const users = [
//     { name: 'Lucas', age: 32},
//     { name: 'Jéssica', age: 29}
//   ];

//   return res.json(users);
// });

// app.post('/users', (req, res) => {
//   const users = [
//     { name: 'Lucas', age: 32},
//     { name: 'Jéssica', age: 29}
//   ];

//   console.log(req.body)

//   return res.json(users);
// });

// app.delete('/users/:id', (req, res) => {
//   console.log(req.params);

//   const users = [
//     { name: 'Lucas', age: 32},
//     { name: 'Jéssica', age: 29}
//   ];

//   return res.json(users);
// });
