import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { getLanguageRedirectPath } from './languageRouting.js';

describe('getLanguageRedirectPath', () => {
  it('adds prefix when navigating from English to Spanish', () => {
    assert.equal(getLanguageRedirectPath('/services', 'es'), '/es/services');
  });

  it('adds prefix when navigating from home to Spanish', () => {
    assert.equal(getLanguageRedirectPath('/', 'es'), '/es');
  });

  it('adds prefix when navigating from English to Italian', () => {
    assert.equal(getLanguageRedirectPath('/team', 'it'), '/it/team');
  });

  it('swaps prefix when switching between non-English languages', () => {
    assert.equal(getLanguageRedirectPath('/es/contact', 'it'), '/it/contact');
  });

  it('removes prefix when returning to English', () => {
    assert.equal(getLanguageRedirectPath('/es/contact', 'en'), '/contact');
  });

  it('normalizes to root when returning to English home route', () => {
    assert.equal(getLanguageRedirectPath('/es', 'en'), '/');
  });

  it('returns null when no navigation is necessary', () => {
    assert.equal(getLanguageRedirectPath('/services', 'en'), null);
    assert.equal(getLanguageRedirectPath('/es/services', 'es'), null);
  });
});
