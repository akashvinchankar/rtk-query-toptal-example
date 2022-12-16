import { Grid } from '@material-ui/core';
import React from 'react';
import PageContainer from '../../../../../../shared/components/PageContainer/PageContainer';
import PageHeader from '../../../../../../shared/components/PageHeader/PageHeader';
import RepositoryGrid from './components/RepositoryGrid/RepositoryGrid';
import RepositoryPagination from './components/RepositoryPagination/RepositoryPagination';
import RepositorySearch from './components/RepositorySearch/RepositorySearch';
import RepositorySearchFormContext from './components/RepositorySearch/RepositorySearchFormContext';

const Repositories = () => {
  return (
    <RepositorySearchFormContext>
      <PageContainer>
        <PageHeader title="Repositories" />
      </PageContainer>
    </RepositorySearchFormContext>
  );
};

export default Repositories;
