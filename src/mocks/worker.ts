/* eslint-disable import/prefer-default-export */
import handlers from 'mocks/handlers';
import { setupWorker } from 'msw';

export const worker = setupWorker(...handlers);
