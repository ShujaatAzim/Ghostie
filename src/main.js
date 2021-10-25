import k from './kaboom'
import Title from './scenes/Title'
import Game from './scenes/Game'

k.scene("title", Title)
k.scene("game", Game)

k.go("title")