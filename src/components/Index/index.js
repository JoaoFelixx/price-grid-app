import {
  SubTitle,
  Content,
  Title,
} from './style';

function Index({ title, subTitle }) {
  return (
    <Content>
      <Title>{title}</Title>
      <SubTitle>{subTitle}</SubTitle>
    </Content>
  )
}

export default Index;