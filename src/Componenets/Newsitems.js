import React from 'react'

const Newsitems=(props)=> {

    let {title,description,imgurl,newsurl,author,date}=props
    return (
      <div className="my-3">
            <div className="card" >
  <img src={!imgurl?"https://assets.newatlas.com/dims4/default/da31188/2147483647/strip/true/crop/1328x885+93+0/resize/1200x800!/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2F80%2Fef%2F5635fe1f4f51bd1872209f8d6b26%2Fscreenshot-2024-05-15-at-6.32.51%E2%80%AFPM.png":imgurl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <p class="card-text"><small class="text-body-secondary">Published by{author} {date} ago</small></p>
    <a href={newsurl} target='_blank' className="btn btn-sm btn-dark">Get Detalis</a>
  </div>
</div>   
      </div>
    )
}

export default Newsitems