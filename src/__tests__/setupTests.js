// src/__tests__/setupTests.js
import '@testing-library/jest-dom/extend-expect';
import { configure } from '@testing-library/dom';

configure({ testIdAttribute: 'data-testid' });
