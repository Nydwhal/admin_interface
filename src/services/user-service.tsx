import User from "../models/user";

export default class UserService {
  static login(email: string, password: string) {
    return fetch(
      `http://${process.env.REACT_APP_HOUSE_FIBER_IP_ADRESS}:8000/api/auth/login/?email=${email}&password=${password}`,
      {
        method: "POST",
      }
    )
      .then((response) => response.json())
      .then((data) => data)
      .catch((error) => this.handleError(error));
  }

  static getUsers(): Promise<User[]> {
    return fetch(
      `http://${process.env.REACT_APP_HOUSE_FIBER_IP_ADRESS}:8000/api/admin/users`,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    )
      .then((response) => response.json())
      .catch((error) => this.handleError(error));
  }

  static getUser(id: string): Promise<User> {
    return fetch(
      `http://${process.env.REACT_APP_HOUSE_FIBER_IP_ADRESS}:8000/api/admin/user/?id=${id}`,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    )
      .then((response) => response.json())
      .catch((error) => this.handleError(error));
  }

  static editUser(
    id: string,
    email: string,
    password: string,
    amount: number
  ): Promise<User> {
    return fetch(
      `http://${process.env.REACT_APP_HOUSE_FIBER_IP_ADRESS}:8000/api/admin/user/edit/?id=${id}&email=${email}&password=${password}&amount=${amount}`,
      {
        method: "POST",
      }
    )
      .then((response) => response.json())
      .then((data) => (this.isEmpty(data) ? null : data))
      .catch((error) => this.handleError(error));
  }

  static deleteUser(id: string): Promise<void> {
    return fetch(
      `http://${process.env.REACT_APP_HOUSE_FIBER_IP_ADRESS}:8000/api/admin/user/delete/?id=${id}`,
      {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    ).then((response) => console.log(response));
  }

  static logout(): Promise<void> {
    return fetch(
      `http://${process.env.REACT_APP_HOUSE_FIBER_IP_ADRESS}:8000/api/admin/user/delete`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    ).then(() => localStorage.setItem("token", ""));
  }

  static handleError(error: Error): void {
    console.error(error);
  }

  static isEmpty(obj: object): boolean {
    return Object.keys(obj).length === 0;
  }
}
