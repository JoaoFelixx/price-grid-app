import styled from 'styled-components';

const Div = styled.div`
	grid-area: categories;
	width: 90%;
	justify-self: center;
`;

const Flex = styled.div`
	width: 100%;
	background-color: red;
	display: flex;
	flex-direction: row;

	@media (max-width: 768px) { flex-direction: column; }
`;

const Card = styled.div`
	background-color: black;
	width: 100%;
	height: 100px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export {
	Div,
	Flex,
	Card,
}