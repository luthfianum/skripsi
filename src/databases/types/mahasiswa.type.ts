export interface Mahasiswa {
  name: string;
  nim: string;
  gender: MahasiswaGender;
  studi: string;
  password: string;
  angkatan: string;
  kelahiran: string;
  provinsi: string;
}

export enum MahasiswaGender {
  LakiLaki = "L",
  Perempuan = "P",
}

