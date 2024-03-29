import React from "react";
import { getAllProjects } from "../lib/api";
import { getAllGalleryImages } from "../lib/api";
import { LightGallery, Image } from "lightgallery/lightgallery";
// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import Styles from "../dist/css/galstyles.module.css";

const projects = await getAllProjects();

const galleryImages = await getAllGalleryImages();

function Projects() {
  const onInit = () => {
    console.log("lightGallery has been initialized");
  };
  return (
    <>
      <LightGallery onInit={onInit} speed={500} plugins={[lgThumbnail, lgZoom]}>
        <ul className={Styles.gallery - container}>
          {projects.map((project) => (
            <section id="lightgallery">
              <div className="catolgue-intro" />
              <li className="project-item-container" id="lightgallery">
                <a
                  href={urlForImage(project.mainImage).url()}
                  data-lg-size="1600-2400"
                >
                  <Image
                    src={urlForImage(project.mainImage).url()}
                    className="project-image"
                    alt={project.title}
                    height={300}
                    width={400}
                  />
                </a>
                <p>the</p>

                <div className="thumnail-container">
                  {galleryImages.map((galleryImage) => {
                    if (project.gallertImages != undefined) {
                      return (
                        <a href="thumbnail-click">
                          <Image
                            alt="project-thumnail"
                            className="thumnail-img"
                            src={urlForImage(project.galleryImage).url()}
                            inferSize
                          />
                          <p>testtesttesr</p>
                        </a>
                      );
                    }
                  })}
                </div>

                <a
                  href={`/posts/${project.slug.current}`}
                  className="project-text"
                >
                  <h3 className="project-title project-text">
                    {project.title}
                  </h3>
                  <p className="project-description project-text">
                    {project.body[0].children[0].text}
                  </p>
                </a>
              </li>
            </section>
          ))}
        </ul>
      </LightGallery>

      <LightGallery onInit={onInit} speed={500} plugins={[lgThumbnail, lgZoom]}>
        <a href="img/img1.jpg">
          <img alt="img1" src="img/thumb1.jpg" />
        </a>
        <a href="img/img2.jpg">
          <img alt="img2" src="img/thumb2.jpg" />
        </a>
        ...
      </LightGallery>
    </>
  );
}

export default Projects;
