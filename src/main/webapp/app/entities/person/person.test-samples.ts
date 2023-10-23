import { IPerson, NewPerson } from './person.model';

export const sampleWithRequiredData: IPerson = {
  id: 8408,
  name: 'téméraire zzzz',
};

export const sampleWithPartialData: IPerson = {
  id: 25990,
  name: 'proche spécialiste délégation',
};

export const sampleWithFullData: IPerson = {
  id: 27384,
  name: 'large dense même',
  surname: 'téléphoner',
  gender: 'FEMALE',
};

export const sampleWithNewData: NewPerson = {
  name: 'sans que cot cot saigner',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
