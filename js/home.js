// import
import { Services } from './components/services/Services.js';
import { servicesData } from './data/servicesData.js';

// execution

const servicesObj = new Services('#services-content', servicesData);
servicesObj.init();
