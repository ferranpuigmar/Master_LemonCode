import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
    private static readonly AUTH_STORAGE_KEY = 'isAuthenticated';
    private readonly userSignal = signal<{ username: string } | null>(this.getInitialUser());
    private readonly user = this.userSignal.asReadonly();
    private readonly authenticated = signal(this.getInitialAuthState());
    private readonly isAuthenticated = this.authenticated.asReadonly();

    login({username, password}: { username: string; password: string }): boolean {
        if(username !== 'master@lemoncode.net' || password !== '12345678') {
            return false;
        }

        this.authenticated.set(true);
        this.userSignal.set({ username });
        this.persistAuthState(true);
        this.persistUser({ username });
        return true;
    }

    logout(): void {
        this.authenticated.set(false);
        this.userSignal.set(null);
        this.persistAuthState(false);
        this.persistUser(null);
    }

    isLogged(): boolean {
        return this.authenticated();
    }

    getUsername(): string | null {
        return this.user()?.username ?? '';
    }

    private getInitialAuthState(): boolean {
        try {
            return localStorage.getItem(AuthService.AUTH_STORAGE_KEY) === 'true';
        } catch {
            return false;
        }
    }

    private getInitialUser(): { username: string } | null {
        if (!this.getInitialAuthState()) {
            return null;
        }

        // In a real application, you would retrieve the user information from a secure source
        return { username: 'master@lemoncode.net' };
    }


    private persistAuthState(isAuthenticated: boolean): void {
        localStorage.setItem(AuthService.AUTH_STORAGE_KEY, String(isAuthenticated));
    }

    private persistUser(user: { username: string } | null): void {
        if (user) {
            localStorage.setItem('authUser', JSON.stringify(user));
        } else {
            localStorage.removeItem('authUser');
        }
    }
}
