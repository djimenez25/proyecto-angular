import { EscuderiasService } from './../../services/escuderias.service';
import { Component, OnInit } from '@angular/core';
import { escuderiaInterface } from 'src/app/models/escuderias.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-escuderias',
  templateUrl: './escuderias.component.html',
  styleUrls: ['./escuderias.component.scss'],
})
export class EscuderiasComponent implements OnInit {
  public escuderiaList: escuderiaInterface[] = [];

  constructor(private escuderiasService: EscuderiasService, private router: Router) {}

  

  ngOnInit(): void {
    this.escuderiasService.getEscuderias().subscribe((data: any) => {
      this.escuderiaList = data;
    });
  }

  public catchEscuderia(escuderia:any){
    this.escuderiasService.editItem(escuderia)
    this.router.navigate(["/gestion"])
  }
}
