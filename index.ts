interface IStartup {
    nome: string;
    settoreFocus: string;
    descrizione: string;
    prodottiServiziOfferti: string[];
    riceviIncentivo(incentivo: IIncentivo): void;
  }
  
  interface IIncentivo {
    codiceIdentificativo: string;
    descrizione: string;
    valoreIncentivo: number;
    criteriEleggibilita: string;
    assegnaAStartup(startup: IStartup): void;
  }
  
  interface ICittadino {
    nome: string;
    cognome: string;
    eta: number;
    interessiSportivi: string[];
    partecipaAttivita(startup: IStartup): void;
  }
   
  class Startup implements IStartup {
    nome: string;
    settoreFocus: string;
    descrizione: string;
    prodottiServiziOfferti: string[];
    incentiviRicevuti: IIncentivo[] = [];
  
    constructor(nome: string, settoreFocus: string, descrizione: string, prodottiServiziOfferti: string[]) {
      this.nome = nome;
      this.settoreFocus = settoreFocus;
      this.descrizione = descrizione;
      this.prodottiServiziOfferti = prodottiServiziOfferti;
    }
  
    riceviIncentivo(incentivo: IIncentivo): void {
      this.incentiviRicevuti.push(incentivo);
      console.log(`La startup ${this.nome} ha ricevuto l'incentivo: ${incentivo.descrizione}`);
    }
  }
  
  class Incentivo implements IIncentivo {
    codiceIdentificativo: string;
    descrizione: string;
    valoreIncentivo: number;
    criteriEleggibilita: string;
  
    constructor(codiceIdentificativo: string, descrizione: string, valoreIncentivo: number, criteriEleggibilita: string) {
      this.codiceIdentificativo = codiceIdentificativo;
      this.descrizione = descrizione;
      this.valoreIncentivo = valoreIncentivo;
      this.criteriEleggibilita = criteriEleggibilita;
    }
  
    assegnaAStartup(startup: IStartup): void {
      startup.riceviIncentivo(this);
      console.log(`L'incentivo ${this.descrizione} è stato assegnato a ${startup.nome}`);
    }
  }
  
  class Cittadino implements ICittadino {
    nome: string;
    cognome: string;
    eta: number;
    interessiSportivi: string[];
  
    constructor(nome: string, cognome: string, eta: number, interessiSportivi: string[]) {
      this.nome = nome;
      this.cognome = cognome;
      this.eta = eta;
      this.interessiSportivi = interessiSportivi;
    }
  
    partecipaAttivita(startup: IStartup): void {
      console.log(`${this.nome} ${this.cognome} partecipa alle attività di ${startup.nome}`);
    }
  }
  
  const startup1 = new Startup(
    "FitTech",
    "app per il fitness",
    "Sviluppiamo app innovative per migliorare la performance fisica",
    ["App di tracciamento fitness", "Servizi personalizzati per l'allenamento"]
  );
  
  const startup2 = new Startup(
    "WearableSports",
    "tecnologie wearable",
    "Progettiamo dispositivi indossabili per monitorare l'attività fisica",
    ["Smartwatch per il fitness", "Sensori biometrici"]
  );
  
  const incentivo1 = new Incentivo(
    "INC001",
    "Incentivo per tecnologie fitness",
    5000,
    "Rivolto a startup nel settore delle app fitness"
  );
  
  const incentivo2 = new Incentivo(
    "INC002",
    "Incentivo per tecnologie wearable",
    10000,
    "Riservato a startup che sviluppano dispositivi wearable"
  );
  
  const cittadino1 = new Cittadino("Luca", "Rossi", 30, ["corsa", "palestra"]);
  const cittadino2 = new Cittadino("Maria", "Bianchi", 25, ["yoga", "nuoto"]);
  
  incentivo1.assegnaAStartup(startup1);
  incentivo2.assegnaAStartup(startup2);
  
  cittadino1.partecipaAttivita(startup1);
  cittadino2.partecipaAttivita(startup2);