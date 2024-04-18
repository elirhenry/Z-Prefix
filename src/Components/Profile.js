import { useAuth0 } from '@auth0/auth0-react';

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <article>
        {user?.picture && <img src={user.picture} alt={user?.name}></img>}
        {/* <h2>{user?.name}</h2>
        <ul>
          {Object.keys(user).map((objKey, i) =>
        <li key={i}>{objKey}: {user[objKey]}</li>)}
        </ul> */}
      </article>
    )
  )
}

//////////////////////////////////////////////////

// const Login =styled.div`
// font-size:20px;
// color: black;`

//////////////////////////////////////////////////

export default Profile;