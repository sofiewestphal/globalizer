/**
 * Core
 */
import React from 'react';
/**
 * Components
 */
import CreateActivityForm from '../../components/CreateActivityForm';

/* END OF IMPORTS */

/**
 *@Component - returns create activity screen
 */
const CreateActivityScreen = () => (
  <div className="container-fluid screenContainer">
    <div className="col-xs-12 col-sm-10 col-sm-offset-1">
      <h1>Create Activity</h1>
    </div>
    <CreateActivityForm />
  </div>
);

export default CreateActivityScreen;
