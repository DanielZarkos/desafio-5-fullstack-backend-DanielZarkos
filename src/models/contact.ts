export default class Contact {
  public constructor(
    name?: string,
    email?: string,
    phone?: string,
    entry?: string
  ) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.entry = entry;
  }
  public name?: string;
  public email?: string;
  public phone?: string;
  public entry?: string;
}
