var doctor1;
var doctor;
var covid19;
var covid191;
var medicalKits1;
var medicalKits;
var PPEKits;
var PPEKits1;
var backgroundImg;
var form;

function preload(){
backgroundImg = loadImage("images/background.JPEG")
covid191 = loadImage("images/Covid-19.JPEG")
doctor1 = loadImage("images/doctor.JPEG")
medicalKits1 = loadImage("images/medical kit.JPEG")
PPEKits1 = loadImage("images/ppe kit.JPEG")
}

function setup(){
createCanvas(displayWidth-50,displayHeight-150)
 doctor = createSprite(200,390);
 covid19 = createSprite(500,390);
 doctor.addImage(doctor1);
 covid19.addImage(covid191);
 form = new Form();
 form.display();
 
}

function draw(){
background(backgroundImg)
doctor.scale = 0.5;
covid19.scale = 0.5;
drawSprites();

}

function keyPressed(){
    if(keyCode ===37 ){
    doctor.velocityX=-1
    doctor.velocityY=0
    }
    if(keyCode ===39){
    doctor.velocityX=1
    doctor.velocityY=0

    }
    if(keyCode ===38 ){
    doctor.velocityY=-2
    doctor.velocityX=0

    }

    if(keyCode === 65){
        covid19.velocityX=-1
        covid19.velocityY=0
        }
        if(keyCode === 68){
        covid19.velocityX=1
        covid19.velocityY=0
    
        }
        if(keyCode ===87 ){
        covid19.velocityY=-2
        covid19.velocityX=0
    
        }
    

    if(keyCode === 32){
       medicalKits = createSprite(250,450);
       medicalKits.addImage (medicalKits1);
       medicalKits.x = doctor.x;
       medicalKits.lifetime = 200;
    }
       
    
}