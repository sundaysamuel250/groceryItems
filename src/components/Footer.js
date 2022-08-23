import React from 'react'

function Flooter({length}) {
	// const today = new Date()
  return (
	<footer className='footer'>
		<p>{length} List {length === 1 ? "item"  : "items"}</p>
		{/* <p>Copyright &copy {today.getFullYear()}</p> */}
	</footer>
  )
}

export default Flooter