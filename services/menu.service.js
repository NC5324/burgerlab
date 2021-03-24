const pgp = require('pg-promise')(/* options */)
const db = pgp('postgres://postgres:admin@localhost:5432/burgerlab')
//const db = pgp('postgres://esfqdodb:k1sA-KkZ9dwj15wbfiKahUW5x9-QFvg9@hattie.db.elephantsql.com:5432/esfqdodb')

function getAllProducts(req, res, next){
    db.any('SELECT * FROM product')
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved all products'
                })
        })
        .catch(function (error) {
            return next(error);
        })
}

function getProductsByCtg(req, res, next) {
    const categoryId = req.params.id
    db.any('SELECT * FROM product JOIN category_product ON product.id = category_product.product_id WHERE category_id = $1', categoryId)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: `Retrieved all products from category with ID: ${categoryId}`
                })
        })
        .catch(function (error) {
            return next(error);
        })
}

module.exports = {
    getAllProducts: getAllProducts,
    getProductsByCategory: getProductsByCtg,
}