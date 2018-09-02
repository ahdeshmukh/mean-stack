export class TaskStatuses {
    NEW = new NewTaskStatusValues();
    INPROGRESS = new InProgressStatusValues();
    COMPLETE = new CompleteStatusValues();
}

class StatusValues {
    value: string;
    displayValue: string;
}

class NewTaskStatusValues extends StatusValues {
    value = 'new';
    displayValue = 'New';
}
class InProgressStatusValues extends StatusValues {
    value = 'in_progress';
    displayValue = 'In Progress'
}
class CompleteStatusValues extends StatusValues {
    value = 'complete';
    displayValue = 'Complete';
}