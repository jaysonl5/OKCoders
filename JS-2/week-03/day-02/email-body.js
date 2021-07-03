const scrumData = [
    {
        
            dev: 'Jayson',
            tasks: [
                {
                    taskName: 'Bug',
                    taskStatus: 'Complete'
                },
                {
                    taskName: 'Refactor dashboard module',
                    taskStatus: 'Active'
                },
                {
                    taskName: 'Complete pet food module',
                    taskStatus: 'Active'
                }
            ]
    },
    {
        dev: 'Woody',
        tasks: [
            {
                taskName: 'Bug',
                taskStatus: 'Active'
            }, 
            {
                taskName: 'Refactor login page',
                taskStatus: 'Active'
            },
            {
                taskName: 'Change button color',
                taskStatus: 'Complete'
            }
        ]
    }
]

function getTasksByStatus(taskList, status){

    const tasks = taskList.filter(task => task.taskStatus == status)
    const taskNames = tasks.map(task => task.taskName)
    taskNameWithHyphen = taskNames.map(name => '- ' + name)
    const tasksText = taskNameWithHyphen.join('\n')

    return tasksText;
}

function makeEmailTextForAllDevs(scrumData){
    const developerTexts = scrumData.map(makeEmailTextFromDeveloper)
    return developerTexts.join('\n ================')
}


function makeEmailTextFromDeveloper(scrumData){

    const devName = scrumData.dev
    const completedTasks = getTasksByStatus(scrumData.tasks, 'Complete');
    const activeTasks = getTasksByStatus(scrumData.tasks, 'Active');

    return emailTemplate = `
    
Dev: ${devName}

Active Tasks:
${activeTasks}

Completed Tasks:
${completedTasks}
    `
}



const email = makeEmailTextForAllDevs(scrumData)

console.log(email);



