import React from "react";
import { getAllProjects } from "../lib/api";
import { getAllGalleryImages } from "../lib/api";
import { urlForImage } from "../lib/urlForImage";
import LightGallery from "lightgallery/react";
// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

const projects = await getAllProjects();
const galleryImages = await getAllGalleryImages();

function Projects() {
  const onInit = () => {
    console.log("lightGallery has been initialized");
  };
  return (
    <>
      <LightGallery onInit={onInit} speed={500} plugins={[lgThumbnail, lgZoom]}>
        <slot></slot>
      </LightGallery>
    </>
  );
}

export default Projects;
