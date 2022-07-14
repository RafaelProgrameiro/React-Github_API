import React from 'react';
import * as S from './styled';

const RepositoryItem =({name, description, linkToRepo, fullName}) => {
  return (
    <S.Wrapper>
        <S.WrapperTitle>{name}</S.WrapperTitle>
        <S.WrapperFullDescription>{description}</S.WrapperFullDescription>
        <S.WrapperLink href={linkToRepo} target="blank" rel="noreferrer">{fullName}</S.WrapperLink>
    </S.Wrapper>
  )
}

export default RepositoryItem