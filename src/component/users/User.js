
export default function User({id,name,email}) {

  return (
    <div className={'user'}>
        <h2>{id} {name} {email} </h2>
    </div>
  );
};
