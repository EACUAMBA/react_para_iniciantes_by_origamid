import React from 'react';

function BouncingBall(props) {
	const title = props.title || "bouncing ball";
	const css = `@keyframes nc-loop-bounce-ball-anim-1 { 0% { transform: scale(1); animation-timing-function: cubic-bezier(.61,.12,.85,.4); } 50% { transform: scale(.7); animation-timing-function: cubic-bezier(.12,.59,.46,.95); } 100% { transform: scale(1); } } @keyframes nc-loop-bounce-ball-anim-2 { 0% { transform: translateY(0); animation-timing-function: cubic-bezier(.61,.12,.85,.4); } 50% { transform: translateY(13px); animation-timing-function: cubic-bezier(.12,.59,.46,.95); } 100% { transform: translateY(0); } }`;

	return (
		<svg height="32" width="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<g className="nc-loop-bounce-ball-icon-f" style={{"--animation-duration":"0.8s"}}>
			<ellipse style={{"transformOrigin":"16px 28px","animation":"nc-loop-bounce-ball-anim-1 var(--animation-duration) infinite"}} cx="16" cy="28" fill="#000000" opacity="0.4" rx="10" ry="3"/>
			<circle style={{"transformOrigin":"8px 16px","animation":"nc-loop-bounce-ball-anim-2 var(--animation-duration) infinite"}} cx="16" cy="8" r="7"/>
		</g>
		<style>{css}</style>
	</g>
</svg>
	);
};

export default BouncingBall;