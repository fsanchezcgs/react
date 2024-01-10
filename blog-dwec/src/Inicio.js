import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Inicio = () => {

    const [blogs, setBlogs] = useState([
        { titulo: "Mi nueva web", body: "texto para mostrar", autor: "Joan", id:1},
        { titulo: "Fiesta del Ramis", body: "mucha paella", autor: "Enrique", id:2},
        { titulo: "Tecnicas de estudio", body: "echarle horas", autor: "Irene", id:3}
    ]);

    const [nombre, setNombre] = useState("Pepito");

    const handleEliminarBlog = (id) => {
        const nuevoBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(nuevoBlogs);
    }

    const [bo, setBo] = useState(false);

    useEffect(() => {
        console.log("useEffect en marcha");
        console.log(blogs);
    }, [nombre]);

    return ( 
        <div className="home">
            <BlogList blogs={blogs} titulo = "Listado de Blogs" handleEliminarBlog = {handleEliminarBlog} />
            {/* <BlogList blogs={blogs.filter(blog => blog.autor === "Enrique")} titulo = "Blogs de Enrique" /> */}
            <p>{nombre}</p>
            <button onClick={() => setNombre("Pepa")}>Cambio de nombre</button>
        </div>
     );
}
 
export default Inicio;


// useEffect