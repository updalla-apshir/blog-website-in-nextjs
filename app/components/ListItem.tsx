import Link from "next/link";
import getFormattedDate from "@/lib/getFormattedDate";

type Props = {
  post: BlogPost;
};
const ListItem = ({ post }: Props) => {
  const { id, title, date } = post;
  const formattedDate = getFormattedDate(date);
  return (
    <li className="mt-4 text-2xl dark:text-white/90">
      <Link
        href={`/posts/${id}`}
        className="underline hover:text-black/70 dark:hover:text-white"
      >
        {title}
      </Link>
      <br />
      <span className="text-gray-500 dark:text-gray-400">{formattedDate}</span>
    </li>
  );
};

export default ListItem;
