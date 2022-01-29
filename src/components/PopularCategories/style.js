import styled from 'styled-components';

const Div = styled.div`
	grid-area: categories;
	width: 90%;
	justify-self: center;
`;

const Flex = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;

	@media (max-width: 768px) {
		flex-direction: column;	
	}
`;

const Card = styled.div`
	background-color: #fff;
	color: #2374E1;
	margin: 1px;
	width: 100%;
	height: 100px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	font-size: 50px;
	cursor: pointer;

	&:hover {
		background-color: #2374E1;
		color: #fff;
	}
`;

const Text = styled.p`
	font-size: 16px;
`;

export {
	Div,
	Flex,
	Card,
	Text,
}