import k from './kaboom'
import Title from './scenes/Title'
import Game from './scenes/Game'

k.loadSprite("tiles", "./tilemap.png", {
  sliceX: 20,
  sliceY: 20,
})

k.scene("title", Title)
k.scene("game", Game)

k.go("title")