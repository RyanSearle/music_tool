import React from 'react';
import { Route } from 'react-router';
import Layout from './components/structure/Layout';
import GuitarPage from "./pages/guitar.page";

export default () => (
  <Layout>
    <Route exact path='/' component={GuitarPage} />
  </Layout>
);
