export interface ToDo {
  id: number;
  task: string;
  complete: boolean;
}

export function generateToDos(): ToDo[] {
  return [
    {
      id: 1,
      task: 'Research more about PWA',
      complete: false
    },
    {
      id: 2,
      task: 'Attend NG PerformanceWeek event',
      complete: true
    },
    {
      id: 3,
      task: 'Cook my dinner after the event',
      complete: false
    },
    {
      id: 4,
      task: 'Visit *La vida de Li* youtube channel',
      complete: false
    },
  ];
}
