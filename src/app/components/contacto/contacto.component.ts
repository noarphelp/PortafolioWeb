import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { environment } from '../../../environments/environment.prod';

@Component({
  selector: 'app-contacto',
  imports: [],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {

  enviado = false;
  error = false;

  constructor() {}

  toastMessage: string | null = null;
  toastType: 'success' | 'error' = 'success';

  onSubmit(e: Event) {
    e.preventDefault(); // evitar refresco de página
    const form = e.target as HTMLFormElement;

 console.log('Variables de EmailJS:', environment); // Verifica que se leen correctamente
    emailjs.sendForm(
 environment.emailServiceId,
      environment.emailTemplateId,
      form,
      environment.emailPublicKey
)
    .then(() => {
      this.showToast('✅ Tu mensaje ha sido enviado correctamente.', 'success');
      form.reset();
    })
    .catch(() => {
      console.error('Error EmailJS:', this.error); // <-- esto te ayudará a ver errores en producción
      this.showToast('❌ Ocurrió un error al enviar el mensaje.', 'error');
    });
  }

  showToast(message: string, type: 'success' | 'error') {
    this.toastMessage = message;
    this.toastType = type;

    // Oculta el toast después de 3 segundos
    setTimeout(() => {
      this.toastMessage = null;
    }, 3000);
  }
}
