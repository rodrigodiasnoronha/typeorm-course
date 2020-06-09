export class AppError extends Error {
    public message: string;
    public statusCode: number;
    public code: string;

    constructor(message: string, statusCode: number, code: string) {
        super();
        this.message = message;
        this.statusCode = statusCode;
        this.code = code;
    }
}
