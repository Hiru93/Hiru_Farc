import React from 'react';
import { connect } from 'react-redux';

//Libraries components
import { Button, Modal, Spin, Alert, Popover, Row, Col, Icon } from 'antd';

//Style

//Actions
import { getDocs } from './actions/getDocs';
import { getCats } from './actions/getCats';
import { deleteRow } from './actions/deleteRow';

//Components
import CustomTable from '../../utils/CustomTable/index';

//Misc imports

class InfoMaterialManage extends React.Component {
    constructor(props) {
        super(props);

        this.getAllDocuments = this.getAllDocuments.bind(this);
        this.showPropsConfirm = this.showPropsConfirm.bind(this);
    }
    
    showPropsConfirm(record) {
        Modal.confirm({
            title: 'Sei sicuro di voler eliminare questo documento?',
            content: `Quest'operazione non è reversibile`,
            okText: 'Yes',
            okType: 'danger',
            cancelText: 'No',
            okButtonProps: {
                onClick: () => {
                this.props.handleDelete(record, this.props.token);
                Modal.destroyAll();
            }},
            onCancel() { Modal.destroyAll() }
        });
    }

    getAllDocuments() {
        const { token } = this.props;

        this.props.getDocuments(token);
    }

    componentDidMount() {
        const { token } = this.props;

        this.props.getDocuments(token);
        this.props.getCategories(token);
    }

    render() {
        const { docs, categories, isItLoading } = this.props;

        const columns = [{
            title: 'Nome',
            dataIndex: 'title',
            searchable: true,
            width: 300,
            render:  (text, record, index) => {
                return (
                    <React.Fragment>
                        <Row
                            type="flex"
                            justify="start"
                            align="middle"
                            gutter={ 20 }>
                            <Col span={ 1 }>
                                <Popover trigger={ 'click' } style={{ width: '500px' }} content={ <img src={ `${ this.props.apiUrl.services }/document/${ record.id }/cover` } alt="avatar" style={{ maxWidth: '500px' }} /> }>
                                    <Icon type="picture" />
                                </Popover>
                            </Col>
                            <Col span={ 23 }>
                                <div>{ record.title }</div>
                            </Col>
                        </Row>
                    </React.Fragment>
                )
            }
        },{
            title: 'Descrizione',
            dataIndex: 'description',
            searchable: true,
            width: 500
        },{
            title: 'Categoria',
            dataIndex: 'category.name',
            filters: categories ? categories.map(el => {
                return {
                    text: el.label,
                    value: el.label
                }
            }) : [],
            width: 100,
            onFilter: (value, record) => {
                    return record.name === value;
                },
            filterMultiple: false,
        },{
            title: '',
            width: 100,
            render:  (text, record, index) => {
                return (
                    <Button type='danger' onClick={ () => { this.showPropsConfirm(record) } }>Elimina</Button>
                )
            }
        }]

        return (
            <React.Fragment>
                { isItLoading === true ? 
                    <Spin tip="Loading..." className="rm-loader-management">
                        <Alert 
                            message=""
                            description=""
                            type="info"
                            className="rm-message-info"
                        />
                    </Spin> :
                    <CustomTable data={ docs } columns={ columns } pagination={ null } /> 
                }
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        token: state.auth.token,
        docs: state.infoMaterialManage.docs,
        categories: state.infoMaterialManage.categories,
        isItLoading: state.infoMaterialManage.isItLoading,
        apiUrl: state.apiUrl
    };
};

const mapDispatchToProps = dispatch => {
    const getDocuments = token => {
        dispatch(getDocs(token));
    };

    const getCategories = token => {
        dispatch(getCats(token))
    };

    const handleDelete = (target, token) => {
        dispatch(deleteRow(target, token));
    };

    return {
        getDocuments,
        getCategories,
        handleDelete
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(InfoMaterialManage);