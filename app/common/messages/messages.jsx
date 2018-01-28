import React from 'react';
import ReduxToastr from 'react-redux-toastr';
//import 'modules/react-redux-toastr/src/styles/index.scss';

export default props => (
    <ReduxToastr
        timeOut={4000}
        newestOnTop={false}
        preventDuplicates={true}
        position='top-right'
        transitionIn='fadeIn'
        transitionOut='fadeOut'
        progressBar 
    />
)

