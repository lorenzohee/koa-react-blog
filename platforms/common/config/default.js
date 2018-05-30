/**
 * @Description
 * @Author Lorenzo
 * @Email yongqinghee@163.com
 * @Time 18-5-22 下午6:16
 * @Version 1.0.0
 **/
import path from 'path'

const rootPath = path.join(__dirname, '..')
export default {
  rootPath,
  publicPath: '/public',
  staticPath: '/public/static',
  port: 3388,
  db: {
    dialect: 'sqlite',
    username: '',
    password: '',
    database: 'main',
    storage: 'path/to/db.sqlite'
  }
}
