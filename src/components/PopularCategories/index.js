import React from 'react';
import Index from '../Index';
import {
	Div,
	Flex,
	Card,
} from './style';
import {
	AiFillCar,
	AiFillSkin,
	AiFillMobile,
} from 'react-icons/ai';
import {
	BsFillHouseFill,
	BsTv,
} from 'react-icons/bs';
import {
	BiFootball,
} from 'react-icons/bi';

function PopularCategories (argument) {
	return (
		<Div>
			<Index title='Categorias populares' />
			<Flex>
				<Card> <AiFillCar style={{ color: '#2374E1', fontSize: '50px' }}/> </Card>
				<Card> <AiFillCar style={{ color: '#2374E1', fontSize: '50px' }}/> </Card>
				<Card> <AiFillSkin style={{ color: '#2374E1', fontSize: '50px' }}/> </Card>
				<Card> <AiFillMobile style={{ color: '#2374E1', fontSize: '50px' }}/> </Card>
				<Card> <BsTv style={{ color: '#2374E1', fontSize: '50px' }}/> </Card>
				<Card> <AiFillCar style={{ color: '#2374E1', fontSize: '50px' }}/> </Card>
			</Flex>
			<Flex>
				<Card> <BsFillHouseFill style={{ color: '#2374E1', fontSize: '50px' }}/> </Card>
				<Card> <BiFootball style={{ color: '#2374E1', fontSize: '50px' }}/> </Card>
				<Card> <AiFillCar style={{ color: '#2374E1', fontSize: '50px' }}/> </Card>
				<Card> <AiFillCar style={{ color: '#2374E1', fontSize: '50px' }}/> </Card>
				<Card> <AiFillCar style={{ color: '#2374E1', fontSize: '50px' }}/> </Card>
				<Card> <AiFillCar style={{ color: '#2374E1', fontSize: '50px' }}/> </Card>
			</Flex>
		</Div>
	)
}

export default PopularCategories;