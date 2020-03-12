import React from 'react'
import { Collapse } from 'antd';
import '../styles/Information.css'

function Information() {
	const { Panel } = Collapse;
	return (
		<div className='Information'>
			<h1> Grids playground</h1>
			<h3> An interactive supplement to the book <a href="https://www.goodreads.com/book/show/350964.Grid_Systems"> Grid Systems</a> by Kimberly Elam.</h3>
			<p><em>*better viewed on Chrome.</em></p>
			<Collapse>
			  	<Panel showArrow={false} header="WHAT IS THIS?" key="1" className="site-collapse-custom-panel">
			  		<p>This is an interactive prototype for rapid grid design explorations.</p>
			      	<p>From Kimberly Elam's book:</p>  <em>A 3x3 structure is the format for exploring texture and composition. This simple grid system provides a wide range of variation for exploration within a controlled system of organization. Six rectangles are the compositional elements. A small circle is also used to provide an element for balance, visual control of the composition and contrast.</em>
			    </Panel>

			  	<Panel showArrow={false} header="IDEAS" key="2" className="site-collapse-custom-panel">
			    	<p>Here are some variations you can explore, starting by focusing on the placement of the long rectangle. </p>
					<li>• Long rectangle in top position</li>
					<li>• Long rectangle in bottom position</li>
					<li>• Long rectangle in interior position</li>
			    </Panel>
			</Collapse>

			<p className='credits'>Made by <a href="https://kalli-retzepi.com/" target='_blank' rel="noopener noreferrer" >Kalli</a> during her time at the <a href="https://www.recurse.com/" target='_blank' rel="noopener noreferrer">Recurse Center</a>.</p>
		</div>
    )
}

export default Information