import React from 'react';
import { connect } from 'react-redux';

//Actions
import { tokenValidate } from './actions/tokenValidate';

//Components
// import { authorizations } from './authorizations';

export default function Authorize(ComposedComponent, requiredAuth) {
    class BaseAuthorizedComponent extends React.Component {
        constructor(props) {
            super(props);

            this.tokenCheck = this.tokenCheck.bind(this);
        }

        tokenCheck() {
            this.props.tokenVerify(this.props.token);
        }

        componentDidMount() {
            this.tokenCheck();
        }

        render() {
            const { token } = this.props;
            //TO DO scommentare ed aggiungere 'authorizations' nella dichiarazione da this.props
            // const componentId = this.props.match.params.componentId ? this.props.match.params.componentId : 'home';
            // let isAuthorized = null;
            // if(userInfo.authorizations &&
            //     (authorizations[componentId].policy === '' ||
            //     authorizations[componentId].policy === 'OR')) {
            //         isAuthorized = authorizations[componentId].auth.some(
            //             x => {
            //                 return userInfo.authorizations.includes(x);
            //             }
            //         )
            //     } else if(userInfo.authorizations && authorizations[componentId].policy === 'AND') {
            //         isAuthorized = authorizations[componentId].auth.every(
            //             x => {
            //                 return userInfo.authorizations.includes(x);
            //             });
            //     }

            //     return token === '' || userInfo === {} || !isAuthorized ?
            //         null :
            //         <ComposedComponent { ...this.props } />;
            return token !== null ? 
                <ComposedComponent { ...this.props } /> :
                null
        }
    }

    const mapStateToProps = state => {
        return {
            token: state.authComponent.token,
            userInfo: state.authComponent.userInfo,
            authorizations: state.authComponent.authorizations
        }
    }

    const mapDispatchToProps = dispatch => {
        const tokenVerify = token => {
            dispatch(tokenValidate(token));
        };

        return {
            tokenVerify
        }
    }

    return connect(
        mapStateToProps,
        mapDispatchToProps
    )(BaseAuthorizedComponent);
}