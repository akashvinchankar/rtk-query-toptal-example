import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import Products from '../../../../components/Products';
import FullscreenProgress from '../../../../shared/components/FullscreenProgress/FullscreenProgress';
// import AuthenticatedRoute from '../../../auth/components/AuthenticatedRoute/AuthenticatedRoute';

const RepositoriesRoute = React.lazy(
  () => import('./routes/Repositories/Repositories')
);
const CommitsRoute = React.lazy(() => import('./routes/Commits/Commits'));

const Repositories = () => {
  return (
    <div>
      <Products />
    </div>
    // <Suspense fallback={<FullscreenProgress />}>
    //   <Switch>
    //     <Route exact path="/repositories">
    //       <RepositoriesRoute />
    //     </Route>
    //     <Route exact path="/repositories/:repositoryName">
    //       <CommitsRoute />
    //     </Route>
    //   </Switch>
    // </Suspense>
  );
};

export default Repositories;
