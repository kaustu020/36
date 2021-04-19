class Form{
    constructor(){

    }

    display(){
        var title=createElement("h1")
        title.html("LET'S RACE")
        title.position(130,0)
        var input=createInput("NAME")
        input.position(130,160)
        var button=createButton("LET'S SUBMIT")
        button.position(250,200)
        var greeting=createElement("h3")
        button.mousePressed(function(){
            input.hide()
            button.hide()
            var name=input.value()
            playerCount+=1
            player.update(name)
            player.updateCount(playerCount)
           greeting.html("WELCOME TO RACE "+name)
           greeting.position(130,160)
        })
    }
}