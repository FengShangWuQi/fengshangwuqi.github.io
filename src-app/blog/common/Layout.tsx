import { React } from 'src-core/react';

import { Footer } from './Footer';

import 'normalize.css';
import 'prismjs/themes/prism-tomorrow.css';
import '../styles/Layout.css';

export const Layout = ({ children }: {children: React.ReactNode}) => (
  <div>
    <header
      style={{
        position: 'absolute',
        height: 480,
        width: '100%',
        background: '#101012',
      }}
    />
    {children}
    <Footer />
  </div>
);
