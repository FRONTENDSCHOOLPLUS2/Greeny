'use client';

import { RecoilRoot } from 'recoil';

const RecoilRootWrapper = ({ children }: { children: React.ReactNode }) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};

export default RecoilRootWrapper;
