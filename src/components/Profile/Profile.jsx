import css from "./Profile.module.css";

export default function Profile({ name, tag, location, image, stats }) {
  const { followers, views, likes } = stats;

  return (
    <div className={css.card}>
      <div>
        <div className={css.avatar}>
          <img className={css.avatarImage} src={image} alt="User avatar" />
          <p className={css.name}>{name}</p>
          <p className={css.tag}>@{tag} </p>
          <p className={css.location}>{location}</p>
        </div>
        <ul className={css.list}>
          <li className={css.listItem}>
            <span className={css.listItemName}>Followers</span>
            <span className={css.listItemCount}>{followers} </span>
          </li>
          <li className={css.listItem}>
            <span className={css.listItemName}>Views</span>
            <span className={css.listItemCount}>{views} </span>
          </li>
          <li className={css.listItem}>
            <span className={css.listItemName}>Likes</span>
            <span className={css.listItemCount}>{likes} </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
