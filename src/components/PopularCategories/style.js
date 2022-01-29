import styled from 'styled-components';

const Div = styled.div`
	grid-area: categories;
	width: 90%;
	justify-self: center;
`;

const Flex = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
`;

const Card = styled.div`
	background-color: #fff;
	margin: 1px;
	padding: 10px;
	text-align: center;
	width: 100%;
	height: 100px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const Text = styled.p`
	
`;

export {
	Div,
	Flex,
	Card,
	Text,
}