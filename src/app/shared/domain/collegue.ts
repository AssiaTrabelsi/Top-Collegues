export class Collegue {
  constructor(
    private _nom: string,
    private _urlImage: string,
    public score: number
  ) {}

  get nom(): string {
    return this._nom;
  }

  set nom(nom1: string) {
    this._nom = nom1;
  }

  get urlImage(): string {
    return this._urlImage;
  }

  set urlImage(nom1: string) {
    this._urlImage = nom1;
  }
}
