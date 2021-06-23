const fs = require('fs');

function create_ID(){
    var dt = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (dt + Math.random()*16)%16 | 0;
        dt = Math.floor(dt/16);
        return (c=='x' ? r :(r&0x3|0x8)).toString(16);
    });
    return uuid;
}

module.exports = app => {
    app.get('/tasks', (request, responce) => {
        try {
            fs.readFile('DB.json', (err, data) => {
                if (err) throw err;
                let tasks = JSON.parse(data);
                responce.send(tasks);
            })
        } catch (error) {
            console.log(error)            
        }
    });

    app.post('/tasks', (request, responce) => {      
        const content = request.body;
        try {
            let currentTasks = []
            fs.readFile('DB.json', (err, data) => {
                if (err) throw err;
                currentTasks = JSON.parse(data);
                const newTaks = {"id": create_ID(), "task": content.task}
                currentTasks.push(newTaks);
                console.log(currentTasks)
                fs.writeFile('DB.json', JSON.stringify(currentTasks), 'utf8', err => {
                    if (err) throw err;
                    responce.sendStatus(200);
                });
            });
        } catch (error) {
            console.log(error)            
        }
    });

    app.put('/tasks', (request, responce) => {
        const content = request.body;
        try {
            let currentTasks = []
            fs.readFile('DB.json', (err, data) => {
                if (err) throw err;
                currentTasks = JSON.parse(data);
                currentTasks.map(elem => {
                    if (elem.id == content.id) {
                        elem.task = content.task;
                    }
                });
                fs.writeFile('DB.json', JSON.stringify(currentTasks), 'utf8', err => {
                    if (err) throw err;
                    responce.sendStatus(200);
                });
            });
        } catch (error) {
            console.log(error);            
        }
    });

    app.delete('/tasks', (request, responce) => {
        const content = request.body;
        try {
            let currentTasks = []
            fs.readFile('DB.json', (err, data) => {
                if (err) throw err;
                currentTasks = JSON.parse(data);
                for (let index = 0; index < currentTasks.length; index++) {
                    if (content.id == currentTasks[index].id) {
                        currentTasks.splice(index, 1);
                    }
                }
                fs.writeFile('DB.json', JSON.stringify(currentTasks), 'utf8', err => {
                    if (err) throw err;
                    responce.sendStatus(200);
                });
            });
        } catch (error) {
            console.log(error);            
        }
    });
}