import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { App } from '../App';

describe('Kuura Riverside Resort — Automated Test Suite', () => {

  it('1. Homepage loads successfully with hero headline and concept disclaimer', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    // Concept banner
    expect(screen.getAllByText(/Demonstration concept by NOVA Digital Studio/i)[0]).toBeInTheDocument();
    
    // Hero title
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Find your place in the/i);
    expect(screen.getByText(/Woodland accommodation, riverside moments/i)).toBeInTheDocument();
  });

  it('2. Navigation to Duplex Cottages page loads verified 48 m² cottage specifications', () => {
    render(
      <MemoryRouter initialEntries={['/accommodation/cottages']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Duplex Riverside Cottages/i);
    expect(screen.getByText(/Private built-in Finnish sauna/i)).toBeInTheDocument();
  });

  it('3. Navigation to Hotel Rooms page renders distinct wing layouts and buyout info', () => {
    render(
      <MemoryRouter initialEntries={['/accommodation/rooms']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Lodge Rooms & Panoramic Suites/i);
    expect(screen.getByText(/Riverside Family Suite/i)).toBeInTheDocument();
  });

  it('4. Navigation to Camping page renders 5th night promotion', () => {
    render(
      <MemoryRouter initialEntries={['/accommodation/camping']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Riverside Camping & Motorhome Grounds/i);
    expect(screen.getByText(/5th Night Free for Campers/i)).toBeInTheDocument();
  });

  it('5. Winter and Summer Experience pages render accurately', () => {
    const { unmount } = render(
      <MemoryRouter initialEntries={['/experiences/winter']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText(/Cross-Country & Fell Skiing/i)).toBeInTheDocument();
    unmount();

    render(
      <MemoryRouter initialEntries={['/experiences/summer']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText(/Kemijoki River Fishing/i)).toBeInTheDocument();
  });

  it('6. Sauna and Relaxation page loads authentic riverside löyly details', () => {
    render(
      <MemoryRouter initialEntries={['/sauna-and-relaxation']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText(/The Sauna Experience at Kuura/i)).toBeInTheDocument();
    expect(screen.getByText(/Riverside Wood-Fired Sauna/i)).toBeInTheDocument();
    expect(screen.getByText(/Main Sauna Complex/i)).toBeInTheDocument();
  });

  it('7. Café & Gatherings page loads event gathering details', () => {
    render(
      <MemoryRouter initialEntries={['/cafe-and-gatherings']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText(/Cozy Finnish Timber Café & Kota Gatherings/i)).toBeInTheDocument();
    expect(screen.getByText(/Traditional Tent-Kota Shelter/i)).toBeInTheDocument();
  });

  it('8. Gallery page renders photo collection and category filter', () => {
    render(
      <MemoryRouter initialEntries={['/gallery']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Photo Gallery/i);
    expect(screen.getByRole('button', { name: /Winter/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Summer/i })).toBeInTheDocument();
  });

  it('9. Location & Travel page shows address, coordinates, and distances', () => {
    render(
      <MemoryRouter initialEntries={['/location']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getAllByText(/Jokitie 24/i)[0]).toBeInTheDocument();
    expect(screen.getAllByText(/98360 Kemijärvi/i)[0]).toBeInTheDocument();
    expect(screen.getByText(/Kemijärvi Railway Station/i)).toBeInTheDocument();
  });

  it('10. Reservation Form validates required fields and blocks empty submission', async () => {
    render(
      <MemoryRouter initialEntries={['/reservations']}>
        <App />
      </MemoryRouter>
    );

    const submitBtn = screen.getByRole('button', { name: /Send Reservation Inquiry/i });
    fireEvent.click(submitBtn);

    await waitFor(() => {
      expect(screen.getByText(/Please enter your full name/i)).toBeInTheDocument();
      expect(screen.getByText(/Please provide a valid email address/i)).toBeInTheDocument();
      expect(screen.getByText(/Arrival date is required/i)).toBeInTheDocument();
    });
  });

  it('11. Reservation Form validates departure date must be after arrival date', async () => {
    render(
      <MemoryRouter initialEntries={['/reservations']}>
        <App />
      </MemoryRouter>
    );

    const nameInput = screen.getByPlaceholderText(/e\.g\. Aino Virtanen/i);
    const emailInput = screen.getByPlaceholderText(/aino@example\.com/i);
    const phoneInput = screen.getByPlaceholderText(/\+358 40 123 4567/i);

    fireEvent.change(nameInput, { target: { value: 'Helena Mäkinen' } });
    fireEvent.change(emailInput, { target: { value: 'helena@example.fi' } });
    fireEvent.change(phoneInput, { target: { value: '+358 40 987 6543' } });

    const arrivalInput = screen.getByLabelText(/Date of Arrival \*/i);
    const departureInput = screen.getByLabelText(/Date of Departure \*/i);

    fireEvent.change(arrivalInput, { target: { value: '2026-12-25' } });
    fireEvent.change(departureInput, { target: { value: '2026-12-20' } });

    const submitBtn = screen.getByRole('button', { name: /Send Reservation Inquiry/i });
    fireEvent.click(submitBtn);

    await waitFor(() => {
      expect(screen.getByText(/Departure date must be after arrival date/i)).toBeInTheDocument();
    });
  });

  it('12. Reservation Form completes validation and shows Concept Demonstration modal', async () => {
    render(
      <MemoryRouter initialEntries={['/reservations']}>
        <App />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByPlaceholderText(/e\.g\. Aino Virtanen/i), { target: { value: 'Markus Lindholm' } });
    fireEvent.change(screen.getByPlaceholderText(/aino@example\.com/i), { target: { value: 'markus@example.com' } });
    fireEvent.change(screen.getByPlaceholderText(/\+358 40 123 4567/i), { target: { value: '+358 45 111 2233' } });

    fireEvent.change(screen.getByLabelText(/Date of Arrival \*/i), { target: { value: '2026-12-10' } });
    fireEvent.change(screen.getByLabelText(/Date of Departure \*/i), { target: { value: '2026-12-15' } });

    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);

    const submitBtn = screen.getByRole('button', { name: /Send Reservation Inquiry/i });
    fireEvent.click(submitBtn);

    await waitFor(() => {
      expect(screen.getByText(/Enquiry Validated Successfully/i)).toBeInTheDocument();
      expect(screen.getByText(/This is a website concept preview by NOVA Digital Studio/i)).toBeInTheDocument();
    }, { timeout: 2000 });
  });

  it('13. 404 Route displays fallback page correctly', () => {
    render(
      <MemoryRouter initialEntries={['/non-existent-path-for-testing']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Lost in the Northern Forest/i);
    expect(screen.getByText(/Error 404 · Path Not Found/i)).toBeInTheDocument();
  });

});
