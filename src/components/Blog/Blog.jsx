import React from 'react';
import { FaBookmark } from "react-icons/fa";

const Blog = ({blog}) => {
    // console.log(props.blog)
    // const {blog} = props
    console.log(blog)
    return (
        <div>
            {/* <h1>{blog.id}</h1> */}
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure className="px-10 pt-10">
                    <img
                    src= {blog.cover}
                    alt="Shoes"
                    className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                <div className="author flex justify-between items-center w-full"> 
                    <h3>{blog.author}</h3>
                    <img className='w-16 rounded-full' src={blog.author_img} />
                    <FaBookmark size={25}/>
                </div>

                    <h2 className="card-title">{blog.title}</h2>
                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>

                    <div className="flex gap-10">
                    {
                        blog.hashtags.map((has) => <p>{has}</p>)

                    }
                    </div>
                    <div className="card-actions flex justify-end w-full mt-4">
                        <button className="btn btn-primary">make as read</button>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Blog;