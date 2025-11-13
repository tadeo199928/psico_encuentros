import { content } from "../components/Publicaciones/Content";
import Posts from "../components/Publicaciones/Publicaciones";

const Post = () => {
  return (
    <>
      <Posts posts={content}/>
    </>
  );
};

export default Post;