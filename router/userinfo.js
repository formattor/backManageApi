// 导入 express
const express = require('express')
// 创建路由对象
const router = express.Router()

const userInfo_handle=require('../router_handle/userinfo')

// 1. 导入验证表单数据的中间件
const expressJoi = require('@escook/express-joi')
const {update_userinfo_schema}=require('../schema/user')
const {update_password_schema}=require('../schema/user')
const {update_avatar_schema}=require('../schema/user')

// 获取用户的基本信息
router.get('/userinfo',userInfo_handle.getUserInfo)

// 更新用户的基本信息
router.post('/userinfo', expressJoi(update_userinfo_schema),userInfo_handle.updateUserInfo)

// 重置密码的路由
router.post('/updatepwd', expressJoi(update_password_schema),userInfo_handle.updatePassword)

// 更新用户头像的路由
router.post('/update/avatar', expressJoi(update_avatar_schema),userInfo_handle.updateAvatar)

// 向外共享路由对象
module.exports = router