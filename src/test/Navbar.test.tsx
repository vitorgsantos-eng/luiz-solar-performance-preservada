import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Navbar } from "@/components/luiz/Navbar";

// Mock the Logo component to avoid rendering complex SVG during tests if needed,
// but let's test it directly since it is small and clean.
describe("Navbar Component", () => {
  it("renders the header and the brand logo image", () => {
    render(<Navbar />);

    // Check if the logo image is rendered by searching for its alt text
    const logoElement = screen.getByAltText(/Luiz Solar/i);
    expect(logoElement).toBeInTheDocument();
  });

  it("renders all navigation links on desktop view", () => {
    render(<Navbar />);

    const expectedLinks = [
      "Início",
      "Serviços",
      "Diagnóstico",
      "Como funciona",
      "Dúvidas",
      "Contato",
    ];

    expectedLinks.forEach((linkLabel) => {
      // Find navigation links (desktop version)
      const linkElements = screen.getAllByText(linkLabel);
      expect(linkElements.length).toBeGreaterThan(0);
      expect(linkElements[0]).toHaveAttribute("href");
    });
  });

  it("contains the WhatsApp appointment CTA with robust security attributes", () => {
    render(<Navbar />);

    // Get all 'Agendar Diagnóstico' buttons/links (both desktop and mobile container)
    const ctaLinks = screen.getAllByRole("link", { name: /Agendar Diagnóstico/i });
    expect(ctaLinks.length).toBeGreaterThan(0);

    ctaLinks.forEach((link) => {
      expect(link).toHaveAttribute("target", "_blank");
      expect(link).toHaveAttribute("rel", "noreferrer");
      expect(link).toHaveAttribute("href");
      expect(link.getAttribute("href")).toContain("wa.me");
    });
  });

  it("toggles mobile menu drawer when mobile menu button is clicked", () => {
    render(<Navbar />);

    // Find the toggle button via aria-label "Menu"
    const toggleButton = screen.getByRole("button", { name: /Menu/i });
    expect(toggleButton).toBeInTheDocument();

    // Before clicking, the mobile navigation drawer is not visible (does not exist in DOM because it uses {open && ...})
    // Note: since screen.getAllByText returns the desktop links, we can verify that after clicking, extra items appear or mobile drawer class is toggled
    const initialLinksCount = screen.getAllByText("Início").length;
    expect(initialLinksCount).toBe(1); // Only the desktop one

    // Click to open the drawer
    fireEvent.click(toggleButton);

    // After clicking, the mobile links are rendered, so "Início" should appear twice (1 desktop + 1 mobile)
    const openedLinksCount = screen.getAllByText("Início").length;
    expect(openedLinksCount).toBe(2);

    // Click again to close the drawer
    fireEvent.click(toggleButton);

    // It should go back to 1
    const closedLinksCount = screen.getAllByText("Início").length;
    expect(closedLinksCount).toBe(1);
  });
});
