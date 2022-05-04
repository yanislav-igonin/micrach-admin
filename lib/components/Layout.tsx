import { AppShell } from '@mantine/core';
import React from 'react';
import { Header } from './Header';

export const Layout: React.FC = ({ children }) => (
  <main>
    <AppShell
      padding="md"
      header={<Header/>}
      styles={(theme) => ({
        main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
      })}
    >
      {children}
    </AppShell>
  </main>
);

