import React from 'react'
import { Collapse } from 'antd';
import '../styles/Information.css'
import { CaretRightOutlined } from '@ant-design/icons';

function Information() {
	const { Panel } = Collapse;
	return (
		<div className='Information'>
			<h1> Grid Systems</h1>
			<h3> An interactive supplement to <a href="https://www.goodreads.com/book/show/350964.Grid_Systems"> a wonderful book </a> by Kimberly Elam.</h3>
			She writes: <em><p>A 3x3 structure is the format for exploring texture and composition. This simple grid system provides a wide range of variation for exploration within a controlled system of organization. Six rectangles are the compositional elements. A small circle is also used to provide an element for balance, visual control of the composition and contrast.</p> 
			</em>
			<p> I built this interactive prototype in order to rapidly create thumbnails by arranging the compositional elements in accordance to the exercises below.</p>
			<p> Have fun! </p>
			<Collapse
			    defaultActiveKey={['1']}
			  >
			    
			    <Panel showArrow={false} header="HORIZONTAL COMPOSITION" key="1" className="site-collapse-custom-panel">
			      <p>
					<li>Variation 1: Long rectangle in top position</li>
					<li>Variation 2: Long rectangle in bottom position</li>
					<li>Variation 3: Long rectangle in interior position</li>
				</p>
			    </Panel>
			    <hr/>
			    <Panel showArrow={false} header="HORIZONTAL/VERTICAL COMPOSITION" key="2" className="site-collapse-custom-panel">
			      <p>Coming soon </p>
			    </Panel>
			    <hr/>
			    <Panel showArrow={false} header="DIAGONAL COMPOSITION" key="3" className="site-collapse-custom-panel">
			      <p>Coming soon </p>
			    </Panel>
			    <hr/>
			  </Collapse>

			<p className='credits'>Made by <a href="https://kalli-retzepi.com/" target='_blank' rel="noopener noreferrer" >Kalli</a> during her time at the <a href="https://www.recurse.com/" target='_blank' rel="noopener noreferrer">Recurse Center</a>.</p>
		</div>
    )
}

export default Information