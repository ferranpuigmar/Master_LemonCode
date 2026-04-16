import { Injectable, signal } from '@angular/core';

interface User {
    username: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
    private static readonly AUTH_STORAGE_KEY = 'isAuthenticated';
    private static readonly USER_STORAGE_KEY = 'authUser';

    private readonly userSignal = signal<User | null>(this.getInitialUser());
    private readonly user = this.userSignal.asReadonly();

    private readonly authenticatedSignal = signal(this.getInitialAuthState());
    private readonly authenticated = this.authenticatedSignal.asReadonly();

    login({username, password}: { username: string; password: string }): boolean {
        if(username !== 'master@lemoncode.net' || password !== '12345678') {
            return false;
        }

        this.authenticatedSignal.set(true);
        this.userSignal.set({username});
        this.persistAuthState(true);
        this.persistUser({username});
        return true;
    }

    logout(): void {
        this.authenticatedSignal.set(false);
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

    private getInitialUser(): User | null {
        if (!this.getInitialAuthState()) {
            return null;
        }

        const persistedUser = this.getPersistedUser();
        return persistedUser ? { username: persistedUser.username } : null;
    }

    private persistAuthState(isAuthenticated: boolean): void {
        localStorage.setItem(AuthService.AUTH_STORAGE_KEY, String(isAuthenticated));
    }

    private persistUser(user: User | null): void {
        if (user) {
            localStorage.setItem(AuthService.USER_STORAGE_KEY, JSON.stringify(user));
        } else {
            localStorage.removeItem(AuthService.USER_STORAGE_KEY);
        }
    }

    private getPersistedUser(): User | null {
        try {
            const userData = localStorage.getItem(AuthService.USER_STORAGE_KEY);
            return userData ? JSON.parse(userData) : null;
        } catch {
            return null;
        }
    }
}
