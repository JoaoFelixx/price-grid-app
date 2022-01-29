import Index from '../Index';
import {
	Div,
	Flex,
	Card,
	Text,
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
import {
	GiLipstick,
	GiSteeringWheel,
	GiGamepad,
} from 'react-icons/gi';
import {
	RiBearSmileFill
} from 'react-icons/ri';


function PopularCategories (argument) {
	return (
		<Div>
			<Index title='Categorias populares' /> <br />
			<Flex>
				<Card> 
					<AiFillCar style={{ color: '#2374E1', fontSize: '50px' }} /> 
					<Text> Carros, motos e outros </Text>
				</Card>
				<Card> 
					<GiLipstick style={{ color: '#2374E1', fontSize: '50px' }} /> 
					<Text> Beleza e cuidado pessoal </Text>
				</Card>
				<Card> 
					<AiFillSkin style={{ color: '#2374E1', fontSize: '50px' }} /> 
					<Text> Calçados, roupas e bolsas </Text>
				</Card>
				<Card> 
					<AiFillMobile style={{ color: '#2374E1', fontSize: '50px' }} />
					<Text> Celulares e telefones </Text>
				</Card>
				<Card> 
					<BsTv style={{ color: '#2374E1', fontSize: '50px' }}/> 
					<Text> Informática </Text>
				</Card>
			</Flex>

			<Flex>
				<Card> 
					<BsFillHouseFill style={{ color: '#2374E1', fontSize: '50px' }} /> 
					<Text> Imóveis </Text>
				</Card>
				<Card> 
					<BiFootball style={{ color: '#2374E1', fontSize: '50px' }} /> 
					<Text> Esportes e fitness </Text>
				</Card>
				<Card> 
					<RiBearSmileFill style={{ color: '#2374E1', fontSize: '50px' }} /> 
					<Text> Brinquedos e Hobbies </Text>
				</Card>
				<Card> 
					<GiGamepad style={{ color: '#2374E1', fontSize: '50px' }} /> 
					<Text> Games </Text>
				</Card>
				<Card> 	
					<GiSteeringWheel style={{ color: '#2374E1', fontSize: '50px' }} /> 
					<Text> Acessórios de veículos </Text>
				</Card>
			</Flex>
		</Div>
	)
}

export default PopularCategories;