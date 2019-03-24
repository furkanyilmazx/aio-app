import React, { Component, Suspense } from 'react';
import { PageLoading } from '../index';

export const PageSuspenseHOC = (WrappedComponent) => {
  return class extends Component {
    render() {
      return (
        <Suspense fallback={<PageLoading />}>
          <WrappedComponent {...this.props} />
        </Suspense>
      );
    }
  };
};
