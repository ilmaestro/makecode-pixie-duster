sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.disintegrate, 500)
    info.changeScoreBy(10)
    music.powerUp.playUntilDone()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    pixieDust = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
5 . . 5 . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . 5 . . . . . . 5 . . 
. . 5 . . 5 . . 5 . . . . f . . 
. . f . . . . . f . . 5 . . . . 
. . . . . . 5 . 5 . . . . . . . 
. . . . 5 . . . . . . . . 5 . . 
. . 5 . . . . . . 5 . . . . . . 
. . . . . 5 . 5 . . . . 5 . . . 
. . . . 5 f . . 5 . . . f . . . 
. . . . . . 5 . . . . . 5 . . . 
. . . 5 . . f . 5 . . . . . . . 
. . . . . . . . f . . . . 5 . . 
. . . . . . 5 . . . 5 . . . . . 
`, fairy, 0, 100)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    otherSprite.startEffect(effects.spray, 500)
    info.changeLifeBy(-1)
    music.powerDown.playUntilDone()
})
let goblin: Sprite = null
let pixieDust: Sprite = null
let fairy: Sprite = null
scene.setBackgroundColor(9)
scene.setBackgroundImage(sprites.builtin.forestBackground)
fairy = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . 2 2 2 . . . . . . . 
. . f f . 2 d f d . . . . . . . 
. f f f f 2 d d d . f f f f . . 
. f 6 6 f 2 d d f f f 6 6 f . . 
. f 6 d 3 3 7 7 7 3 6 6 6 f f . 
. f 7 6 6 f 7 7 7 3 d 6 6 6 f . 
. f f f f 9 9 7 7 f 6 6 6 6 f . 
. . f f 9 9 9 9 9 f f 7 f f f . 
. . . . 9 9 9 9 9 . f f f . . . 
. . . . a a 9 9 9 . . . . . . . 
. . . . a . . a . . . . . . . . 
. . . e d . . a d . . . . . . . 
. . e e . . . . e . . . . . . . 
. . . . . . . . e e . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
fairy.setFlag(SpriteFlag.StayInScreen, true)
controller.moveSprite(fairy, 100, 100)
info.setLife(3)
info.setScore(0)
music.playMelody("C5 A B G A F G E ", 200)
game.onUpdateInterval(Math.randomRange(2000, 10000), function () {
    goblin = sprites.create(img`
. . . . 7 7 7 7 7 . e . . . . . 
. . e 7 7 7 7 7 7 e e e . . . . 
. . e 7 f 7 7 f 7 e e e . . . . 
. . e 7 7 7 7 7 7 e e e . . b b 
. . . 7 f f f f 7 7 . . . . a b 
. . . 7 7 7 7 7 7 7 . . . a a b 
7 7 . . 7 7 7 7 7 . . . . a a . 
7 7 7 7 7 7 7 7 7 7 7 7 7 a . . 
. 7 7 7 7 7 7 7 7 7 7 7 7 a . . 
. . . 7 7 7 7 7 7 7 7 7 . . . . 
. . . 7 7 7 7 7 7 7 . . . . . . 
. . 7 7 7 7 7 7 7 7 . . . . . . 
. . 7 7 7 7 7 7 7 7 . . . . . . 
. . 7 7 7 7 7 7 7 7 . . . . . . 
. . 7 7 . . . 7 7 . . . . . . . 
. 7 7 7 . . 7 7 7 . . . . . . . 
`, SpriteKind.Enemy)
    goblin.setVelocity(-100, Math.randomRange(0, -50))
    goblin.setPosition(180, 100)
})
