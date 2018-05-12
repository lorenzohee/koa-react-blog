/**
 * @Description {description}
 * @Author Lorenzo
 * @Email yongqinghee@163.com
 * @Time 18-5-9 下午5:25
 */
import ApiErrorNames from './ApiErrorNames'

class ApiError extends Error{

    //构造方法
    constructor(error_name){
        super();
        var error_info = ApiErrorNames.getErrorInfo(error_name);
        this.name = error_name;
        this.code = error_info.code;
        this.message = error_info.message;
    }
}

module.exports = ApiError;