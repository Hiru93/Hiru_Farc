import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux';
import { connectRouter} from 'connected-react-router';
import history from './history';

//Reducers
import auth from '../components/Login/reducers/index';
import loginForm from '../components/Login/components/LoginForm/reducers/index';
import landing from '../components/Landing/reducers/index';
import dataManageCategoryForm from '../components/DataManagement/components/Categories/components/CategoriesForm/reducers/index';
import dataManageInciForm from '../components/DataManagement/components/Incis/components/InciForm/reducers/index';
import dataManage from '../components/DataManagement/reducers/index';
import incisManage from '../components/DataManagement/components/Incis/reducers/index';
import categoriesManage from '../components/DataManagement/components/Categories/reducers/index';
import categoryFormRowUpdate from '../components/DataManagement/components/Categories/components/CategoriesModalForm/reducers/index';
import inciFormUpdate from '../components/DataManagement/components/Incis/components/InciModalForm/reducers/index';
import authComponent from '../utils/Authorize/reducers/index';
import infoMaterialManage from '../components/InfoMaterialManage/reducers/index';
import uploadMaterials from '../components/UploadMaterials/reducers/index';
import professionalFigureArchiveManagement from '../components/ArchiveManagement/components/ProfessionalFigures/reducers/index';
import categoriesArchiveManagement from '../components/ArchiveManagement/components/Categories/reducers/index';
import addCategoryForm from '../components/ArchiveManagement/components/Categories/components/AddCategoryForm/reducers/index';
import addProfessionalFiguresForm from '../components/ArchiveManagement/components/ProfessionalFigures/components/AddProfessionalFigure/reducers/index';
import editCategoryForm from '../components/ArchiveManagement/components/Categories/components/EditRowForm/reducers/index';
import editfigureForm from '../components/ArchiveManagement/components/ProfessionalFigures/components/EditRowForm/reducers/index';

//Epics
import LandingEpic from '../components/Landing/epics/index';
import LoginEpic from '../components/Login/epics/index';
import DataManageEpic from '../components/DataManagement/epics/index';
import DataManageCategoryEpic from '../components/DataManagement/components/Categories/epics/index';
import DataManageInciEpic from '../components/DataManagement/components/Incis/epics/index';
import DataManageCategoryInsertEpic from '../components/DataManagement/components/Categories/components/CategoriesForm/epics/index';
import DataManageInciInsertEpic from '../components/DataManagement/components/Incis/components/InciForm/epics/index';
import AuthComponentEpic from '../utils/Authorize/epics/index';
import CategoriesTableEpic from '../components/DataManagement/components/Categories/components/CategoriesTable/epics/index';
import InciTableEpic from '../components/DataManagement/components/Incis/components/InciTable/epics/index';
import infoMaterialManageEpic from '../components/InfoMaterialManage/epics/index';
import uploadMaterialsEpic from '../components/UploadMaterials/epics/index';
import archiveManagementFiguresEpic from '../components/ArchiveManagement/components/ProfessionalFigures/epics/index';
import archiveManagementCategoriesEpic from '../components/ArchiveManagement/components/Categories/epics/index';
import addCategoryFormEpic from '../components/ArchiveManagement/components/Categories/components/AddCategoryForm/epics/index';
import addProfessionalFiguresFormEpic from '../components/ArchiveManagement/components/ProfessionalFigures/components/AddProfessionalFigure/epics/index';
import editCategoryFiguresFormEpic from '../components/ArchiveManagement/components/Categories/components/EditRowForm/epics/index';
import editProfessionalFiguresFormEpic from '../components/ArchiveManagement/components/ProfessionalFigures/components/EditRowForm/epics/index';

const initialState = {
    apiUrl: ''
};

const apiUrl = (state = initialState.apiUrl) => {
    return state;
};

export const rootEpic = combineEpics(
    LandingEpic,
    LoginEpic,
    DataManageEpic,
    DataManageCategoryEpic,
    DataManageInciEpic,
    DataManageCategoryInsertEpic,
    DataManageInciInsertEpic,
    AuthComponentEpic,
    CategoriesTableEpic,
    InciTableEpic,
    infoMaterialManageEpic,
    uploadMaterialsEpic,
    archiveManagementFiguresEpic,
    archiveManagementCategoriesEpic,
    addCategoryFormEpic,
    addProfessionalFiguresFormEpic,
    editCategoryFiguresFormEpic,
    editProfessionalFiguresFormEpic
);

export const rootReducer = combineReducers({
    router: connectRouter(history),
    apiUrl,
    auth,
    loginForm,
    landing,
    dataManageCategoryForm,
    dataManageInciForm,
    dataManage,
    incisManage,
    categoriesManage,
    categoryFormRowUpdate,
    inciFormUpdate,
    authComponent,
    infoMaterialManage,
    uploadMaterials,
    professionalFigureArchiveManagement,
    categoriesArchiveManagement,
    addCategoryForm,
    addProfessionalFiguresForm,
    editCategoryForm,
    editfigureForm
});