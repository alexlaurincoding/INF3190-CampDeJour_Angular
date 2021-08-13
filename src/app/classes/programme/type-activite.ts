import { ITypeActivite } from "../module-json/module-programme";

export class TypeActivite implements ITypeActivite {
  public id: string;
  public nom: string;
  public description: string;

  public constructor(
      id: string,
      nom: string, 
      description: string
  ) {
    this.id = id;
    this.nom = nom;
    this.description = description;
  }
  
}
