import React from 'react';
import { connect } from 'react-redux';

//Libraries components
import { Modal, Button } from 'antd';

//Icons

//Style

//Actions
import { state } from './actions/changeModalState';
import { rowSelect } from './actions/rowSelect';
import { rowDelete } from './actions/rowDelete';

//Components
import CustomTable from '../../../../../../utils/CustomTable/index.js';

class CategoriesTable extends React.Component {
    constructor(props) {
        super(props);

        this.changeModalState = this.changeModalState.bind(this);
        this.showPropsConfirm = this.showPropsConfirm.bind(this);
    };

    changeModalState(target) {
        const { isModalOpen } = this.props;
        this.props.changeState(!isModalOpen);
        this.props.HandleRowSelect(target);
    }

    showPropsConfirm(record) {
        Modal.confirm({
            title: 'Sei sicuro di voler eliminare questa categoria?',
            content: 'Facendolo, eliminerai anche tutti gli inci correlati',
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

    render() {
        const { data } = this.props;

        const columns = [{
            title: 'Categoria',
            width: 200,
            dataIndex: 'name',
            searchable: true,
            onCell: record => {
                return {
                    onClick: e => {
                        this.changeModalState(record);
                    }
                }
            }
        },{
            title: 'Info',
            dataIndex: 'info',
            onCell: record => {
                return {
                    onClick: e => {
                        this.changeModalState(record);
                    }
                }
            }
        },{
            title: 'Bibliografia',
            width: 200,
            dataIndex: 'bibliography',
            onCell: record => {
                return {
                    onClick: e => {
                        this.changeModalState(record);
                    }
                }
            }
        },{
            title: '',
            width: 100,
            render: (text, record, index) => {
                return (
                    <Button type='danger' onClick={ () => { this.showPropsConfirm(record) } }>Elimina</Button>
                )
            }
        }];

        return (
            <React.Fragment>
                <CustomTable 
                    columns={ columns } 
                    data={ data } />
            </React.Fragment>
        );
    }
};

const mapStateToProps = state => {
    return {
        token: state.auth.token,
        isModalOpen: state.categoriesManage.isModalOpen
    };
};

const mapDispatchToProps = dispatch => {
    const changeState = newState => {
        dispatch(state(newState));
    };

    const HandleRowSelect = row => {
        dispatch(rowSelect(row));
    };

    const handleDelete = (row, token) => {
        dispatch(rowDelete(row, token));
    };

    return {
        changeState,
        HandleRowSelect,
        handleDelete
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CategoriesTable);