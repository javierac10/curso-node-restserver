const { response, request } = require('express');

const userGet = (req = request, res = response) => {

    const { q, nombre = 'No name', apikey } = req.query

    res.json({
        msg: 'get API - Controller',
        q,
        nombre,
        apikey
    })
}


const userPut = (req, res) => {

    const { id } = req.params;

    res.json({
        msg: 'put API',
        id
    })
}

const userPost = (req, res) => {
    const { nombre, edad } = req.body;
    res.json({
        msg: 'post API',
        nombre,
        edad
    })
}

const userDelete = (req, res) => {
    res.json({
        msg: 'delete API'
    })
}

const userPatch = (req, res) => {
    res.json({
        msg: 'patch API'
    })
}

module.exports = {
    userGet,
    userPut,
    userPost,
    userDelete,
    userPatch
}