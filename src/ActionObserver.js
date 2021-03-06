let position = [0,0]
let observer = null

function emitChange() {
  observer(position)
  console.log('emit change')
}

export function observe(o) {
  if (observer) {
    throw new Error('Multiple observers not implemented.')
  }

  observer = o
  emitChange()
}

export function moveItem(x,y) {
	console.log(x,y)
	position=[x,y]
	emitChange()
}