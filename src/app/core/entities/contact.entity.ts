export interface ContactEntity {
  id: string;
  uid: string;
  name: string;
  lastName: string;
  email: string;
  telefono: string;
  movile: string;
  type: string;
  createBy: string;

  toJson(): void;
}
