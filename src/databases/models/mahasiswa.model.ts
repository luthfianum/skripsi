import { Model, Sequelize,DataTypes } from "sequelize";
import { Mahasiswa as MahasiswaProps, MahasiswaGender } from "../types/mahasiswa.type";

class Mahasiswa extends Model implements MahasiswaProps {
  public name!: string;
  public nim!: string;
  public gender!: MahasiswaGender;
  public studi!: string;
  public password!: string;
  public angkatan!: string;
  public kelahiran!: string;
  public provinsi!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly deletedAt!: Date;

  public static associations: {};

  public static initModel(sequelize: Sequelize): void {
    Mahasiswa.init(
      {
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        nim: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        gender: {
          type: DataTypes.ENUM,
          values: ["L", "P"],
          allowNull: false,
        },
        studi: {
          type: DataTypes.STRING,
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        angkatan: {
          type: DataTypes.STRING,
        },
        kelahiran: {
          type: DataTypes.STRING,
        },
        provinsi: {
          type: DataTypes.STRING,
        },
      },
      {
        sequelize,
        freezeTableName: true,
        timestamps: true,
        tableName: "mahasiswa",
        modelName: "mahasiswa",
      }
    )
  }

  public static associateModel(): void {
  }
  
  public static hashPassword(password: string): string {
    return password;
  }

  public static verifyPassword(password: string, hash: string): boolean {
    return password === hash;
  }
}