import React from 'react';
import { connect } from 'react-redux';

//Libraries components
import { Form, Input, Col, Row, Select, Radio } from 'antd';

//Icons

//Style

//Actions
import { updateFormField } from './actions/updateFormValue';

//Components

//Misc imports

class ModalRowUpdateForm extends React.Component {
    render() {
        const { getFieldDecorator } = this.props.form;
        const { categories } = this.props;

        return (
            <Form id='login-form'>
                <Row
                    type="flex"
                    justify="space-around"
                    align="middle">
                    <Col
                        span={11}
                        justify="space-around"
                        align="middle">
                        <Form.Item label="Categoria">
                            { getFieldDecorator('category', {
                                rules: [{ required: true, message: 'Il campo Categoria è obbligatorio' }]
                            })(
                                <Select>
                                    { categories.map((x, index) => {
                                        return (
                                            <Select.Option value={ x.value } key={ x.key }>
                                                { x.label }
                                            </Select.Option> );
                                    }) }
                                </Select>
                            ) }
                        </Form.Item>
                    </Col>
                    <Col
                        span={11}
                        justify="space-around"
                        align="middle">
                        <Form.Item label="Inci">
                            { getFieldDecorator('name', {
                                rules: [{ required: true, message: 'Il campo Inci è obbligatorio' }]
                            })( <Input /> ) }
                        </Form.Item>
                    </Col>
                </Row>
                <Row
                    type="flex"
                    justify="space-around"
                    align="middle">
                    <Col
                        span={11}
                        justify="space-around"
                        align="middle">
                        <Form.Item label="Denominazione comune">
                            { getFieldDecorator('commonDenomination')(
                                <Input />
                            ) }
                        </Form.Item>
                    </Col>
                    <Col
                        span={11}
                        justify="space-around"
                        align="middle">
                        <Form.Item label="FC">
                            { getFieldDecorator('fc')(
                                <Radio.Group>
                                    <Radio value={ false }>No</Radio>
                                    <Radio value={ true }>Si</Radio>
                                </Radio.Group>
                            ) }
                        </Form.Item>
                    </Col>
                </Row>
                <Row
                    type="flex"
                    justify="space-around"
                    align="middle">
                    <Col
                        span={11}
                        justify="space-around"
                        align="middle">
                        <Form.Item label="Info">
                            { getFieldDecorator('info')(
                                <Input.TextArea rows={ 4 } autoSize={{ minRows: 4, maxRows: 4 }} />
                            ) }
                        </Form.Item>
                    </Col>
                    <Col
                        span={11}
                        justify="space-around"
                        align="middle">                            
                        <Form.Item label="Sensibilizzante">
                            { getFieldDecorator('sensitizing')(
                                <Input.TextArea rows={ 4 } autoSize={{ minRows: 4, maxRows: 4 }} />
                            ) }
                        </Form.Item>
                    </Col>
                </Row>
                <Row
                    type="flex"
                    justify="space-around"
                    align="middle">
                    <Col
                        span={11}
                        justify="space-around"
                        align="middle">
                        <Form.Item label="Bibliografia">
                            { getFieldDecorator('bibliography')(
                                <Input.TextArea rows={ 4 } autoSize={{ minRows: 4, maxRows: 4 }} />
                            ) }
                        </Form.Item>
                    </Col>
                    <Col
                        span={11}
                        justify="space-around"
                        align="middle">                            
                        <Form.Item label="Altre discussioni">
                            { getFieldDecorator('otherDiscussions')(
                                <Input.TextArea rows={ 4 } autoSize={{ minRows: 4, maxRows: 4 }} />
                            ) }
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        );
    }
}

const FormRowUpdate = connect(state => {
    return {
        category: state.incisManage.selectedRow.category,
        name: state.incisManage.selectedRow.name,
        commonDenomination: state.incisManage.selectedRow.commonDenomination,
        fc: state.incisManage.selectedRow.fc,
        sensitizing: state.incisManage.selectedRow.sensitizing,
        otherDiscussions: state.incisManage.selectedRow.otherDiscussions,
        info: state.incisManage.selectedRow.info,
        bibliography: state.incisManage.selectedRow.bibliography,
        categories: state.dataManage.categoryList,
        id: state.incisManage.selectedRow.id,
        key: state.incisManage.selectedRow.key
    };
})(Form.create({
    name: 'inci-row-form-update',
    mapPropsToFields(props) {
        return {
            category: Form.createFormField({
                ...props.category,
                value: props.category
            }),
            name: Form.createFormField({
                ...props.name,
                value: props.name
            }),
            commonDenomination: Form.createFormField({
                ...props.commonDenomination,
                value: props.commonDenomination
            }),
            fc: Form.createFormField({
                ...props.fc,
                value: props.fc
            }),
            sensitizing: Form.createFormField({
                ...props.sensitizing,
                value: props.sensitizing
            }),
            otherDiscussions: Form.createFormField({
                ...props.otherDiscussions,
                value: props.otherDiscussions
            }),
            info: Form.createFormField({
                ...props.info,
                value: props.info
            }),
            bibliography: Form.createFormField({
                ...props.bibliography,
                value: props.bibliography
            })
        };
    },
    onValuesChange(props, values) {
        props.dispatch(updateFormField(Object.keys(values)[0], values[Object.keys(values)[0]]));
    }
})(ModalRowUpdateForm));

export default FormRowUpdate;