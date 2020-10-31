import React from 'react';

//Libraries components
import { Table, Input, Button, Icon } from 'antd';

//Icons

//Style

//Actions

//Components

//Misc imports

class CustomTable extends React.Component {
    constructor(props) {
        super(props);

        this.getColumnSearchProps = this.getColumnSearchProps.bind(this);
    }
    
    getColumnSearchProps(dataIndex) {
        return {
            filterDropdown: ({ 
                setSelectedKeys, 
                selectedKeys, 
                confirm,
                clearFilters
            }) => (
                <div className='rm-dropdown-container'>
                    <Input
                        ref={ node => { this.searchInput = node } }
                        placeholder={ `Filtra per ${ dataIndex }` }
                        value={ selectedKeys[0] }
                        onChange={ e => { setSelectedKeys(e.target.value ? [e.target.value] : []) } }
                        onPressEnter={ () => confirm() }
                        className='rm-dropdown-filter'
                    />
                    <Button
                        type='primary'
                        onClick={ () => confirm() }
                        icon='search'
                        size='small'
                        className='rm-dropdown-button'>
                            Search
                    </Button>
                    <Button
                        onClick={ () => clearFilters() }
                        size='small'
                        className='rm-dropdown-button rm-dropdown-button-reset'>
                            Reset
                    </Button>
                </div>
            ),
            filterIcon: filtered => (
                <Icon type="search" className={ filtered ? 'rm-filtered-text' : undefined } />
            ),
            onFilter: (value, record) => {
                if(record[dataIndex]){
                    return record[dataIndex]
                    .toString()
                    .toLowerCase()
                    .includes(value.toLowerCase())
                }
            },
            onFilterDropdownVisibleChange: visible => {
                if(visible)
                    setTimeout(() => this.searchInput.select())
            }
        };
    };

    render() {
        const { 
            data, 
            columns, 
            rowSelect, 
            rowClick, 
            footer, 
            tableHeight, 
            tableWidth ,
            pagination
        } = this.props;

        const searchableColumns = columns.map(col => {
            return col.searchable ? ({
                ...this.getColumnSearchProps(col.dataIndex),
                ...col
            }) :
            (col);
        });

        const rowSelection = {
            onChange: rowSelect ? rowSelect : null
        };

        return (
            <React.Fragment>
                <Table
                    columns={ searchableColumns }
                    dataSource={ data }
                    size='middle'
                    bordered={ true }
                    pagination={ pagination ? { pageSize: 50 } : false }
                    scroll={{ y: tableHeight ? tableHeight : '50vh', x: tableWidth ? tableWidth : '' }}
                    onRow={ (rowSelect || rowClick) ? record => {
                        if(rowSelect) {
                            return {
                                onContextMenu: e => {
                                    e.preventDefault();
                                    rowSelect(record.key, [record], true);
                                }
                            };
                        }
                        if(rowClick) {
                            return {
                                onClick: e => {
                                    e.preventDefault();
                                    rowClick(record);
                                }
                            };
                        }
                    } :
                    null }
                    rowSelection={ rowSelection.onChange !== null ? rowSelection : null }
                    footer={ footer ? footer : null } />
            </React.Fragment>
        );
    }
}

export default CustomTable;