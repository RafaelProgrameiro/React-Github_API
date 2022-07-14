import React from 'react'
import * as S from './styled';
import useGithub from '../../hooks/github_hooks';

const Profile = () => {

    const {githubState} = useGithub();

  return (
    <S.Wrapper>
    
        <S.WrapperImage src={githubState.user.avatar} alt='User Avatar'/>
    
        <S.WrapperInfoUser>

            <div>
                <h1>{githubState.user.name}</h1>

                <S.WrapperUserName>
                    <h3>User Name: </h3>
                    <a href={githubState.user.htmlUrl} target="blank" rel="noreferrer">{githubState.user.login}</a>
                    <h3>Location: {githubState.user.location}</h3>
                </S.WrapperUserName>       

            </div>

            
                <S.WrapperStatusCount>
                    <div>
                        <h4>Followers</h4>
                        <span>{githubState.user.followers}</span>
                    </div>

                    <div>
                        <h4>Followings</h4>
                        <span>{githubState.user.following}</span>
                    </div>

                    <div>
                        <h4>Gists</h4>
                        <span>{githubState.user.publicGists}</span>
                    </div>

                    <div>
                        <h4>Repositories</h4>
                        <span>{githubState.user.publicRepos}</span>
                    </div>
                </S.WrapperStatusCount>

        </S.WrapperInfoUser>
    

    </S.Wrapper>
    



);
    
  
};

export default Profile;