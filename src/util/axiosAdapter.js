import axios from 'axios';
import AxiosMockAdapter from 'axios-mock-adapter';
import { mockPollInstance } from './mockServer/mockPoll';
import { mockRequestInstance } from './mockServer/mockRequest';
import { mockUserInstance } from './mockServer/mockUser';

const axiosMockInstance = axios.create();
const axiosLiveInstance = axios.create();

const mockAdapter = new AxiosMockAdapter(axiosMockInstance);

mockRequestInstance(mockAdapter);
mockPollInstance(mockAdapter);
mockUserInstance(mockAdapter);

console.log(process.env.AXIOS_MOCK);
export default process.env.AXIOS_MOCK ? axiosMockInstance : axiosLiveInstance;
