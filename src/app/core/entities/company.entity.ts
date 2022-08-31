export interface CompanyEntity {
  Uuid: string;
  name: string;
  owner: string;
  createdBy: string;
  createdDate: string;

  toJson(): void;
}
