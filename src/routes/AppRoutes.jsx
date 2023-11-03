import React, { Suspense } from 'react';
import {
  AuthenticatedPageRoute,
  PageWrap,
} from '@edx/frontend-platform/react';
import { Routes, Route } from 'react-router-dom';
import {
  ProfilePage, NotFoundPage, ProfilePluginPage,
} from '../profile';

const SlowLoadingPage = React.lazy(() => import('../profile/ProfilePluginSlow'));

const AppRoutes = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      <Route path="/u/:username" element={<AuthenticatedPageRoute><ProfilePage /></AuthenticatedPageRoute>} />
      <Route path="/u/:username/plugin/1" element={<AuthenticatedPageRoute><ProfilePluginPage /></AuthenticatedPageRoute>} />
      <Route path="/u/:username/plugin/2" element={<AuthenticatedPageRoute><SlowLoadingPage /></AuthenticatedPageRoute>} />
      <Route path="/notfound" element={<PageWrap><NotFoundPage /></PageWrap>} />
      <Route path="*" element={<PageWrap><NotFoundPage /></PageWrap>} />
    </Routes>
  </Suspense>
);

export default AppRoutes;
