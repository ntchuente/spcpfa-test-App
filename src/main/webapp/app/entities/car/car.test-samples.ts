import { ICar, NewCar } from './car.model';

export const sampleWithRequiredData: ICar = {
  id: 1981,
};

export const sampleWithPartialData: ICar = {
  id: 962,
  model: 'vu que vouh',
  color: 'chocolat',
};

export const sampleWithFullData: ICar = {
  id: 28336,
  model: 'au cas où conseil municipal terne',
  color: 'bisque',
};

export const sampleWithNewData: NewCar = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
