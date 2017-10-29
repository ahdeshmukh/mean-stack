export class MyError extends Error {
  constructor(message) {
    super();
    this.name = 'MyError';
    this.message = message;
  }
}