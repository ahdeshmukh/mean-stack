import { AdTodosNewTaskModule } from './ad-todos-new-task.module';

describe('AdTodosNewTaskModule', () => {
  let adTodosNewTaskModule: AdTodosNewTaskModule;

  beforeEach(() => {
    adTodosNewTaskModule = new AdTodosNewTaskModule();
  });

  it('should create an instance', () => {
    expect(adTodosNewTaskModule).toBeTruthy();
  });
});
