import k from './kaboom'
import Title from './scenes/Title'
import Game from './scenes/Game'

// all scenes are to be "resgistered" here

k.scene("title", Title)
k.scene("game", Game)

k.go("title")