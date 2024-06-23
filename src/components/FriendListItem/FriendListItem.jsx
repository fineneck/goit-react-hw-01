import css from "./FriendListItem.module.css";
import clsx from "clsx";

export default function FriendListItem({ image, name, status }) {
  const statusClsx = clsx(status ? css.online : css.offline);
  console.log(status);
  return (
    <div className={css.card}>
      <img src={image} alt="Avatar" width="48" />
      <p className={css.cardName}>{name}</p>
      <p className={statusClsx}>{status ? "Online" : "Offline"}</p>
    </div>
  );
}
