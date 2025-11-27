const express = require('express');
const router = express.Router();
const {  getAllUsers, 
        getSingleUser,
        showCurrentUser,
        updateUser,
        updateUserPassword,
        deleteUser } = require('../controllers/user-controller')


router.get('/',getAllUsers)
router.get('/showMe',showCurrentUser)
router.get('/:id',getSingleUser)
router.patch('/updateuser',updateUser).patch('/updateuserpassword',updateUserPassword)
router.delete('/deleteuser',deleteUser)



module.exports = router;