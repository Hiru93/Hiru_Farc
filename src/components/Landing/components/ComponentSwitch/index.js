import React from 'react';

//Componenti indicizzati
import DataManagement from '../../../DataManagement/index';
import ImportExport from '../../../ImportExport/index';
import InfoMaterialManage from '../../../InfoMaterialManage/index';
import UploadMaterials from '../../../UploadMaterials/index';
import ArchiveManagement from '../../../ArchiveManagement/index';

class ComponentSwitch extends React.Component {
    render() {
        const { componentId } = this.props;
        return <React.Fragment>{ this.renderSwitch(componentId) }</React.Fragment>;
    }

    renderSwitch(name) {
        const components = {
            'data-manage': (
                <DataManagement { ...this.props } />
            ),
            'import-export': (
                <ImportExport { ...this.props } />
            ),
            'info-material-table': (
                <InfoMaterialManage { ...this.props } />
            ),
            'upload-materials': (
                <UploadMaterials { ...this.props } />
            ),
            'archive-data-management': (
                <ArchiveManagement { ...this.props } />
            )
        };

        return components[name];
    }
}

export default ComponentSwitch;