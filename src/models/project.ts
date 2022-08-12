//Projec Type
export enum ProjectStatus { Active, Finished }

export class Project {
  id: string
  constructor(
    public title: string,
    public description: string,
    public people: number,
    public status: ProjectStatus
  ) {
    this.id = Math.random().toString()
  }
}
