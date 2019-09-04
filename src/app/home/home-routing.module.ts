import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewStudentComponent } from './students/new-student/new-student.component';


// const routes: Routes = [];
const routes: Routes = [
  {
      path: '',
      component: HomeComponent,
      children: [
        { path: '', redirectTo: 'new-student', pathMatch: 'prefix' },
          {
            path: 'new-student',
            component: NewStudentComponent,
            data: {
              title: 'Nuevo Plan'
            }
          }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
