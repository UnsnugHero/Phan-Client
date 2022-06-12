import axios from 'axios';
import AxiosMockAdapter from 'axios-mock-adapter';
import { mockRequestInstance } from './mockServer/mockRequest';

const axiosMockInstance = axios.create();
const axiosLiveInstance = axios.create();

const mockAdapter = new AxiosMockAdapter(axiosMockInstance);

mockRequestInstance(mockAdapter);

export default true ? axiosMockInstance : axiosLiveInstance;
