import k from '../kaboom'

export default function Game () {

  k.add([
    text("Game!"),
    pos(width() / 2, height() / 2),
    origin("center")
  ])

  k.keyPress("escape", () => {
    k.go("title")
  })
}