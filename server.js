 var teams= [{
                                name: 'Team 1',
                                numMembers: 6,
                                teamArea: 'Release Verification'
                            }, {
                                name: 'Team 2',
                                numMembers: 4,
                                teamArea: 'Fault Management'
                            }, {
                                name: 'Team 3',
                                numMembers: 8,
                                teamArea: 'Performance Management'
                           }, {
                                name: 'Team 4',
                                numMembers: 7,
                                teamArea: 'UI SDK'
                           },{
                                name: 'Team 5',
                                numMembers: 5,
                                teamArea: 'Configuration Management'
                           },{
                                name: 'Team 6',
                                numMembers: 8,
                                teamArea: 'Customer Support'
                           },{
                                name: 'Team 7',
                                numMembers: 7,
                                teamArea: 'Product Introduction'
                           }]


var teamDetailsList=[];
var numTeams=teams.length;
for (i=0; i <numTeams; i++){
        var teamDetails= {name: teams[i].name, numMembers: teams[i].numMembers, teamArea: teams[i].teamArea};
        teamDetailsList.push(teamDetails);
//        console.log(teamDetailsList[0])
//        console.log(teamDetailsList.length)

console.log(teamDetailsList)
var data;

}




module.exports = function (app) {

    app.get("/teamNames", function (req, res) {
        res.set('Content-Type', 'application/json');
        res.send(teamDetailsList);
    });


    app.post("/addTeam", function (req, res){
        res.set('Content-Type', 'application/json');
        res.send(data);
    });



};

