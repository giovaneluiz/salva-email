export class Doctor {
    constructor(
        readonly numCRM: string,
        readonly email: string
    ) {
        this.validate();
    }

    private validate(): void {
        if (!this.isValidEmail(this.email)) {
            throw new Error('Invalid email');
        }
    }

    private isValidEmail(email: string): boolean {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
}