//服务器地址
const http = 'http://39.101.217.150:8086'
//登录接口
const login = '/account/login'
//获取菜单
const listForRouter = '/menu/listForRouter'
//获取账号信息
const info = '/account/info'
//修改密码
const updatePwd = '/account/updatePwd'
//获取文章分类
const channellist = '/channel/list'
//获取文章数量
const articlebychannel = '/article/articlebychannel'
//获取功能操作信息
const menulist = '/menu/list'
//获取用户列表
const userlist = '/user/list'
//获取部门信息
const deptlist = '/dept/list'
//添加用户信息
const user = '/user'
//获取角色
const getrole = '/role/roleTreeListByIdUser'
//设置角色
const setrole = '/user/setRole'



export{
    http,
    login,
    listForRouter,
    info,
    updatePwd,
    channellist,
    articlebychannel,
    menulist,
    userlist,
    deptlist,
    user,
    getrole,
    setrole
}