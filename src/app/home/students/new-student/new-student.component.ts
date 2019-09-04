import { Component, OnInit } from '@angular/core';
import {ConsultasService} from '../../../providers/consultas.service';
// import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-new-student',
  templateUrl: './new-student.component.html',
  styleUrls: ['./new-student.component.scss']
})
export class NewStudentComponent implements OnInit {

  public data: any;
  public name: string;
  public flag: boolean;

  constructor(private consultasService: ConsultasService) {
    this.name = 'DIEGO';
   }

  ngOnInit() {
    this.search();
  }

  public search() {
    this.consultasService.getAll()
    .subscribe(res => {
    // this.modalService.showSuccess('New Configuration');
    if (res.estado === 1) {
      console.log('datos encontrados');
      this.data = res.alumnos;
      this.flag = true;
      console.log(this.flag);

    } else {
      console.log('no hay alumnos');
    }
  },
    error => {
      console.log('error');
    }
  );

  }

}
