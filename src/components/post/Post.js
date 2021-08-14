export default function Post({item,clickpost}) {


  const onclickpost = () => {
      clickpost(item)
  }

  return (
    <div>
        {item.id} - {item.title}
      <button onClick={onclickpost}>details</button>

    </div>
  );
}