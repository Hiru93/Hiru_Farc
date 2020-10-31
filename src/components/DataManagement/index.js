import React from 'react';
import { connect } from 'react-redux';

//Libraries components
import { Tabs, Row, Col } from 'antd';

//Style

//Actions
import { categories } from './actions/categories';

//Components
import Categories from './components/Categories/index';
import Inci from './components/Incis/index';

//Misc import

class DataManagement extends React.Component {
    componentDidMount() {
        const { token } = this.props;
        this.props.getCategories(token);
    }

    render() {
        const { categories, incis, categoryList } = this.props;

        return (
            <React.Fragment>
                <Tabs>
                    <Tabs.TabPane tab={ 'Categorie' } key={ 0 }>
                        <Row
                            type="flex"
                            justify="start"
                            align="middle"
                            gutter={ 20 }>
                            <Col span={ 24 }>
                                <Categories categories={ categories } />
                            </Col>
                        </Row>
                    </Tabs.TabPane>
                    <Tabs.TabPane tab={ 'Inci' } key={ 1 }>
                        <Row
                            type="flex"
                            justify="start"
                            align="middle"
                            gutter={ 20 }>
                            <Col span={ 24 }>
                                <Inci inci={ incis } categoryList={ categoryList } />
                            </Col>
                        </Row>
                    </Tabs.TabPane>
                </Tabs>
            </React.Fragment>
        );
    }
};

const mapStateToProps = state => {
    return {
        token: state.auth.token,
        categories: state.dataManage.categories,
        incis: state.dataManage.incis,
        categoryList: state.dataManage.categoryList
    };
};

const mapDispatchToProps = dispatch => {
    const getCategories = token => {
        dispatch(categories(token));
    };

    return {
        getCategories
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DataManagement);