const express = require('express')
// 创建路由对象
const router = express.Router()

// 导入验证数据的中间件
const expressJoi = require('@escook/express-joi')
// 导入文章分类的验证模块
const { add_cate_schema } = require('../schema/artcate')

// 导入文章分类的路由处理函数模块
const artcate_handle = require('../router_handle/artcate')

// 导入删除分类的验证规则对象
const { delete_cate_schema } = require('../schema/artcate')
// 导入获取文章分类的验证规则对象？
const { get_cate_schema } = require('../schema/artcate')
// 导入更新文章分类的验证规则对象
const { update_cate_schema } = require('../schema/artcate')
// 获取文章分类的列表数据
router.get('/cates', artcate_handle.getArticleCates)

// 新增文章分类的路由
router.post('/addcates', expressJoi(add_cate_schema),artcate_handle.addArticleCates)

// 删除文章分类的路由
router.get('/deletecate/:id', expressJoi(delete_cate_schema),artcate_handle.deleteCateById)

router.get('/cates/:id', expressJoi(get_cate_schema),artcate_handle.getArtCateById)

// 更新文章分类的路由
router.post('/updatecate',  expressJoi(update_cate_schema),artcate_handle.updateCateById)

// 向外共享路由对象
module.exports = router