<template>
    <div>
        <h1>Entrez le nom des joueurs</h1>
        <form v-on:submit.prevent="addPlayer()">
            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Nom du joueur" aria-label="Nom du joueur" aria-describedby="button-addon2" v-model="joueurInput">
                <button class="btn btn-success" type="submit" id="button-addon2">ajouter un joueur</button>
            </div>
        </form>
        <div class="playerContainer">
            <div v-for="participant in joueurs" :key="participant">
                <button type="button" class="btn btn-dark" @click="deletePlayer(participant)">{{participant}}</button>
            </div>
        </div>
        <br>
        <div>
            <h1>Répartition des joueurs</h1>
            <button class="btn btn-success" @click="dispatchPlayers()">Créer les équipes</button>
            <div class="playerRoles">
                <table class="table table-primary">
                    <thead>
                        <th colspan="2">Equipe 1</th>
                    </thead>
                    <tbody>
                        <tr>
                            <th>TOP</th>
                            <td>{{this.equipes.equipe1top}}</td>
                        </tr>
                        <tr>
                            <th>MID</th>
                            <td>{{this.equipes.equipe1mid}}</td>
                        </tr>
                        <tr>
                            <th>BOT</th>
                            <td>{{this.equipes.equipe1bot}}</td>
                        </tr>
                    </tbody>
                </table>
                <table class="table table-danger">
                    <thead>
                        <th colspan="2">Equipe 2</th>
                    </thead>
                    <tbody>
                        <tr>
                            <th>TOP</th>
                            <td>{{this.equipes.equipe2top}}</td>
                        </tr>
                        <tr>
                            <th>MID</th>
                            <td>{{this.equipes.equipe2mid}}</td>
                        </tr>
                        <tr>
                            <th>BOT</th>
                            <td>{{this.equipes.equipe2bot}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:"custom-game",
        data(){
            return{
                joueurInput:'',
                joueurs:[],
                equipes:{
                    equipe1top:'-',
                    equipe1mid:'-',
                    equipe1bot:'-',
                    equipe2top:'-',
                    equipe2mid:'-',
                    equipe2bot:'-'
                }
            }
        },
        methods:{
            addPlayer(){
                if (this.joueurInput != '') {
                    this.joueurs.push(this.joueurInput);
                    this.joueurInput = '';
                }
            },
            deletePlayer(player){
                this.joueurs.splice(this.joueurs.indexOf(player),1);
            },
            dispatchPlayers(){
                const tempPlayers = this.joueurs.map((x)=>x);
                const tempRoles=[
                    "top1",
                    "mid1",
                    "bot1",
                    "top2",
                    "mid2",
                    "bot2"
                ];
                while (tempPlayers.length>=1) {
                    var randomPlayer = tempPlayers[Math.floor(Math.random() * tempPlayers.length)];
                    var randomRole = tempRoles[Math.floor(Math.random() * tempRoles.length)];
                    this.assignRole(randomPlayer,randomRole);
                    tempPlayers.splice(tempPlayers.indexOf(randomPlayer),1);
                    tempRoles.splice(tempRoles.indexOf(randomRole),1);
                }
            },
            assignRole(player, role){
                switch (role) {
                    case "top1":
                        this.equipes.equipe1top = player;
                        console.log(player,role);
                        break;
                    case "mid1":
                        this.equipes.equipe1mid = player;
                        console.log(player,role);
                        break;
                    case "bot1":
                        this.equipes.equipe1bot = player;
                        console.log(player,role);
                        break;
                    case "top2":
                        this.equipes.equipe2top = player;
                        console.log(player,role);
                        break;
                    case "mid2":
                        this.equipes.equipe2mid = player;
                        console.log(player,role);
                        break;
                    case "bot2":
                        this.equipes.equipe2bot = player;
                        console.log(player,role);
                        break;
                    default:
                        console.log("erreur lors de l'attribution des rôles");
                        break;
                }
            }
        }
        
    }
</script>

<style scoped>
    .playerContainer{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
    }
    .playerRoles{
        display: flex;
        flex-direction: row;
    }
</style>
