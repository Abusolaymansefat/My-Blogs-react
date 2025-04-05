import React from 'react';

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
    <h2 className="card-title">{blog.title}</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">make as read </button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Blog;