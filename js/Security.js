class Security {

    constructor(){

        this.access1 = createInput("Code1")
        this.access1.position(100,90);
        this.access1.style('background', 'red');  

        this.button1 = createButton('Check');
        this.button1.position(100,120);
        this.button1.style('background', 'yellow');    

        this.access2 = createInput("Code1")
        this.access2.position(700,190);
        this.access2.style('background', 'green');  

        this.button2 = createButton('Check');
        this.button2.position(700,220);
        this.button2.style('background', 'yellow');

        this.access3 = createInput("Code1")
        this.access3.position(100,290);
        this.access3.style('background', 'yellow');  

        //Debug the code to create the third button.
        this.button3 = createButton('Check');
        this.button3.position(100,320);
        this.button3.style('background', 'red'); 

    }

    display(){

        this.button1.mousePressed(() => {
            if(system.authenticate(accessCode1,this.access1.value())){
                this.button1.hide();
                this.access1.hide();
                score++;
            }
        });

        this.button2.mousePressed(() => {
            if(system.authenticate(accessCode2,this.access2.value())){
                this.button2.hide();
                this.access2.hide();
                score++;
            }
        });

        // On mousePressed, check the input condition. 
        this.button3.mousePressed(() => {
            if(system.authenticate(accessCode3,this.access3.value())){
                this.button3.hide();
                this.access3.hide();
                score++;
            }
        });

    }
}