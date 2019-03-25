// GUL Header Rain Effect

/* Constants */
var FONT_SIZE = 12;
var FONT_COLOR = "#bbb";
/* Global variables */
var canvas;
var context;
var ncolumns;
var characters = "01";
var columns = [];

window.onload = function(){
        canvas = document.getElementById("words-rain");
        init();
        draw(canvas, context, canvas.width, canvas.height);
}

/*This function initializes the canvas*/
function init(){
        if(canvas && canvas.getContext){
                context = canvas.getContext('2d');
                //Setting canvas dimensions
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
                //Converting the string into an array of single characters
                characters = characters.split("");
                //Setting text columns
                ncolumns = canvas.width/FONT_SIZE;
                for(var x = 0; x < ncolumns; x++){
                        columns[x] = 100; //Initial y-position
                }
        }else{ //Canvas unsupported code
                console.log("Sorry, it looks like your browser does not support canvas.");
        }
}

function draw(canvas, context, width, height){
        //Checking browser compatibility
        var character;
        this.context.fillStyle = "rgba(0,0,0,0.1)";
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.context.fillStyle = FONT_COLOR;
        this.context.font=FONT_SIZE+"px monospace"; //Default value: 10px Courier New
        //Drop action
        for(var i = 0; i < columns.length; i++){
                //Randomize character to print
                character = characters[Math.floor(Math.random()*characters.length)];
                this.context.fillText(character,i*FONT_SIZE,columns[i]*FONT_SIZE);
                //If character reaches the end of the canvas + sheet effect
                if(columns[i]*FONT_SIZE > this.canvas.height && Math.random() > 0.975)
                        columns[i] = 0;
                //Incrementing y
                columns[i]++;
        }
        setTimeout(draw, 1000/10, canvas, context, width, height); //Refresh canvas at 0.5fps
}
