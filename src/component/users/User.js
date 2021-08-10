
export default function User({id,name,email,}) {

  return (
    <div className={'user'}>
        <h2>{id} {name} {email} </h2>
    </div>


  );
};

export default function Adrees({street}) {
  return (
    <div>
    <h2>{street}</h2>

    </div>
  );
}