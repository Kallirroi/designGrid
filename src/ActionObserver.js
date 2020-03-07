let position = [0,0]
let observer = null

function emitChange() {
  observer(position)
}

export function observe(o) {
  if (observer) {
    throw new Error('Multiple observers not implemented.')
  }

  observer = o
  emitChange()
}

export function moveItem(x,y) {
	position=[x,y]
	emitChange()
}