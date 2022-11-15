const express=require("express")
const router=express.Router();

const {getProducts, newProduct, getProductById, 
    updateProduct, 
    deleteProduct,
    createProductReview,
    getProductReviews,
    deleteReview} = require("../controllers/productsController"); //traemos la respuesta json desde el controlador
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

//probemos autenticacion
router.route('/productos').get(getProducts) //Establecemos desde que ruta queremos ver el getProducts
router.route('/producto/nuevo').post(isAuthenticatedUser,authorizeRoles("admin"),newProduct);//Establecemos desde que ruta queremos ver el getProducts
router.route('/producto/:id').get(getProductById); //Ruta para consultar por ID
router.route('/producto/:id').put(isAuthenticatedUser,authorizeRoles("admin"),updateProduct); //Creacion de la ruta de actualizacion
router.route('/producto/:id').delete(isAuthenticatedUser,authorizeRoles("admin"),deleteProduct); //Creacion ruta de eliminacion por ID

//rutas para los reviews
router.route('/review').put(isAuthenticatedUser, createProductReview)
router.route('/reviews').get(getProductReviews)
router.route('/review').delete(isAuthenticatedUser, deleteReview)



module.exports=router; //para que se vea desde afuera 