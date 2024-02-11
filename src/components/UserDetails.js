import { Link } from 'react-router-dom';
import UserDetail from './UserDetail';
import classes from './UserDetails.module.css';

function UserDetails({ user }) {
  if (!user) {
    return null;
  }

  const userInfo = {
    title: 'User Info',
    arr: [
      { key: 'Name', value: user.name },
      { key: 'Username', value: user.username },
      { key: 'Phone', value: user.phone },
      { key: 'Email', value: user.email },
      { key: 'Website', value: user.website },
    ],
  };

  const userAddress = {
    title: 'Address',
    arr: [
      { key: 'Street', value: user.address.street },
      { key: 'Suite', value: user.address.suite },
      { key: 'City', value: user.address.city },
      { key: 'Zipcode', value: user.address.zipcode },
    ],
  };

  const userCompany = {
    title: 'Company',
    arr: [
      { key: 'Name', value: user.company.name },
      { key: 'CatchPhrase', value: user.company.catchPhrase },
    ],
  };

  const userArr = [userInfo, userAddress, userCompany];

  return (
    <div>
      <div className={classes.header}>
        <div> {user.name.toUpperCase()} </div>
        <Link to="/">
          <button className={classes.buttonLarge}>{' < '}Back</button>
          <button className={classes.buttonSmall}>{' < '}</button>
        </Link>
      </div>
      {userArr.map((data) => (
        <UserDetail data={data} />
      ))}
      {/* <div>
        <h2>User Info</h2>
        <p>
          Name:<span>{user.name}</span>
        </p>
        <p>
          Username:<span>{user.username}</span>
        </p>
        <p>
          Phone:<span> {user.phone}</span>
        </p>
        <p>
          Email: <span>{user.email}</span>
        </p>
        <p>
          Website:<span> {user.website}</span>
        </p>
      </div> */}
      {/* <div>
        <h2>Address</h2>
        <p>
          Street:<span> {user.address.street}</span>
        </p>
        <p>
          Suite: <span>{user.address.suite}</span>
        </p>
        <p>
          City: <span>{user.address.city}</span>
        </p>
        <p>
          Zipcode: <span>{user.address.zipcode}</span>
        </p>
      </div> */}
      {/* <div>
        <h2>Company</h2>
        <p>
          Name: <span>{user.company.name}</span>
        </p>
        <p>
          CatchPhrase: <span>{user.company.catchPhrase}</span>
        </p>
      </div> */}
    </div>
  );
}
export default UserDetails;
