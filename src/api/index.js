import { useLanguage } from '../hooks'
const user = ({ user }) => {

  let [language, collect] = useLanguage();
  const { repositories } = user;

  repositories.edges.forEach(({ node }) => {
    node.languages.edges.forEach(lang => {
      const { name, color } = lang.node;
      collect({
        name,
        color,
        size: lang.size,
        count: 1
      })
    })
  });

  return {
    name: user.name,
    url: user.url,
    login: user.login,
    createdAt: user.createdAt,
    avatar: user.avatarUrl,
    repositoryCount: repositories.totalCount,
    language
  }

}

export async function fetchUser(name) {
  const query = `
query {
  user(login: \"${name}\") {
    url
    name
    login
    createdAt
    avatarUrl
    repositories(first: 100, isFork: false) {
      totalCount
      edges {
        node {
          languages(first:10){
            edges{
              size
              node{
                color
                name
              }
            }
          }
        }
      }
    }
  }
}    
`;
  const res = await fetch("https://api.github.com/graphql", {
    body: JSON.stringify({ query }),
    headers: {
      Authorization: `bearer GITHUB_ACCESS_TOKEN`,
      "Content-Type": "application/x-www-form-urlencoded"
    },
    method: "POST"
  });

  const { data } = await res.json();
  return user(data);
}

export async function fetchOrgMembers(name) {
  const res = await fetch(`https://api.github.com/orgs/${name}/members`, {
    headers: {
      Authorization: `bearer GITHUB_ACCESS_TOKEN`,
      "Content-Type": "application/x-www-form-urlencoded"
    },
  })
  const members = await res.json()
  return members.map(m => m.login)
}
export default {
  fetchUser,
  fetchOrgMembers
}