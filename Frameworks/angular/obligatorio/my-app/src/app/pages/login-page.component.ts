import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <section>
      <h1>Login</h1>
      <form class="form" autocomplete="off" [formGroup]="loginForm" (ngSubmit)="login()">
        <label>
          Usuario
          <input type="email" placeholder="Introduce tu usuario" formControlName="username" />
        </label>
        @if (username.invalid && (username.dirty || username.touched)) {
          <p class="error">Introduce un email válido.</p>
        }

        <label>
          Contraseña
          <input type="password" placeholder="Introduce tu contraseña" formControlName="password" />
        </label>
        @if (password.invalid && (password.dirty || password.touched)) {
          <p class="error">La contraseña es obligatoria (mínimo 8 caracteres).</p>
        }

        @if (loginError) {
          <p class="error">Credenciales incorrectas.</p>
        }

        <button type="submit" [disabled]="loginForm.invalid">Entrar</button>
      </form>
    </section>
  `,
  styles: [
    `
      .form {
        display: grid;
        gap: 0.8rem;
        max-width: 360px;
      }

      label {
        display: grid;
        gap: 0.35rem;
        font-weight: 500;
      }

      input {
        border: 1px solid #ced4da;
        border-radius: 8px;
        padding: 0.5rem 0.65rem;
      }

      .error {
        margin: -0.3rem 0 0;
        color: #c92a2a;
        font-size: 0.85rem;
      }

      button {
        justify-self: start;
        border: 0;
        background: var(--primary-color);
        color: var(--text-color);
        border-radius: var(--border-radius);
        padding: 0.55rem 1rem;
        cursor: pointer;

        &:hover:not(:disabled) {
          background: var(--primary-color-hover);
        }
      }

      button:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }
    `
  ]
})
export class LoginPageComponent {
  loginError = false;

  loginForm = this.formBuilder.nonNullable.group({
    username: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]]
  });

  readonly username = this.loginForm.controls.username;
  readonly password = this.loginForm.controls.password;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly authService: AuthService,
    private readonly router: Router
  ) {}

  login(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    this.loginError = false;

    const isLogged = this.authService.login(this.loginForm.getRawValue());

    if (isLogged) {
      this.router.navigateByUrl('/dashboard');
      return;
    }

    this.loginError = true;
  }
}
