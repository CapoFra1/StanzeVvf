export class User {
  constructor(
    public id: number,
    public username: string,
    public tipologia: number,
    private _token: string,
    private _expirationDate: number
  ) {}

  get token() {
    console.log(
      new Date(new Date().getTime()) > new Date(this._expirationDate * 1000)
    );
    if (
      !this._expirationDate ||
      new Date(new Date().getTime()) > new Date(this._expirationDate * 1000)
    ) {
      console.log('token null');
      return null;
    }
    return this._token;
  }
}
