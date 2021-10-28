import k from '../kaboom'

export default function Title () {

  k.add([
    sprite("ghostie"),
    pos(80, 40),
    scale(2)
  ])

  k.add([
    text("Ghostie"),
    pos(width() / 2, height() / 2),
    origin("center")
  ])

  k.add([
    text("By Shujaat Azim", {
      size: 28
    }),
    pos(width() / 2, height() / 1.5),
    origin("center")
  ])

  k.keyPress("space", () => {
    k.go("game")
  })
}