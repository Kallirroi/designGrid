let position = [0,0]
let observer = null

function emitChange() {
  observer(position)
}

export function observe(o) {
  console.log('called observer')
  if (observer) {
    throw new Error('Multiple observers not implemented.')
  }

  observer = o
  emitChange()
}

export function moveItem(x,y) {
	console.log('called moveItem')
	position=[x,y]
	emitChange()
}