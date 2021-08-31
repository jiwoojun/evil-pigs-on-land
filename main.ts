tiles.setTilemap(tilemap`level1`)
let fighter = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
let evil_pigs = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . 3 3 3 3 3 3 3 
    . . . . . . . . . 3 3 3 3 2 2 2 
    . . . . . . . . . 3 3 3 3 3 2 3 
    . . . . . . . . . 3 3 3 3 2 2 2 
    . . . . . . . . . 3 3 3 3 2 3 2 
    . . . . . . . . . 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 . . . . . . 
    3 3 3 3 3 3 3 3 3 3 . . . . . . 
    3 3 3 3 3 3 3 3 3 3 . . . . . . 
    3 3 3 3 3 3 3 3 3 3 . . . . . . 
    3 3 . . . . . . 3 3 . . . . . . 
    3 3 . . . . . . 3 3 . . . . . . 
    3 3 . . . . . . 3 3 . . . . . . 
    3 3 . . . . . . 3 3 . . . . . . 
    `, SpriteKind.Enemy)
tiles.placeOnRandomTile(fighter, assets.tile`myTile0`)
scene.cameraFollowSprite(fighter)
