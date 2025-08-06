import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Sidebar from './index';
import { ThemeProvider, createTheme } from '@mui/material/styles';

describe('Sidebar', () => {
  const renderSidebar = () => {
    const theme = createTheme();
    render(
      <ThemeProvider theme={theme}>
        <MemoryRouter>
          <Sidebar drawerOpen={true} isMobile={false} handleSidebarContentToggle={() => {}} />
        </MemoryRouter>
      </ThemeProvider>
    );
  };

  test('renders all sidebar links with correct labels', () => {
    renderSidebar();
    expect(screen.getByText(/iRECYCLE/i)).toBeInTheDocument();
    expect(screen.getByText(/Admin/i)).toBeInTheDocument();
    expect(screen.getByText(/MarketPlace/i)).toBeInTheDocument();
    expect(screen.getByText(/Price Catalog/i)).toBeInTheDocument();
    expect(screen.getByText(/Pickup Scheduling/i)).toBeInTheDocument();
    expect(screen.getByText(/Payment/i)).toBeInTheDocument();
    expect(screen.getByText(/Log Out/i)).toBeInTheDocument();
  });

  test('renders avatar and admin name when drawerOpen is true', () => {
    renderSidebar();
    expect(screen.getByText(/Admin/i)).toBeInTheDocument();
    const img = screen.getByRole('img', { name: /admin profile/i });
    expect(img).toBeInTheDocument();
  });
});
