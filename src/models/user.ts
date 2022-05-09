export default class User {
  id: number;
  email: string;
  password: string;
  amount: number;
  updated_at: string;
  created_at: string;

  constructor(
    id: number,
    email: string,
    password: string,
    amount: number,
    updated_at: string,
    created_at: string
  ) {
    this.id = id;
    this.email = email;
    this.password = password;
    this.amount = amount;
    this.updated_at = updated_at;
    this.created_at = created_at;
  }
}
