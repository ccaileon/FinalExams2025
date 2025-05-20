import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ejercicioExamen';

  mostrarAlerta() {
    Swal.fire({
      title: "Funciona!",
      icon: "success",
      draggable: true
    });
  }
}
