import {useContext} from 'react';
import { GithubContext } from '../providers/github_provider';


const UseGithub = ()  => {
  const {githubState, getUser, getUserRepos, getUserStarred} = useContext (GithubContext);

  return {githubState, getUser, getUserRepos, getUserStarred};
};

export default UseGithub