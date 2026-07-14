import { describe, it, expect } from 'vitest';
import { readFileSync } from 'fs';
import { resolve } from 'path';
import { JSDOM } from 'jsdom';

describe('Test environment setup', () => {
  it('should have JSDOM environment available', () => {
    expect(document).toBeDefined();
    expect(window).toBeDefined();
  });

  it('should be able to load and execute index.html scripts', () => {
    const htmlPath = resolve(__dirname, '..', 'index.html');
    const htmlContent = readFileSync(htmlPath, 'utf-8');
    const dom = new JSDOM(htmlContent, {
      runScripts: 'dangerously',
      resources: 'usable',
      url: 'http://localhost',
    });

    // Trigger DOMContentLoaded
    const event = new dom.window.Event('DOMContentLoaded');
    dom.window.document.dispatchEvent(event);

    // Verify that our functions are accessible on the window
    expect(typeof dom.window.calculateTotals).toBe('function');
    expect(typeof dom.window.formatCurrency).toBe('function');
    expect(typeof dom.window.sanitizeNumericInput).toBe('function');
    expect(typeof dom.window.parseNumericValue).toBe('function');
    expect(typeof dom.window.addCustomItem).toBe('function');
    expect(typeof dom.window.removeCustomItem).toBe('function');
    expect(typeof dom.window.createInitialModel).toBe('function');

    dom.window.close();
  });
});
