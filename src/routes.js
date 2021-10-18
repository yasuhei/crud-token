const { Router, Request, Response, } = require('express');
const multer = require('multer');
const Readable = 'stream'


const AuthMidleware = require('./app/Midlewares/AuthMidleware');
const LoginController = require('./app/Controllers/LoginController');
const UserController = require('./app/Controllers/UserController');
const multerConfig = multer()


const routes = new Router();
routes.post("/products",UserController.store, multerConfig.single('file'),(req, res) => {
  const  {file} = request
  const  {buffer} = file

  const readableFile = new Readable()
  readableFile.push(buffer)
  readableFile.push(null)
});




routes.post("/user", UserController.store);
routes.get("/user", AuthMidleware, UserController.show);

routes.post("/login", LoginController.index);

module.exports = routes;