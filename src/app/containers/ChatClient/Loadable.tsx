/**
 * Asynchronously loads the component for ChatClient
 */

import { lazyLoad } from 'utils/loadable';

export const ChatClient = lazyLoad(
  () => import('./index'),
  module => module.ChatClient,
);
