import { IPerson } from 'app/entities/person/person.model';

export interface ICar {
  id: number;
  model?: string | null;
  color?: string | null;
  person?: Pick<IPerson, 'id'> | null;
}

export type NewCar = Omit<ICar, 'id'> & { id: null };
