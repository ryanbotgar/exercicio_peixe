var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,

    scene: {
        preload: preload,
        create: create,
        update: update
    }
}; 

var game = new Phaser.Game(config);

var fishy;

function preload () {
    this.load.image('sea','assets/bg_azul-claro.png');
    this.load.image('logo','assets/logo-inteli_branco.png');
    this.load.image('fish','assets/peixes/peixinho_rosa.png');
}

function create() {
    this.add.image(400, 300, 'sea');
    this.add.image(400, 525, 'logo').setScale(0.5);
    fishy = this.add.image(400, 300, 'fish');

    fishy.setFlip(true, false);
}

function update() {
    fishy.x = this.input.x;
    fishy.y = this.input.y;
}
