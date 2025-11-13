import type { Post } from "./Content";
import "./Publicaciones.css";
import { motion } from "framer-motion";

const Posts = ({ posts }: { posts: Post[] }) => {
  return (
    <section className="publicaciones-section">
      <h1>Publicaciones de Interes Relacionadas a mi trabajo</h1>
      {[...posts]
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .map((post) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="post-wrapper"
          >
            <div className="post-content">
              <h2>{post.title}</h2>
              <p className="post-date">{post.date}</p>
              {post.content.map((paragraph, i) => <p key={i}>{paragraph}</p>)}
              {post.link && (
                <p>
                  {"¿Deseas más informacion? "}
                  <a href={post.link} target="_blank" rel="noopener noreferrer">
                    Click Aqui
                  </a>{" "}
                </p>
              )}
            </div>
            <div className="post-image">
              <img src={post.img} alt={post.title} />
            </div>
          </motion.div>
        ))}
    </section>
  );
};

export default Posts;
