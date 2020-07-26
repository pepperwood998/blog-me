import PropTypes from "prop-types";

export const ProfileModel = {
  id: PropTypes.string,
  username: PropTypes.string,
  bio: PropTypes.string,
  image: PropTypes.string
};

export const ArticleModel = {
  id: PropTypes.string,
  slug: PropTypes.string,
  title: PropTypes.string,
  slug: PropTypes.string,
  createdAt: PropTypes.string,
  description: PropTypes.string,
  body: PropTypes.string,
  favoritesCount: PropTypes.number,
  tagList: PropTypes.arrayOf(PropTypes.string),
  author: PropTypes.shape({ ...ProfileModel })
};
