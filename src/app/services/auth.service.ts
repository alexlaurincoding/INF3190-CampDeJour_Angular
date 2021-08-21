
import fichesParentsJson from "src/data/fiches-parents";
import gabaritProgrammeJson from "src/data/gabarit-programmes";
import sessionsJson from "src/data/sessions";
import inscriptionParentJson from "src/data/inscription-parent";
import typeActivitesJson from "src/data/activite-type";
import activitesJson from "src/data/activites";
import blocActivitesJson from "src/data/activite-bloc";
import programmesJson from "src/data/programmes";
import horrairesProgrammeJson from "src/data/programme-horraire";

import { IParent, IInscriptionParent } from "../classes/interface-json/interface-parent";
import { IActivite, IBlocActivite, IGabaritProgramme, IHorrairePrograme, IProgramme, ISession, ITypeActivite } from "../classes/interface-json/interface-session";
import { Join } from "../classes/methode-join";

let parents: IParent[] = fichesParentsJson;
let inscriptionsParents: IInscriptionParent[] = inscriptionParentJson;

export class AuthService {
  isAuth: boolean = false;
  isAdmin: boolean = false;
  indiceParent: number = 0;

  parent!: IParent;
  inscriptionsParents!: IInscriptionParent[];
  gabaritProgrammes: IGabaritProgramme[] = gabaritProgrammeJson;
  sessions: ISession[] = sessionsJson;
  typeActivites!: ITypeActivite[];
  activites!: IActivite[];
  blocActivites!: IBlocActivite[];
  programmes: IProgramme[] = programmesJson;
  horrairesProgrammes!: IHorrairePrograme[];

  signIn(username: string, password: string) {
    if (username == "admin" && password == "admin!") {
      this.isAuth = true;
      this.isAdmin = true;
      this.inscriptionsParents = inscriptionsParents;
      console.log(JSON.stringify(typeActivitesJson));
      this.typeActivites = typeActivitesJson;
      this.activites = activitesJson;
      this.blocActivites = blocActivitesJson;
      this.horrairesProgrammes = horrairesProgrammeJson;
    } else {
      if(!this.verifyPassword(username, password)){
        //Connexion refusé, rediriger avec message d'erreur
        console.log("connexion refusee");
      }else{
        this.logParent(username);
        this.isAuth = true;
      }
    }
  }

  signOut() {
    this.isAuth = false;
    this.isAdmin = false;
  }

  verifyPassword(username: string, password: string): boolean{
    let authentifie = false;
    for(let i = 0; i < parents.length; i++){
      if(parents[i].username == username && parents[i].password == password){
        authentifie = true;
      }
    }
    return authentifie;
  }

  logParent(username: string){
    for(let i = 0; i < parents.length; i++) {
      if(parents[i].username == username){
          this.indiceParent = i;
          this.parent = parents[i];
      }
    }
    this.inscriptionsParents = Join.getInscriptionsParents(inscriptionsParents, this.parent.id)
  }



}
