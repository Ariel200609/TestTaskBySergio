export class Task {

  constructor(
    
    protected tarea: string,
    protected cumplida: boolean,
    protected id: string = ""
  ) {}



  // Getter y Setter para string
  public getId(): string {
    return this.id;
  }

  public setId(id: string): void {
    this.id = id;
  }

  // Getter y Setter para tarea
  public getTarea(): string {
    return this.tarea;
  }

  public setTarea(tarea: string): void {
    this.tarea = tarea;
  }

  // Getter y Setter para cumplstringa
  public isCumplido(): boolean {
    return this.cumplida;
  }

  public setCumplido(cumplido: boolean): void {
    this.cumplida = cumplido;
  }



}
