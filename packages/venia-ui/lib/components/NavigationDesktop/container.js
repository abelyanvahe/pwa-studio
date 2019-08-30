import { connect } from '@magento/venia-drivers';
// import { closeDrawer } from '../../actions/app';
import { getAllCategories } from '../../actions/catalog';

import Navigation from './navigation';

const mapStateToProps = ({ catalog, user }) => {
    const { categories, rootCategoryId } = catalog;
    return {
        categories,
        rootCategoryId
    };
};

const mapDispatchToProps = {
    // closeDrawer,
    getAllCategories,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Navigation);
