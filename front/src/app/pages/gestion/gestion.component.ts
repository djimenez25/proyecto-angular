import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EscuderiasService } from 'src/app/services/escuderias.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.scss'],
})
export class GestionComponent implements OnInit {
  public escuderiaForm!: FormGroup;
  public newEscuderia = this.escuderiasService.escuderiaData;
  public escuderiaID = this.escuderiasService.escuderiaData.id;

  constructor(
    private formBuilder: FormBuilder,
    private escuderiasService: EscuderiasService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.escuderiasService.clearEscuderia();

    this.escuderiaForm = this.formBuilder.group({
      name: [this.newEscuderia.name, [Validators.required]],
      pilots: [this.newEscuderia.pilots, [Validators.required]],
      car: [this.newEscuderia.car, [Validators.required]],
      country: [this.newEscuderia.country, [Validators.required]],
    });

    this.escuderiaForm.valueChanges.subscribe((changes) => {
      this.newEscuderia = changes;
    });
  }

  public onSubmit() {
    if (this.escuderiaID !== '') {
      this.escuderiasService
        .editEscuderia(this.escuderiaID, this.newEscuderia)
        .subscribe();
      Swal.fire('Escuderia editada correctamente');
    } else {
      this.escuderiasService.postEscuderias(this.newEscuderia).subscribe();
      Swal.fire('Escuderia creada correctamente');
    }

    this.escuderiaForm.reset();
    this.router.navigate(['/escuderias']);
  }

  public delete() {
    Swal.fire({
      title: '¿Estás seguro?',
      text: '¡Vas a perder la escuderia definitivamente!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, borrala',
    }).then((result) => {
      if (result.isConfirmed) {
        this.escuderiasService.deleteEscuderia(this.escuderiaID).subscribe();
        this.escuderiaForm.reset();
        Swal.fire('Borrada', 'Tu escuderia ha sido borrada', 'success');
        this.router.navigate(['/escuderias']);
      }
    });
  }
}
