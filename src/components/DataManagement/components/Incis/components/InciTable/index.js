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
import CustomTable from '../../../../../../utils/CustomTable/index';

class InciTable extends React.Component {
    constructor(props) {
        super(props);

        this.changeModalState = this.changeModalState.bind(this);
        this.showPropsConfirm = this.showPropsConfirm.bind(this);
    };

    changeModalState(target) {
        const { isModalOpen } = this.props;
        this.props.changeState(!isModalOpen);
        this.props.handleRowSelect(target);
    };

    showPropsConfirm(record) {
        Modal.confirm({
            title: 'Sei sicuro di voler eliminare questo inci?',
            content: `L'operazione sarà irreversibile`,
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
    };

    render() {
        const { data } = this.props;

        const columns = [{
            title: 'Categoria',
            width: 300,
            dataIndex: 'category',
            searchable: true,
            onCell: record => {
                return {
                    onClick: e => {
                        this.changeModalState(record);
                    }
                }
            }
        },{
            title: 'Inci',
            width: 300,
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
            title: 'Denominazione comune',
            width: 300,
            dataIndex: 'commonDenomination',
            searchable: true,
            onCell: record => {
                return {
                    onClick: e => {
                        this.changeModalState(record);
                    }
                }
            }
        },{
            title: 'FC',
            width: 100,
            dataIndex: 'fc',
            filters: [{
                text: 'Si',
                value: true
            },{
                text: 'No',
                value: false
            }],
            onFilter: (value, record) => {
                    return record.fc === value;
                },
            filterMultiple: false,
            render: (text, record, index) => {
                return record.fc ? 'SI' : 'NO'
            },
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
            title: 'Sensibilizzante',
            dataIndex: 'sensitizing',
            width: 400,
            onCell: record => {
                return {
                    onClick: e => {
                        this.changeModalState(record);
                    }
                }
            }
        },{
            title: 'Altre discussioni',
            dataIndex: 'otherDiscussions',
            width: 400,
            onCell: record => {
                return {
                    onClick: e => {
                        this.changeModalState(record);
                    }
                }
            }
        },{
            title: 'Bibliografia',
            dataIndex: 'bibliography',
            width: 300,
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
                    data={ data } 
                    tableWidth={ '150vw' } />
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        token: state.auth.token,
        isModalOpen: state.incisManage.isModalOpen
    };
};

const mapDispatchToProps = dispatch => {
    const changeState = newState => {
        dispatch(state(newState));
    };

    const handleRowSelect = (row) => {
        dispatch(rowSelect(row));
    };

    const handleDelete = (row, token) => {
        dispatch(rowDelete(row, token));
    };

    return {
        changeState,
        handleRowSelect,
        handleDelete
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(InciTable);