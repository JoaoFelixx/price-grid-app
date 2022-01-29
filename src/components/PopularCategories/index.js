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
					<AiFillCar /> 
					<Text> Carros, motos e outros </Text>
				</Card>
				<Card> 
					<GiLipstick /> 
					<Text> Beleza e cuidado pessoal </Text>
				</Card>
				<Card> 
					<AiFillSkin /> 
					<Text> Calçados, roupas e bolsas </Text>
				</Card>
				<Card> 
					<AiFillMobile />
					<Text> Celulares e telefones </Text>
				</Card>
				<Card> 
					<BsTv /> 
					<Text> Informática </Text>
				</Card>
			</Flex>

			<Flex>
				<Card> 
					<BsFillHouseFill /> 
					<Text> Imóveis </Text>
				</Card>
				<Card> 
					<BiFootball /> 
					<Text> Esportes e fitness </Text>
				</Card>
				<Card> 
					<RiBearSmileFill /> 
					<Text> Brinquedos e Hobbies </Text>
				</Card>
				<Card> 
					<GiGamepad /> 
					<Text> Games </Text>
				</Card>
				<Card> 	
					<GiSteeringWheel /> 
					<Text> Acessórios de veículos </Text>
				</Card>
			</Flex>
		</Div>
	)
}

export default PopularCategories;