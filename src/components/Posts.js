import Post from "./Post";

export default function Posts() {
  const posts = [
    {userName: "meowed", contentImgName: "gato-telefone", likedUserName: "respondeai", likesAmount: 101523},
    {userName: "barked", contentImgName: "dog", likedUserName: "adorable_animals", likesAmount: 99159}
  ];

  return (
    <div className="posts">
      {posts.map((e, i) => <Post key={i} data={e}/>)}
    </div>
  );
}