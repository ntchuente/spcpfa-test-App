import { Gender } from 'app/entities/enumerations/gender.model';

export interface IPerson {
  id: number;
  name?: string | null;
  surname?: string | null;
  gender?: keyof typeof Gender | null;
}

export type NewPerson = Omit<IPerson, 'id'> & { id: null };
