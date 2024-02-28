import * as S from './PageLayout.styled';
import {TitleWrapper} from '../TitleWrapper';

export const PageLayout = (props) => {
  return (
    <S.Wrapper>
      <TitleWrapper />
      {props.children}
    </S.Wrapper>
  );
};
