/**
 * @Description {description}
 * @Author Lorenzo
 * @Email yongqinghee@163.com
 * @Time 18-5-31 下午1:15
 */
import React from 'react'
import {connect} from 'react-redux';

function requireAuthentication(Component) {
    // 组件有已登陆的模块 直接返回 (防止从新渲染)
    if (Component.AuthenticatedComponent) {
        return Component.AuthenticatedComponent
    }

    // 创建验证组件
    class AuthenticatedComponent extends React.Component {
        componentWillMount() {
            this.checkAuth();
        }

        componentWillReceiveProps(nextProps) {
            this.checkAuth();
        }

        checkAuth() {

            // 判断登陆
            const token  = this.props.token;
            const login = token ? token.login : null;


            // 未登陆重定向到登陆页面
            if (!login) {
                let redirect = this.props.location.pathname + this.props.location.search;
                this.context.router.push('/login?message=401&redirect_uri=' + encodeURIComponent(redirect));
                return;
            }

            this.setState({login});
        }

        render() {
            if (this.state.login) {
                return <Component {...this.props}/>
            }
            return ''
        }
    }

    // 不使用 react-redux 的话直接返回
    // Component.AuthenticatedComponent = AuthenticatedComponent
    // return Component.AuthenticatedComponent


    function mapStateToProps(state) {
        return {
            token: state.token,
        };
    }

    function mapDispatchToProps(dispatch) {
        return {};
    }
    Component.AuthenticatedComponent = connect(mapStateToProps, mapDispatchToProps)(AuthenticatedComponent);
    return Component.AuthenticatedComponent
}