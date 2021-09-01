export interface ILogin {
  uuid: string;
  username: string;
  password: string;
  salt: string;
  md5: string;
  shal: string;
  sha256: string;
}
