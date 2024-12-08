export const Profile = () => {
  return (
    <>
      <h1>My Profile Challenge</h1>
      <ProfileCard
        name="Sagar"
        age={28}
        greeting={
          <div>
            <p>Hey, you are doing good</p>
          </div>
        }
      >
        <div>
          <p>You got your appraisal</p>
          <button>Review Details</button>
        </div>
      </ProfileCard>
    </>
  );
};

function ProfileCard({name,age,greeting,children}) {
  return (
    <>
      <h2>Name: {name}</h2>
      <p>Age: {age}</p>
      <b>{greeting}</b>
      <div>{children}</div>
    </>
  );
}
