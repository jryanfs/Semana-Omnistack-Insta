const express = require('express');
const postController =  require('./controllers/PostController')
const postLikeController = require('./controllers/LikeController')
const multer = require('multer');
const uploadConfig = require('./config/upload')

const routes = new express.Router();

const upload =  multer(uploadConfig);

routes.post('/posts',upload.single('image'),postController.store);


routes.get('/posts',postController.index);


routes.post('/posts/:id/like',postLikeController.store)




module.exports = routes;