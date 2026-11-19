import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { App } from '../App';
import { BUSINESS_CONFIG } from '../data/contentConfig';

describe('Ahkun Tupa — Comprehensive Multilingual Test Suite', () => {

  it('1. Root redirects to English homepage and loads Scandinavian hero headline', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    // Hero title
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Where the river meets/i);
    // Heritage bar
    expect(screen.getByText(/1955 · Juhani & Kirsti/i)).toBeInTheDocument();
  });

  it('2. Finnish homepage (/fi) renders authentic Finnish localized copy', () => {
    render(
      <MemoryRouter initialEntries={['/fi']}>
        <App />
      </MemoryRouter>
    );

    // Finnish Hero title
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Missä joki kohtaa/i);
    // Finnish Heritage note
    expect(screen.getAllByText(/Lemmenjoen ensimmäinen saamelainen perheyritys/i)[0]).toBeInTheDocument();
  });

  it('3. German homepage (/de) renders authentic German localized copy', () => {
    render(
      <MemoryRouter initialEntries={['/de']}>
        <App />
      </MemoryRouter>
    );

    // German Hero title
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Wo der Fluss die/i);
    // German Heritage note
    expect(screen.getAllByText(/Der erste saamische Familienbetrieb in Lemmenjoki/i)[0]).toBeInTheDocument();
  });

  it('4. Dual Map Buttons (Google Maps & Apple Maps) are rendered with correct links', () => {
    render(
      <MemoryRouter initialEntries={['/en/location']}>
        <App />
      </MemoryRouter>
    );

    const googleMapsLinks = screen.getAllByRole('link', { name: /Google Maps/i });
    expect(googleMapsLinks.length).toBeGreaterThan(0);
    expect(googleMapsLinks[0]).toHaveAttribute('href', BUSINESS_CONFIG.location.googleMapsUrl);

    const appleMapsLinks = screen.getAllByRole('link', { name: /Apple Maps/i });
    expect(appleMapsLinks.length).toBeGreaterThan(0);
    expect(appleMapsLinks[0]).toHaveAttribute('href', BUSINESS_CONFIG.location.appleMapsUrl);
  });

  it('5. Kelo Log Cabins page loads authentic private rowing boat and open fireplace specs', () => {
    render(
      <MemoryRouter initialEntries={['/en/accommodation/kelo-cabins']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Traditional Kelo Log Cabins Across the River/i);
    expect(screen.getByText(/Open stone fireplace \(avotakka\)/i)).toBeInTheDocument();
    expect(screen.getByText(/Private wooden rowing boat \(soutuvene\) included/i)).toBeInTheDocument();
  });

  it('6. Experiences page loads 20 km riverboat to Ravadas Falls and gold panning', () => {
    render(
      <MemoryRouter initialEntries={['/en/experiences']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText(/Riverboat Excursion to Ravadas Falls/i)).toBeInTheDocument();
    expect(screen.getByText(/Lemmenjoki Gold Panning Experience/i)).toBeInTheDocument();
    expect(screen.getByText(/Hiking into Lemmenjoki National Park/i)).toBeInTheDocument();
  });

  it('7. Restaurant page renders 75-seat capacity and Lappish menu specialties', () => {
    render(
      <MemoryRouter initialEntries={['/en/restaurant']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Café & Restaurant Ahkun Tupa/i);
    expect(screen.getByText(/75 Seats/i)).toBeInTheDocument();
    expect(screen.getByText(/Traditional sautéed reindeer with mashed potatoes & lingonberries \(poronkäristys\)/i)).toBeInTheDocument();
  });

  it('8. Gallery page renders photo gallery cards and category tabs', () => {
    render(
      <MemoryRouter initialEntries={['/en/gallery']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Photographs of Lemmenjoki/i);
    expect(screen.getByText(/River & Rapids/i)).toBeInTheDocument();
    expect(screen.getByText(/Traditional Riverboat on Lemmenjoki/i)).toBeInTheDocument();
  });

  it('9. Location & Travel page shows public bus stop 0m in courtyard and airport distances', () => {
    render(
      <MemoryRouter initialEntries={['/en/location']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getAllByText(/Lemmenjoentie 1030/i)[0]).toBeInTheDocument();
    expect(screen.getByText(/Directly in courtyard/i)).toBeInTheDocument();
    expect(screen.getByText(/92 km/i)).toBeInTheDocument(); // Ivalo Airport
  });

  it('10. Reservations form validation, submission and confirmation modal', async () => {
    render(
      <MemoryRouter initialEntries={['/en/reservations']}>
        <App />
      </MemoryRouter>
    );

    // Form inputs
    const nameInput = screen.getByPlaceholderText(/e\.g\. Matti Virtanen/i);
    const emailInput = screen.getByPlaceholderText(/name@example\.com/i);
    const phoneInput = screen.getByPlaceholderText(/\+358 \.\.\./i);
    const checkInInput = screen.getByLabelText(/Check-in \/ Date \*/i);

    fireEvent.change(nameInput, { target: { value: 'Helena Lehtinen' } });
    fireEvent.change(emailInput, { target: { value: 'helena@example.com' } });
    fireEvent.change(phoneInput, { target: { value: '+358 40 1234567' } });
    fireEvent.change(checkInInput, { target: { value: '2026-07-15' } });

    // Submit the form
    const form = nameInput.closest('form')!;
    fireEvent.submit(form);

    await waitFor(() => {
      expect(screen.getByText(/Reservation Enquiry Received!/i)).toBeInTheDocument();
      expect(screen.getByText(/helena@example\.com/i)).toBeInTheDocument();
      expect(screen.getByText(/Demonstration Concept Note:/i)).toBeInTheDocument();
    }, { timeout: 3000 });
  });

  it('11. Contact page displays official phone number, email and address', () => {
    render(
      <MemoryRouter initialEntries={['/en/contact']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getAllByText(/\+358 40 755 4306/i)[0]).toBeInTheDocument();
    expect(screen.getAllByText(/ahkuntupa@ahkuntupa\.fi/i)[0]).toBeInTheDocument();
  });

  it('12. Finnish localized URLs render corresponding pages seamlessly', () => {
    render(
      <MemoryRouter initialEntries={['/fi/majoitus']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Majoitusta Lemmenjoen/i);
  });

  it('13. German localized URLs render corresponding pages seamlessly', () => {
    render(
      <MemoryRouter initialEntries={['/de/unterkunft']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Übernachten am Ufer des/i);
  });

});
