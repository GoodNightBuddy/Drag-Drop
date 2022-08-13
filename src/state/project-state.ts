//Project State Management

import { Project, ProjectStatus } from "../models/project.js";

//Listener Type
type Listener<T> = (items: T[]) => void

class State<T> {
  protected listeners: Listener<T>[] = [];

  addListener(listener: Listener<T>) {
    this.listeners.push(listener)
  }
}


export class ProjectState extends State<Project>{
  private projects: Project[] = [];
  private static instance: ProjectState;

  static getInstance() {
    if (!this.instance) {
      this.instance = new ProjectState()
    }
    return this.instance
  }

  addProject(title: string, description: string, people: number) {
    const newProject = new Project(
      title,
      description,
      people,
      ProjectStatus.Active
    )

    this.projects.push(newProject);
    this.updateListeners();
  }

  moveProject(projectId: string, newStatus: ProjectStatus) {
    const project = this.projects.find(prj => prj.id === projectId);

    if(project && project.status !== newStatus) {
      project.status = newStatus;
      this.updateListeners();
    }
  }

  private updateListeners() {
    for (const listener of this.listeners) {
      listener(this.projects.slice());
    }
  }
}

export const projectState = ProjectState.getInstance()