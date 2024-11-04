export default class Building {
  constructor(sqft) {
    this._sqft = sqft;

    if (
      this.evacuationWarningMessage
        === Building.prototype.evacuationWarningMessage
      && new.target !== Building
    ) {
      throw new Error(
        'Class extending Building must override evacuationWarningMessage',
      );
    }
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(sqft) {
    this._sqft = sqft;
  }

  static evacuationWarningMessage() {
    console.log('Dont do anything');
  }
}
