import Post from "./Post";

export default function Posts() {
  const posts = [
    {userName: "meowed", contentImgName: "gato-telefone", likedUserName: "respondeai", likesAmount: "101.523"},
    {userName: "barked", contentImgName: "dog", likedUserName: "adorable_animals", likesAmount: "99.159"}
  ];

  return (
    <div className="posts">
      {posts.map(e => <Post data={e}/>)}
    </div>
  );
}