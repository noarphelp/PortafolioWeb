import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { PresentacionComponent } from "./pages/presentacion/presentacion.component";
import { FooterComponent } from "./components/footer/footer.component";
import { SobreMiComponent } from "./pages/sobre-mi/sobre-mi.component";
import { FormacionComponent } from "./pages/formacion/formacion.component";
import { ProyectoComponent } from "./pages/proyecto/proyecto.component";
import { ContactoComponent } from "./components/contacto/contacto.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, PresentacionComponent, FooterComponent, SobreMiComponent, FormacionComponent, ProyectoComponent, ContactoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyecto-angular';
}
