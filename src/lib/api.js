import { useSanityClient } from "astro-sanity";

export async function getAllPosts() {
  const client = useSanityClient();
  const query = '*[_type == "post"]';
  const params = {};
  const posts = await client.fetch(query, params);
  return posts;
}

export async function getAllProjects() {
  const client = useSanityClient();
  const query = '*[_type == "projects"]';
  const params = {};
  const projects = await client.fetch(query, params);
  return projects;
}

export async function getAllsliderImages() {
  const sliderQuery = '*[_type == "slider"]';
  const sliderParams = {};
  const sliderImages = await useSanityClient().fetch(sliderQuery, sliderParams);
  return sliderImages;
}

export async function getAllCategories() {
  const categoryQuery = '*[_type == "category"]';
  const categoryParams = {};
  const categories = await useSanityClient().fetch(
    categoryQuery,
    categoryParams
  );
  return categories;
}

export async function getAllPromotions() {
  const homeQuery = '*[_type == "promotion"]';
  const homeParams = {};
  const homeImages = await useSanityClient().fetch(homeQuery, homeParams);
  return homeImages
}
