import React from 'react';
import { connect } from 'react-redux';

//Libraries components
import { Layout, Menu, Icon, Skeleton } from 'antd';

//Style
import './style.scss';

//Actions
import { getInci } from './actions/getInci';
import { getCategories } from './actions/getCategories';
import { handleChange } from './actions/changeDrawerState';
import { entrySelect } from './actions/entrySelect';
import { logout } from './actions/handleLogout';

//Components
import history from '../../store/history';
import menu from './menuEntry/menu';
import logo from '../../assets/logo-dark.png';
import ComponentSwitch from './components/ComponentSwitch/index';

//Misc imports

class Landing extends React.Component {
    constructor(props) {
        super(props);

        this.onCollapse = this.onCollapse.bind(this);
        this.selectEntry = this.selectedEntry.bind(this);
    }

    componentDidMount() {
        this.props.getInciList();
        this.props.getCategoryList();
    }

    onCollapse() {
        this.props.drawerChangeState(this.props.drawerState);
    }

    selectedEntry(key, componentId) {
        if(componentId === 'logout') {
            localStorage.removeItem('token');
            this.props.handleLogout();
        } else {
            this.props.handleEntrySelect(key, componentId);
        }
    }

    render() {
        const { drawerState } = this.props;
        const componentId = this.props.match.params.componentId ? this.props.match.params.componentId : '';
        const selectedEntry = menu.filter(x => x.componentId === componentId).map(x => x.key);

        return (
            <Layout className="rm-layout">
                <Layout.Sider collapsible collapsed={ drawerState } onCollapse={ this.onCollapse }>
                    <div className='rm-logo'>
                        <img alt='logo-remedia' src={ logo } className='rm-logo-small' onClick={ () => { history.push('/home') } } />
                    </div>
                    <Menu
                        theme="dark"
                        mode="inline"
                        selectedKeys={[ '' + selectedEntry[0] + '' ]} >
                            { menu.map((element, index) => {
                                return (
                                    <Menu.Item key={ index } onClick={ () => { this.selectedEntry(index, element.componentId) } }>
                                        <Icon type={ element.icon } />
                                        <span>{ element.label }</span>
                                    </Menu.Item> )
                            }) }
                    </Menu>
                </Layout.Sider>
                <Layout.Content>
                    <div className="rm-layout-content">
                        { componentId !== '' && 
                            <ComponentSwitch componentId={ componentId } /> }
                        { componentId === '' &&
                            <Skeleton avatar paragraph={{ rows: 20 }} /> }
                    </div>
                </Layout.Content>
            </Layout>
        );
    }
};

const mapStateToProps = state => {
    return {
        categories: state.landing.categories,
        inci: state.landing.inci,
        drawerState: state.landing.drawerState,
        selectedEntry: state.landing.selectedEntry
    }
};

const mapDispatchToProps = dispatch => {
    const getInciList = () => {
        dispatch(getInci());
    };

    const getCategoryList = () => {
        dispatch(getCategories());
    };

    const drawerChangeState = currentState => {
        dispatch(handleChange(!currentState));
    };

    const handleEntrySelect = (key, componentId) => {
        dispatch(entrySelect(key, componentId));
    };

    const handleLogout = () => {
        dispatch(logout());
    };

    return {
        getInciList,
        getCategoryList,
        drawerChangeState,
        handleEntrySelect,
        handleLogout
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Landing)