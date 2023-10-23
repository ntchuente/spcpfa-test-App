import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'person',
        data: { pageTitle: 'spcpfasimpleApp2App.person.home.title' },
        loadChildren: () => import('./person/person.routes'),
      },
      {
        path: 'car',
        data: { pageTitle: 'spcpfasimpleApp2App.car.home.title' },
        loadChildren: () => import('./car/car.routes'),
      },
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ]),
  ],
})
export class EntityRoutingModule {}
