import aspida from '@aspida/fetch';

import { API_BASE_URL, API_KEY } from '@/config/index';
import api from '@/lib/cms/api/$api';

const fetchConfig: Required<Parameters<typeof aspida>>[1] = {
  baseURL: API_BASE_URL,
  headers: { 'X-MICROCMS-API-KEY': API_KEY },
};

export const client = api(aspida(fetch, fetchConfig));
