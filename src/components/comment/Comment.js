export default function Comment({item,clickcomment}) {
  const onclickcomment = () => {
       clickcomment(item)
  }
  return (
    <div>
        {item.id} {item.name}
      <button onClick={onclickcomment}>details</button>

    </div>
  );
}




