import React from 'react'

export default function Media(props) {
	const data = props.data
	return (
		<div style={{textAlign: 'center'}}>
			<h2>{data ? data.title : ''}</h2>
			{data 
				? data.media_type == 'image'
					? <img style={{margin: '0 auto'}} src={data.url} /> 
					: <iframe width="960" height="540" src={data.url}></iframe>
				: <div></div>}
				<p style={{padding: '30px'}}>{data ? data.explanation: ''}</p>
		</div>
	)
}