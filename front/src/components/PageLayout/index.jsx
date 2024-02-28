import * as S from './PageLayout.styled';
import {TitleWrapper} from '@/components/TitleWrapper';
import {MenuBar} from '@/components/MenuBar';

export const PageLayout = (props) => {
  return (
    <S.Wrapper>
      <TitleWrapper />
      {props.children}
      <MenuBar />
    </S.Wrapper>
  );
};
