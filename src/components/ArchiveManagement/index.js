import React from 'react';

//Libraries components
import { Tabs, Row, Col } from 'antd';

//Style

//Actions

//Components
import ProfessionalFigures from './components/ProfessionalFigures';
import Categories from './components/Categories';

//Misc import

class ArchiveManagement extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Tabs>
                    <Tabs.TabPane tab={ 'Figure professionali' } key={ 0 }>
                        <Row
                            type="flex"
                            justify="start"
                            align="middle"
                            gutter={ 20 }>
                            <Col span={ 24 }>
                                <ProfessionalFigures />
                            </Col>
                        </Row>
                    </Tabs.TabPane>
                    <Tabs.TabPane tab={ 'Categorie' } key={ 1 }>
                        <Row
                            type="flex"
                            justify="start"
                            align="middle"
                            gutter={ 20 }>
                            <Col span={ 24 }>
                                <Categories />
                            </Col>
                        </Row>
                    </Tabs.TabPane>
                </Tabs>
            </React.Fragment>);
    }
};

export default ArchiveManagement;