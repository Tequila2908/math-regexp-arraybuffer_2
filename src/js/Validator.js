export default class Validator {
  constructor(username) {
    this.username = username;
  }

  validateUsername() {
    return ((this.username.search(/^([a-z]+[\d_-]*)*([a-z]$)/i) !== -1) && (this.username.search(/\d{4}/) === -1));
  }
}
