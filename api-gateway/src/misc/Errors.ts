export class StatusError extends Error {
  status: number;
  constructor(code: number, message: string) {
    super(message);
    this.status = code;
  }
}
